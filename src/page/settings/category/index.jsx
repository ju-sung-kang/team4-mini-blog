import React, { useEffect, useState} from 'react';
import db from '../../../firebase';
import * as S from './styles';

function SettingsCategory() {
    const [categories, setCategories] = useState([]);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [currentCategory, setCurrentCategory] = useState(null);

    const addCategory = (e) => {
        e.preventDefault();
        setIsAdding(true);
        setCurrentCategory({
            title : "게시판"
        })
        //setCategories([...categories, {"id":"id"+categories.length, "name" : null, "topic" : null}]);
    }

    const deleteCategory = (e) => {
        e.preventDefault();
        if (window.confirm('정말 삭제하시겠습니까? 해당 게시판에 쓰여진 모든 글들이 삭제됩니다.')) {
            const currentCategories = [...categories];
            const ct = currentCategories.filter(el => el.id == e.target.id);
            if(ct.length > 0) {
                db.collection("category").doc(e.target.id).delete().then(() => {
                    console.log("Document successfully deleted!");
                }).catch((error) => {
                    console.error("Error removing document: ", error);
                });
            }
        }
 
    }

    const handleUpdateBtn = (e) => {
        e.preventDefault();
        setIsEditing(true);
        const currentCategories = [...categories];
        const ct = currentCategories.filter(el => el.id == e.target.id);
        if(ct.length > 0) {
            setCurrentCategory(ct[0]);
        }
        
    }

    const cancelEditing = (e) => {
        e.preventDefault();
        setIsEditing(false);
    }

    const cancelAdding = (e) => {
        e.preventDefault();
        setIsAdding(false);
    }

    const registerCategory = (e) => {
        e.preventDefault()
        db.collection('category').add({
            title : currentCategory.title,
            postCounts : 0,
        }).then(() => {
            alert("등록이 성공적으로 완료되었습니다.");
            setIsAdding(false);
        }).catch((error) => {
            alert("등록 중에 오류가 발생하였습니다. 다시 시도해주세요.");
        });
    }

    const updateCategory = (e) => {
        e.preventDefault()
        db.collection('category').doc(currentCategory.id).update({
            title : currentCategory.title
        }).then(() => {
            alert("수정이 성공적으로 완료되었습니다.");
            setIsEditing(false);
        }).catch((error) => {
            alert("수정 중에 오류가 발생하였습니다. 다시 시도해주세요.");
        });
    }

    const updateCurrentCategoryName = (e) => {
        e.preventDefault();
        setCurrentCategory({...currentCategory, title:e.target.value });

    }

    useEffect(() => {
        const unsubscribe = db
        .collection('category')
        .onSnapshot(snapshot => (
            setCategories(snapshot.docs.map(doc => {
                var data = doc.data();
                data.id = doc.id;
                return data;
            }))
        ))

        return () => {
            unsubscribe();
        }

    }, []);

    return (
        <S.CategorySettingsContainer>
            <S.Title>📌카테고리 관리</S.Title>
            <S.CategorySettingsInnerBox>
                <S.CategorySettingsControls>
                    <S.Desc>
                        카테고리를 추가/수정/삭제할 수 있습니다.
                    </S.Desc>
                    <S.CategoryForm>
                        <S.CategoryTable>
                            <S.CategoryTableHeader>
                                {/* <S.CategoryTableRow>
                                    <S.CategoryTableRowData>분류 전체보기</S.CategoryTableRowData>
                                </S.CategoryTableRow> */}
                            </S.CategoryTableHeader>                            
                            <S.CategoryTableBody>
                                { categories.map((el, i) => (
                                    <S.CategoryTableRow key={`row${i}`}>
                                        <S.CategoryTableRowData>
                                            {el.id}
                                        </S.CategoryTableRowData>
                                        <S.CategoryTableRowData>
                                            {
                                                el.title
                                            }
                                        </S.CategoryTableRowData>
                                        <S.CategoryTableRowData>
                                            
                                            {el.postCounts 
                                            }
                                        </S.CategoryTableRowData>
                                        <S.CategoryTableRowData>
                                            <S.CategoryUpdateButton id={el.id} onClick={handleUpdateBtn}>수정</S.CategoryUpdateButton>
                                            <S.CategoryDeleteButton id={el.id} onClick={deleteCategory}>삭제</S.CategoryDeleteButton>
                                            {/* <S.CategoryAddSaveButton onClick={findIndex}>확인</S.CategoryAddSaveButton> */}
                                            
                                        </S.CategoryTableRowData>
                                    </S.CategoryTableRow>
                                    
                                    

                                ))}
                                
                            </S.CategoryTableBody>
                        </S.CategoryTable>
                        <S.CategoryAddButton onClick={addCategory}>카테고리 추가</S.CategoryAddButton>
                    </S.CategoryForm>
                    
                </S.CategorySettingsControls>
                {/* <S.SaveButtonContainer>
                    <S.SaveButton></S.SaveButton>
                </S.SaveButtonContainer> */}
            </S.CategorySettingsInnerBox>
            {(isAdding || isEditing) && 
            <S.DimView>
                <S.CategoryAddForm>
                    <S.CategoryTable>
                        <S.CategoryTableBody>
                            <S.CategoryTableRow>
                                <S.CategoryTableRowHead>게시판 이름</S.CategoryTableRowHead>
                                <S.CategoryTableRowData>
                                    <S.CategoryNameInput onChange={updateCurrentCategoryName} value={currentCategory.title}></S.CategoryNameInput>
                                </S.CategoryTableRowData>
                            </S.CategoryTableRow>
                        </S.CategoryTableBody>
                    </S.CategoryTable>
                    <S.SaveEditedButton onClick = {isAdding ? registerCategory : updateCategory }>{isAdding ? "등록" : "수정"}</S.SaveEditedButton>
                    <S.SaveCancelButton onClick = {isAdding ? cancelAdding : cancelEditing }>취소</S.SaveCancelButton>
                </S.CategoryAddForm>
            </S.DimView>

            }
        </S.CategorySettingsContainer>
    )
}

export default SettingsCategory
