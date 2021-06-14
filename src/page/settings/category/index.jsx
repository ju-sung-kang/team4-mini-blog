import React, { useEffect, useState, useRef} from 'react';
import { Link } from 'react-router-dom';
import db from '../../../firebase';
import * as S from './styles';

function SettingsCategory() {
    const [categories, setCategories] = useState([]);
    const [defCategory, setDefCategory] = useState("");
    const defCategoryRef = useRef();
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [currentCategory, setCurrentCategory] = useState(null);

    const isValidCategory = (id) => {
        return categories.filter(ctgry => { return id === ctgry.id} ).length > 0
    }

    const addCategory = (e) => {
        e.preventDefault();
        setIsAdding(true);
        setCurrentCategory({
            name : "게시판",
        })
        //setCategories([...categories, {"id":"id"+categories.length, "name" : null, "topic" : null}]);
    }

    const deleteCategory = (e, targetId) => {
        e.preventDefault();
        if (window.confirm('정말 삭제하시겠습니까? 해당 게시판에 쓰여진 모든 글들이 삭제됩니다.')) {
            const currentCategories = [...categories];
            const ct = currentCategories.filter(el => el.id == targetId);
            if(ct.length > 0) {
                db.collection("categories").doc(targetId).delete().then(() => {
                    console.log("Document successfully deleted!");
                }).catch((error) => {
                    console.error("Error removing document: ", error);
                });
            }
        }
 
    }

    const handleUpdateBtn = (e, targetId) => {
        e.preventDefault();
        console.log(targetId);
        setIsEditing(true);
        const currentCategories = [...categories];
        const ct = currentCategories.filter(el => el.id == targetId);
        ct.length > 0 && setCurrentCategory(ct[0]);
        
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
        db.collection('categories').add({
            name : currentCategory.name,
            time : Date.now(),
        }).then(() => {
            alert("등록이 성공적으로 완료되었습니다.");
            setIsAdding(false);
        }).catch((error) => {
            alert("등록 중에 오류가 발생하였습니다. 다시 시도해주세요.");
        });
    }

    const updateCategory = (e) => {
        e.preventDefault()
        db.collection('categories').doc(currentCategory.id).update({
            name : currentCategory.name
        }).then(() => {
            alert("수정이 성공적으로 완료되었습니다.");
            setIsEditing(false);
        }).catch((error) => {
            alert("수정 중에 오류가 발생하였습니다. 다시 시도해주세요.");
        });
    }

    const updateCurrentCategoryName = (e) => {
        e.preventDefault();
        setCurrentCategory({...currentCategory, name:e.target.value });

    }

    const updateDefCategory = (e) => {
        e.preventDefault();
        const val = defCategoryRef.current.value;
        console.log(val);
        if (val === "") {
            alert("카테고리를 생성해주세요!");
            return 
        }

        db.collection('blogInfo').doc('info').update(
            {'defCategory' : val}
        ).then(() => {
            setDefCategory(val);
            alert("수정이 성공적으로 완료되었습니다.");
        }).catch((error) => {
            alert("수정 중에 오류가 발생하였습니다. 다시 시도해주세요.");
        });
    }

    useEffect(() => {
        db.collection('categories')
        .orderBy('time')
        .onSnapshot(snapshot => (
            setCategories(snapshot.docs.map(doc => {
                var data = doc.data();
                data.id = doc.id;
                return data;
            }))
        ))

        db.collection('blogInfo').doc('info').get()
            .then((doc) => {
            doc.exists && setDefCategory(doc.data().defCategory);
        })
    }, []);

    return (
        <S.CategorySettingsContainer>
            <Link to="/">메인</Link>
            <S.Title>📌 카테고리 설정</S.Title>
            <S.Container withMargin>
                <S.Container withMargin>
                    <S.Subtitle>메인 카테고리</S.Subtitle>
                    <S.Desc>
                        기본으로 노출될 카테고리를 선택하세요.
                        <br/>
                        메인 영역에 노출됩니다.
                    </S.Desc>
                    <S.BlogDefCategorySelect 
                        ref = { defCategoryRef }
                        value={isValidCategory(defCategory) ? defCategory : "" } 
                        onChange={e => setDefCategory(e.target.value)}
                        >
                        {categories.length == 0 && <option value="">카테고리를 생성해주세요.</option> }
                        {categories.map((category) => <option value={category.id}>{category.name}</option>)}
                    </S.BlogDefCategorySelect>
                    <S.Container>
                        <S.CommonButton onClick={updateDefCategory}>설정</S.CommonButton>
                    </S.Container>
                </S.Container>
                <S.Container withMargin>
                    <S.Subtitle>카테고리 관리</S.Subtitle>
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
                                            { el.name }
                                        </S.CategoryTableRowData>
                                        <S.CategoryTableRowData>
                                        <S.Container align='right'>
                                            <S.CommonButton onClick={e => handleUpdateBtn(e, el.id)}>수정</S.CommonButton>
                                            <S.CommonButton onClick={e => deleteCategory(e, el.id)}>삭제</S.CommonButton>
                                        </S.Container>
                                            
                                            
                                        </S.CategoryTableRowData>
                                    </S.CategoryTableRow>
                                ))}
                                
                            </S.CategoryTableBody>
                        </S.CategoryTable>
                        <S.CategoryAddButton onClick={addCategory}>카테고리 추가</S.CategoryAddButton>
                    </S.CategoryForm>
                    
                </S.Container>
            </S.Container>
            {(isAdding || isEditing) && 
            <S.DimView>
                <S.CenterContainer>
                    <S.Container align='center' withMargin>{isAdding ? "카테고리 추가" : "카테고리 수정" }</S.Container>
                    <S.CategoryAddForm>
                        <S.CategoryTable withBottomMargin>
                            <S.CategoryTableBody>
                                <S.CategoryTableRow>
                                    <S.CategoryTableRowHead>게시판 이름</S.CategoryTableRowHead>
                                    <S.CategoryTableRowData>
                                        <S.CategoryNameInput onChange={updateCurrentCategoryName} value={currentCategory.name}></S.CategoryNameInput>
                                    </S.CategoryTableRowData>
                                </S.CategoryTableRow>
                            </S.CategoryTableBody>
                        </S.CategoryTable>
                        <S.Container align='center'>
                            <S.CommonButton onClick = {isAdding ? registerCategory : updateCategory }>{isAdding ? "등록" : "수정"}</S.CommonButton>
                            <S.CommonButton onClick = {isAdding ? cancelAdding : cancelEditing }>취소</S.CommonButton>
                        </S.Container>
                    </S.CategoryAddForm>
                </S.CenterContainer>
                
            </S.DimView>

            }
        </S.CategorySettingsContainer>
    )
}

export default SettingsCategory
