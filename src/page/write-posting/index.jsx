import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import queryString from 'query-string';
import db from '../../firebase';
import * as S from './styles';

const WritePosting = () => {
    const { search } = useLocation();
    const { categoryId } = queryString.parse(search);
    const history = useHistory();

    const submit = () => {
        const titleElement = document.getElementById('title-control');
        const textAreaElement = document.getElementById('form-control');
        const urlElement = document.getElementById('url-control');
        if (titleElement.value === "") {
            alert("글 제목을 입력해주세요");
        }
        else if (textAreaElement.value === ""){
            alert("글 내용을 입력해주세요");
        }
        else{
            const today = new Date();
            db.collection("categories").doc(categoryId).collection('posts')
            .add({
                text: textAreaElement.value, 
                title: titleElement.value,
                regDate: today.toLocaleString([], {hour12: false}).replace(/시 /g, ":").replace(/분 /g, ":").replace(/초/g, ""),
                heart: 0,
                time: Date.now(),
                postImageUrl: urlElement.value
            },{merge:true}).then(()=>{
                alert("작성 완료");
                history.push('/');
            }).catch((error) => {
                console.error("Error writing document: ", error);
            });
        }
    }

    const h1TagPush = () => {
        const element = document.getElementById('form-control');
        const original = element.value;
        const startPos = element.selectionStart;
        const endPos = element.selectionEnd;
        var front = '';
        var end = '';
        var cur = '';
        if (startPos === endPos){
            front = original.substring(0,startPos);
            end = original.substring(endPos,original.length);

            element.value = front + '# ' + end;
        }
        else{
            front = original.substring(0,startPos);
            end = original.substring(endPos,original.length);
            cur = original.substring(startPos, endPos);

            element.value = front + '# ' + cur + end;
        }
    }

    const h2TagPush = () => {
        const element = document.getElementById('form-control');
        const original = element.value;
        const startPos = element.selectionStart;
        const endPos = element.selectionEnd;
        var front = '';
        var end = '';
        var cur = '';
        if (startPos === endPos){
            front = original.substring(0,startPos);
            end = original.substring(endPos,original.length);

            element.value = front + '## ' + end;
            element.focus();
        }
        else{
            front = original.substring(0,startPos);
            end = original.substring(endPos,original.length);
            cur = original.substring(startPos, endPos);

            element.value = front + '## ' + cur + end;
            element.focus()
        }
    }

    const h3TagPsuh = () => {
        const element = document.getElementById('form-control');
        const original = element.value;
        const startPos = element.selectionStart;
        const endPos = element.selectionEnd;
        var front = '';
        var end = '';
        var cur = '';
        if (startPos === endPos){
            front = original.substring(0,startPos);
            end = original.substring(endPos,original.length);

            element.value = front + '### ' + end;
            element.focus();
        }
        else{
            front = original.substring(0,startPos);
            end = original.substring(endPos,original.length);
            cur = original.substring(startPos, endPos);

            element.value = front + '### ' + cur + end;
            element.focus();
        }
    }

    const toItalic = () => {
        const element = document.getElementById('form-control');
        const original = element.value;
        const startPos = element.selectionStart;
        const endPos = element.selectionEnd;
        var front = '';
        var end = '';
        var cur = '';
        if (startPos !== endPos){
            front = original.substring(0,startPos);
            end = original.substring(endPos,original.length);
            cur = original.substring(startPos, endPos);

            element.value = front + '_' + cur + '_' + end;
            element.focus();
        }
    }

    const toBold = () => {
        const element = document.getElementById('form-control');
        const original = element.value;
        const startPos = element.selectionStart;
        const endPos = element.selectionEnd;
        var front = '';
        var end = '';
        var cur = '';
        if (startPos !== endPos){
            front = original.substring(0,startPos);
            end = original.substring(endPos,original.length);
            cur = original.substring(startPos, endPos);

            element.value = front + '**' + cur + '**' + end;
            element.focus();
        }
    }

    const toHome = () => {
        history.replace('/');
    }



    return (
        <S.WritePostingContainer>
             <S.WritePostingHeader>
                 <S.Logo onClick={toHome}>홈</S.Logo>
                 <S.PostingWriteButton onClick={submit}>upload</S.PostingWriteButton>
             </S.WritePostingHeader>
             <S.WritePostingInfoContainer>
                 <S.InfoContainerTitleLabel>제목:</S.InfoContainerTitleLabel>
                 <S.WritePostingTitle id="title-control" placeholder="제목을 입력해주세요"/>
                 <S.PostingImageLabel>🖼️ 포스팅 대표 이미지 URL 입력:</S.PostingImageLabel>
                 <S.PostingImageUrlInput id="url-control" placeholder="웹검색으로 이미지주소를 넣어주세요"></S.PostingImageUrlInput>
             </S.WritePostingInfoContainer>
             <S.StyleMenuContainer>
                 <S.h1TagButton onClick={h1TagPush}>h1</S.h1TagButton>
                 <S.h2TagButton onClick={h2TagPush}>h2</S.h2TagButton>
                 <S.h3TagButton onClick={h3TagPsuh}>h3</S.h3TagButton>
                 <S.BoldButton onClick={toBold}>B</S.BoldButton>
                 <S.ItalicButton onClick={toItalic}>i</S.ItalicButton>
             </S.StyleMenuContainer>
             <S.WriteRegionContainer>
                 <S.WriteRegion id="form-control" rows="35" placeholder="내용을 입력해주세요"/>
             </S.WriteRegionContainer>
        </S.WritePostingContainer>
    );
};

export default WritePosting;