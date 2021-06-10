/* eslint-disable */

import React, {useState, useEffect} from 'react';
import firebase from 'firebase';
import db from '../../Firebase.js';
import * as S from './styles.js';

function Reply() {

    // 이 페이지에서만 쓸 애들
    let [postLiked, setPostLiked] = useState(false); // 글 좋아요 눌렀는지 여부
    let [replyLiked, setReplyLiked] = useState([false]);   // 댓글 좋아요 눌렀는지 여부
    let [replyArrow, setReplyArrow] = useState("↓");    // 댓글 버튼 화살표
    let [showReReply, setShowReReply] = useState([false]); // 대댓글 쓰기 눌렀는지 여부
    let [replyContent, setReplyContent] = useState(""); // 댓글 내용
    let [reReplyContent, setReReplyContent] = useState(""); // 답글 내용
    let [replyEditContent, setReplyEditContent] = useState(""); // 댓글 수정 내용 저장
    let [isEditing, setIsEditing] = useState([false]);  // 댓글을 수정 중인지 여부 저장

    // props로 주어지는 데이터
    let [categoryID, setCategoryID] = useState();
    let [postID, setPostID] = useState();
    
    // 정보 설정
    let [post, setPost] = useState();   // 글 정보
    let [reply, setReply] = useState(); // 댓글 정보
    let [replyID, setReplyID] = useState(); // 댓글 아이디
    let [reReplies, setReReplies] = useState(); // 답글 정보(이중 배열)
    

    // 유저 아이디, 글 아이디 설정
    useEffect(()=>{

        setCategoryID("lOm8hxxVxfNDv8iLzVqa");
        setPostID("StCE74Tk6GFGNJMiCmxX");
    }, [])


    // 글 정보, 댓글 싹 다 가져오기
    useEffect(()=>{

        if (categoryID !== undefined && postID !== undefined) {
            db.collection("categories").doc(categoryID)
            .collection("posts").doc(postID).collection("replies")
            .orderBy("time")
            .onSnapshot((querySnapShot)=>{
                let tmpReply = [];
                let tmpReplyID = [];
                querySnapShot.forEach((doc)=>{     
                    tmpReply.push(doc.data());
                    tmpReplyID.push(doc.id);
                })
                setReply(tmpReply);
                setReplyID(tmpReplyID);
            }); // 댓글 가져오기

            let postRef = db.collection("categories").doc(categoryID)
            .collection("posts").doc(postID);
            postRef.onSnapshot((doc)=>{
                setPost(doc.data());
            }); // 글 정보 가져오기
        }  
    }, [categoryID, postID])
    

    // 댓글 개수를 바탕으로 필요한 상태들 초기화
    useEffect(()=>{
        
        let tmpShowReReply = [...showReReply];
        let tmpIsEditing = [...isEditing];
        let tmpReplyLiked = [...replyLiked];

        if (reply !== undefined) {            
            for (let i = 0; i < reply.length; i++) {
                if (tmpShowReReply[i] === undefined) {
                    tmpShowReReply[i] = false;
                }
                if (tmpIsEditing[i] === undefined) {
                    tmpIsEditing[i] = false;
                }
                if (tmpReplyLiked[i] === undefined) {
                    tmpReplyLiked[i] = false;
                }
            }
            setShowReReply(tmpShowReReply);
            setIsEditing(tmpIsEditing);
            setReplyLiked(tmpReplyLiked);
        }
    }, [reply])


    // 답글 가져오기
    useEffect(()=>{

        if (reply) {

            let tmpReReplies = [];
            for (let i = 0; i < reply.length; i++) {
                if (reply[i].reRepliesCnt > 0) {
                    tmpReReplies.push(reply[i].reReplies);
                } else {
                    tmpReReplies.push([]);
                }
            }
            setReReplies(tmpReReplies);
        }
    }, [reply])


    // 글 좋아요 누르기
    const clickLikeButton = ()=>{

        if (postLiked) {
            db.collection("categories")
            .doc(categoryID)
            .collection("posts")
            .doc(postID)
            .update({
            heart: post.heart - 1
        });
        } else {
            db.collection("categories")
            .doc(categoryID)
            .collection("posts")
            .doc(postID)
            .update({
            heart: post.heart + 1
        });
        }
        setPostLiked(!postLiked);
    }


    // 댓글 버튼 화살표 바꾸기
    const clickReplyArrow = () => {

        if (replyArrow === "↓") {
            setReplyArrow("↑");
        } else {
            setReplyArrow("↓");
        }
    }


    // 답글 쓰는 창 보여주기
    const clickReReply = i => {

        let tmp = [...showReReply];
        tmp[i] = !tmp[i];
        setShowReReply(tmp);
    }


    // 댓글 좋아요 누르기
    const clickReplyLikeButton = i => {

        let tmpReplyLiked = [...replyLiked];

        if (replyLiked[i]) {
            db.collection("categories")
            .doc(categoryID)
            .collection("posts")
            .doc(postID)
            .collection("replies")
            .doc(replyID[i])
            .update({
            heart: reply[i].heart - 1})
        } else {
            db.collection("categories")
            .doc(categoryID)
            .collection("posts")
            .doc(postID)
            .collection("replies")
            .doc(replyID[i])
            .update({
            heart: reply[i].heart + 1})
        }

        tmpReplyLiked[i] = !tmpReplyLiked[i];
        setReplyLiked(tmpReplyLiked);
    }


    // 댓글 수정창 띄우기
    const showEditReply = (i) => {

        let tmp = [...isEditing];
        tmp[i] = true;
        setIsEditing(tmp);
    }


    // 댓글 수정 취소
    const cancelEditReply = (i) => {

        let tmp = [...isEditing];
        tmp[i] = false;
        setIsEditing(tmp);
    }
    

    // 댓글 수정한 거 firebase에 반영
    const editReply = (i) => {

        db.collection('categories').doc(categoryID)
        .collection("posts").doc(postID)
        .collection("replies").doc(replyID[i])
        .update({
            text: replyEditContent
        });
        cancelEditReply(i);
    }


    // 댓글 삭제하기
    const deleteReply = i => {
        db.collection("categories").doc(categoryID)
        .collection("posts").doc(postID)
        .collection("replies").doc(replyID[i]).delete();
    }


      // 댓글 전송하기
      const submitReply = () => {

        let today = new Date();

        db.collection("categories")
        .doc(categoryID).collection("posts")
        .doc(postID).collection("replies").add(
            {
                heart: 0,
                regDate: today.toLocaleDateString(),
                time: Date.now(),
                text: replyContent,
                writer: "toodury",
                reReplies: [],
                reRepliesCnt: 0
            }
        )

        document.getElementById("replyContent").value = "";
      }

    
    // 답글 전송
    const submitReReply = i => {

        if (reReplies[i]) {
            var tmpReReplies = [...reReplies[i]];
            tmpReReplies.push(reReplyContent);
        } else{
            var tmpReReplies = [reReplyContent];
        }

        db.collection("categories")
        .doc(categoryID).collection("posts")
        .doc(postID).collection("replies")
        .doc(replyID[i]).update(
            {
                reReplies : tmpReReplies,
                reRepliesCnt : reply[i].reRepliesCnt + 1
            }
        ) 

        document.getElementById("reReplyContent").value = "";

        let tmpShowReReply = [...showReReply];
        tmpShowReReply[i] = !tmpShowReReply[i];
        setShowReReply(tmpShowReReply);
    }


    // 답글 삭제
    const deleteReReply = (i, j) => {

        let tmpReReplies = [...reReplies[i]];
        tmpReReplies.splice(j, 1);

        
        db.collection("categories")
        .doc(categoryID).collection("posts")
        .doc(postID).collection("replies")
        .doc(replyID[i]).update(
            {
                reReplies : tmpReReplies,
                reRepliesCnt : reply[i].reRepliesCnt - 1
            }
        ) 
    }

      
    return (
        <S.Reply>
            <S.Buttons>
                <S.LikeButton onClick={clickLikeButton}>
                {
                    postLiked
                    ? "💖"
                    : "🤍"
                } 공감 {
                    post
                    ? post.heart
                    : null
                }</S.LikeButton>
                <S.ReplyButton onClick={clickReplyArrow}>💌 
                {
                    reply
                    ? reply.length === 0
                    ? 0
                    : reply.length
                    : null
                }   {replyArrow}</S.ReplyButton>
            </S.Buttons>
            {
                replyArrow === "↑"
                ?   <S.ReplyList>
                        <S.ReplyItem>
                            {
                                reply.map((text, i)=>{
                                    if (isEditing[i]) {
                                        return (
                                            <>
                                            <S.Cancel onClick={()=>{cancelEditReply(i)}}>취소</S.Cancel>
                                            <S.WritingReply>
                                                <S.WritingReplyUserName>작성자 이름</S.WritingReplyUserName>
                                                <S.WritingReplyInput defaultValue={reply[i].text} onChange={(e)=>{setReplyEditContent(e.target.value)}}></S.WritingReplyInput><br />
                                                <S.ReplySubmitBtn onClick={()=>{editReply(i)}}>등록</S.ReplySubmitBtn>
                                            </S.WritingReply>
                                            </>
                                        )
                                    } else {
                                    return(
                                        <> 
                                            <p>{reply[i].writer}</p>
                                            <p dangerouslySetInnerHTML={{__html: reply[i].text}} />
                                            <S.ReplyDate>{reply[i].regDate}</S.ReplyDate>
                                            <S.ReplyAgain onClick={()=>{clickReReply(i)}}>답글</S.ReplyAgain>
                                            <S.ReplyDelete onClick={()=>deleteReply(i)}>삭제</S.ReplyDelete>
                                            <S.ReplyEdit onClick={()=>{showEditReply(i)}}>수정</S.ReplyEdit>
                                            <p><S.ReplyLikeBtn onClick={()=>clickReplyLikeButton(i)}>
                                            {
                                                replyLiked[i]
                                                ? "💖"
                                                : "🤍"
                                            }
                                            </S.ReplyLikeBtn>  {reply[i].heart}</p>
                                            {
                                                reply[i].reReplies
                                                ? <>{
                                                    reply[i].reReplies.map((reReply, j)=>{
                                                        return (
                                                            <S.ReReply>
                                                                ➡{reReply}
                                                                <S.ReplyDelete onClick={()=>deleteReReply(i, j)}>삭제</S.ReplyDelete>
                                                            </S.ReReply>
                                                        )
                                                    })
                                                }</>
                                                : null
                                            }
                                            {
                                                showReReply[i]
                                                ?   <S.WritingReply>
                                                        <S.WritingReplyUserName>작성자 이름</S.WritingReplyUserName>
                                                        <S.WritingReplyInput id="reReplyContent" placeholder="답글 쓰기" onChange={(e)=>{setReReplyContent(e.target.value)}}></S.WritingReplyInput><br />
                                                        <S.ReplySubmitBtn onClick={()=>submitReReply(i)}>등록</S.ReplySubmitBtn>
                                                    </S.WritingReply>
                                                : null
                                            }
                                        </>
                                        )}
                                    }
                                )
                            }
                            <p>
                                <S.WritingReply>
                                    <S.WritingReplyUserName>작성자 이름</S.WritingReplyUserName>
                                    <S.WritingReplyInput id="replyContent" placeholder="댓글 쓰기" onChange={(e)=>{setReplyContent(e.target.value)}}></S.WritingReplyInput><br/>
                                    <S.ReplySubmitBtn onClick={submitReply}>등록</S.ReplySubmitBtn>
                                </S.WritingReply>
                            </p>
                        </S.ReplyItem>
                    </S.ReplyList>
                : null
            }
        </S.Reply>
    )
}

export default Reply;