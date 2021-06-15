import React, { useState, useEffect } from 'react';
// import firebase from 'firebase';
import db from '../../firebase';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import * as S from './styles';
import Reply from '../../components/reply/index';

function ViewPosting() {
    const { search } = useLocation();
    const { categoryId } = queryString.parse(search);
    const { postId } = queryString.parse(search);
    const [ category, setCategory ] = useState("");
    const [ post, setPost] = useState({title : "가져오는 중입니다", text : "가져오는 중입니다", regDate : "가져오는 중입니다" });

    useEffect(() => {

        const categoryRef = db
        .collection('categories')
        .doc(categoryId)


        categoryRef
        .get()
        .then((doc) => {
            doc.exists && setCategory(doc.data().name);
        }).catch((error) => {
            console.log("Error getting document:", error);
        })

        categoryRef
        .collection('posts')
        .doc(postId)
        .get()
        .then((doc) => {
            doc.exists && setPost(doc.data());
        }).catch((error) => {
            console.log("Error getting document:", error);
        })
    }, [])

    return (
        <S.PostingContainer>
            <S.PostingHeader>
                <S.PostingCategory>{category}</S.PostingCategory>
                <S.PostingTitle>{post.title}</S.PostingTitle>
                <div>
                    <S.PostingDate>{post.regDate}</S.PostingDate>
                </div>

            </S.PostingHeader>
            <S.PostingBody>
                { post.text }
            </S.PostingBody>

            <Reply categoryID={categoryId} postID={postId}/>
            
        </S.PostingContainer>
    )
}

export default ViewPosting
