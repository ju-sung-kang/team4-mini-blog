import React from 'react';
import * as S from './styles';

const WritePosting = () => {
    return (
        <S.WritePostingContainer>
             <S.WritePostingHeader>
                 <S.Logo>blog</S.Logo>
                 <S.PostingWriteButton>발행</S.PostingWriteButton>
             </S.WritePostingHeader>
             <S.WritePostingInfoContainer>
                 <S.WritePostingCategory>
                    <option value="">카테고리</option>
                    <option value="학생">게임</option>
                    <option value="회사원">코딩</option>
                    <option value="기타">맛집</option>
                 </S.WritePostingCategory>
                 <S.InfoContainerTitleLabel>제목:</S.InfoContainerTitleLabel>
                 <S.WritePostingTitle/>
                 <S.FileAdd>📂 파일</S.FileAdd>
             </S.WritePostingInfoContainer>
             <S.StyleMenuContainer>
                 <S.LetterFont>
                    <option value="">글꼴</option>
                    <option value="학생">맑은 고딕</option>
                    <option value="회사원">궁서체</option>
                    <option value="기타">신명조</option>
                 </S.LetterFont>
                 <S.LetterFontSize>
                    <option value="">글씨 크기</option>
                    <option value="학생">10</option>
                    <option value="회사원">14</option>
                    <option value="기타">18</option>
                 </S.LetterFontSize>
                 <S.LetterLayout>
                    <option value="">글 배치</option>
                    <option value="학생">좌</option>
                    <option value="회사원">우</option>
                    <option value="기타">가운데</option>
                 </S.LetterLayout>
             </S.StyleMenuContainer>
             <S.WriteRegionContainer>
                 <S.WriteRegion/>
             </S.WriteRegionContainer>
        </S.WritePostingContainer>
    );
};

export default WritePosting;