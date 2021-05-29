import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import db from '../../Firebase';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import * as S from './styles';

function ViewPosting() {
    // const { search } = useLocation();
    // const { postId } = queryString.parse(search);
    const [posting, setPosting] = useState();
    const [heartOn, setHeartOn] = useState(false);

    useEffect(() => {
        // const unsubscribe = db
        // .collection('posting')
        // .doc('u649YBQQpqOBnc449yN6')
        // .then((doc) => {
        //     doc.exists && setPosting(doc.data());
        // }).catch((error) => {
        //     console.log("Error getting document:", error);
        // })

        var docRef = db.collection("posting").doc("u649YBQQpqOBnc449yN6");
        docRef.onSnapshot((doc) => {
            setPosting(doc.data());
        });
    }, [])

    const updateHeart = (e) => {
        e.preventDefault();
        var postRef = db.collection('posting').doc("u649YBQQpqOBnc449yN6");
        postRef.update({
            heart: firebase.firestore.FieldValue.increment(heartOn ? -1 : 1)
        }).then(() => {
            setHeartOn(!heartOn)
        }).catch((error) => {
            console.log("공감 오류가 발생했습니다");
        });
    }

    return posting ? (
        <S.PostingContainer>
            <S.PostingHeader>
                <S.PostingCategory>{posting.category}</S.PostingCategory>
                <S.PostingTitle>{posting.title}</S.PostingTitle>
                <div>
                    <S.PostingWriter>{posting.writer}</S.PostingWriter>
                    <S.PostingDate>{posting.regDate}</S.PostingDate>
                </div>

            </S.PostingHeader>
            <S.PostingBody>
                <p dangerouslySetInnerHTML={{__html: posting.text}} />
                <S.PostingHeart onClick={updateHeart}>공감{posting.heart}</S.PostingHeart>
                <S.PostingReply>댓글{posting.reply}</S.PostingReply>
            </S.PostingBody>
            
        </S.PostingContainer>
    ) : (<h1>불러오는 중입니다...</h1>)
}

export default ViewPosting
