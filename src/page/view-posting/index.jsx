import React, { useState, useEffect } from 'react';
import db from '../../firebase';
import { useLocation, useHistory } from 'react-router-dom';
import queryString from 'query-string';
import * as S from './styles';
import Reply from '../../components/reply/index';


function ViewPosting() {
    const marked = require('marked');
    const { search } = useLocation();
    const { categoryId } = queryString.parse(search);
    const { postId } = queryString.parse(search);
    const [ category, setCategory ] = useState("");
    const [ post, setPost] = useState({title : "가져오는 중입니다", text : "가져오는 중입니다", regDate : "가져오는 중입니다" });
    const history = useHistory();
    const [repliesID, setRepliesID] = useState();

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
    }, []);

    useEffect(() => {
        const element = document.getElementById("text-of-post");
        element.innerHTML = marked(post.text);
    },[post])


    // 내부 댓글까지 완전히 지우기 위한 댓글 ID 저장
    useEffect(()=>{
        let tmpRepliesID = [];

        db.collection("categories").doc(categoryId)
        .collection("posts").doc(postId).collection("replies").onSnapshot((querySnapShot)=>{
            querySnapShot.forEach((doc)=>{
                tmpRepliesID.push(doc.id);
            })
            setRepliesID(tmpRepliesID);
        })
    }, [post])


    // 글 삭제 후 메인으로 이동
    const postingDelete = Id => {

        let password = prompt("삭제하시려면 이 글의 제목을 그대로 입력하세요");
        if (password === post.title) {

        repliesID.map((replyID)=>{
            db.collection("categories").doc(categoryId)
            .collection("posts").doc(Id).collection("replies").doc(replyID).delete();
        })

        db.collection("categories").doc(categoryId)
        .collection("posts").doc(Id).delete().then(()=>{
            alert("삭제가 완료되었습니다");
            history.push('/');
        }).catch((error) => {
            console.error("Error writing document: ", error);
        })
        } else {
            alert("삭제에 실패했습니다")
        }
    }

    return (
        <S.PostingContainer>
            <S.PostingHeader>
                <S.PostingDeleteBtn onClick={()=>{postingDelete(postId)}}>삭제</S.PostingDeleteBtn>
                <S.PostingCategory>{category}</S.PostingCategory>
                <S.PostingTitle>{post.title}</S.PostingTitle>
                <div>
                    <S.PostingDate>{post.regDate}</S.PostingDate>
                </div>

            </S.PostingHeader>
            <S.PostingBody id="text-of-post"/>

            <Reply categoryID={categoryId} postID={postId}/>
            
        </S.PostingContainer>
    )
}

export default ViewPosting
