import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';
import db from '../../../firebase';

function SettingsBlogInfo() {

    const [blogInfo, setBlogInfo] = useState({blogName : "", nickName: "", profileImageUrl : "", defCategory: "", bannerImageUrl: ""})
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        db.collection('blogInfo').doc('info').get()
        .then((doc) => {
            console.log(doc);
            doc.exists && setBlogInfo(doc.data());
        }).then(() => {
            db.collection('categories')
            .onSnapshot(snapshot => (
            setCategories(snapshot.docs.map(doc => {
                var data = doc.data();
                data.id = doc.id;
                return data;
            }))))
        })

    }, [])

    const saveInfo = (e) => {
        e.preventDefault();
        db.collection('blogInfo').doc('info').update(blogInfo).then(() => {
            alert("수정이 성공적으로 완료되었습니다.");
        }).catch((error) => {
            alert("수정 중에 오류가 발생하였습니다. 다시 시도해주세요.");
        });
    }


    return (
        <S.BlogInfoContainer>
            <Link to="/">메인</Link>
            <S.BlogInfoTitle>🖍블로그 정보</S.BlogInfoTitle>
            <S.BlogInfoTable>
                <S.BlogInfoTableBody>
                    <S.BlogInfoRow>
                        <S.BlogInfoRowHeader>블로그명</S.BlogInfoRowHeader>
                        <S.BlogInfoRowData>
                            <S.BlogInfoInput 
                                type="text" 
                                name="blogName" 
                                value={blogInfo.blogName} 
                                onChange={e => setBlogInfo({...blogInfo, blogName : e.target.value})} />
                            <S.InputDesc>한글, 영문, 숫자 혼용가능(한글 기준 25자 이내)</S.InputDesc>
                        </S.BlogInfoRowData>
                    </S.BlogInfoRow>
                    <S.BlogInfoRow>
                        <S.BlogInfoRowHeader>별명</S.BlogInfoRowHeader>
                        <S.BlogInfoRowData>
                            <S.BlogInfoInput
                                name="nickName"
                                value={blogInfo.nickName}
                                onChange={e => setBlogInfo({...blogInfo, nickName : e.target.value})} />
                            <S.InputDesc>한글, 영문, 숫자 혼용가능(한글 기준 10자 이내)</S.InputDesc>
                        </S.BlogInfoRowData>
                    </S.BlogInfoRow>
                    <S.BlogInfoRow>
                        <S.BlogInfoRowHeader>소개글</S.BlogInfoRowHeader>
                        <S.BlogInfoRowData>
                            <S.BlogInfoTextarea />
                            <S.InputDesc>
                                블로그 프로필 영역의
                                <br/>
                                프로필 이미지 아래에 반영됩니다.
                            </S.InputDesc>
                        </S.BlogInfoRowData>
                    </S.BlogInfoRow>
                    <S.BlogInfoRow>
                        <S.BlogInfoRowHeader>메인 카테고리</S.BlogInfoRowHeader>
                        <S.BlogInfoRowData>
                            <S.BlogMainCategorySelect 
                            name="defCategory" 
                            value={blogInfo.defCategory} 
                            onChange={e => setBlogInfo({...blogInfo, defCategory : e.target.value})}>
                                {categories.map((category) => <option value={category.id}>{category.name}</option>)}
                            </S.BlogMainCategorySelect>
                            <S.InputDesc>
                                기본으로 노출될 카테고리를 선택하세요.
                                <br/>
                                메인 영역에 노출됩니다.
                            </S.InputDesc>
                        </S.BlogInfoRowData>
                    </S.BlogInfoRow>
                    <S.BlogInfoRow>
                        <S.BlogInfoRowHeader>블로그 프로필 이미지</S.BlogInfoRowHeader>
                        <S.BlogInfoRowData>
                        <S.BlogInfoInput name="profileImageUrl" value={blogInfo.profileImageUrl} onChange={e => setBlogInfo({...blogInfo, profileImageUrl : e.target.value})} />
                        </S.BlogInfoRowData>
                    </S.BlogInfoRow>
                    <S.BlogInfoRow>
                        <S.BlogInfoRowHeader>블로그 배너 이미지</S.BlogInfoRowHeader>
                        <S.BlogInfoRowData>
                        <S.BlogInfoInput name="bannerImageUrl" value={blogInfo.bannerImageUrl} onChange={e => setBlogInfo({...blogInfo, bannerImageUrl : e.target.value})} />
                        </S.BlogInfoRowData>
                    </S.BlogInfoRow>
                </S.BlogInfoTableBody>
            </S.BlogInfoTable>
            <S.BlogInfoSaveBtn type = "submit" onClick={saveInfo}>확인</S.BlogInfoSaveBtn>
        </S.BlogInfoContainer>
    )
}

export default SettingsBlogInfo
