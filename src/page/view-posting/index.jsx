import React, { useState, useEffect } from 'react';
// import firebase from 'firebase';
import db from '../../firebase';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import * as S from './styles';

function ViewPosting() {
    const { search } = useLocation();
    const { categoryId } = queryString.parse(search);
    const { postId } = queryString.parse(search);
    const [ category, setCategory ] = useState("");
    const [ post, setPost] = useState({title : "가져오는 중입니다", text : "가져오는 중입니다", regDate : "가져오는 중입니다" });
    const [ heartOn, setHeartOn ] = useState(false);

    useEffect(() => {
        console.log(categoryId);

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

        // var docRef = db.collection("posting").doc("u649YBQQpqOBnc449yN6");
        // docRef.onSnapshot((doc) => {
        //     setPosting(doc.data());
        // });
    }, [])

    // const updateHeart = (e) => {
    //     e.preventDefault();
    //     var postRef = db.collection('posting').doc("u649YBQQpqOBnc449yN6");
    //     postRef.update({
    //         heart: firebase.firestore.FieldValue.increment(heartOn ? -1 : 1)
    //     }).then(() => {
    //         setHeartOn(!heartOn)
    //     }).catch((error) => {
    //         console.log("공감 오류가 발생했습니다");
    //     });
    // }

    return (
        <S.PostingContainer>
            <S.PostingHeader>
                <S.PostingCategory>{category}</S.PostingCategory>
                <S.PostingTitle>{post.title}</S.PostingTitle>
                <div>
                    {/* <S.PostingWriter>{post.writer}</S.PostingWriter> */}
                    <S.PostingDate>{post.regDate}</S.PostingDate>
                </div>

            </S.PostingHeader>
            <S.PostingBody>
                <p>{ post.text } </p>
                {/* <S.PostingHeart onClick={updateHeart}>공감{posting.heart}</S.PostingHeart>
                <S.PostingReply>댓글{posting.reply}</S.PostingReply> */}
            </S.PostingBody>
            
        </S.PostingContainer>
    )
}

export default ViewPosting
