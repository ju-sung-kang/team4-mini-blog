/* eslint-disable */

import React, {useState, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';
import firebase from 'firebase';
import db from '../../Firebase.js';
import * as S from './styles.js';

function Reply() {

    // 다른 곳에서 가져올 애들
    let [postingID, setPostingID] = useState(); // 글 아이디
    let [userID, setUserID] = useState();       // 유저 아이디

    // firebase에서 가져올 애들
    let [userInfo, setUserInfo] = useState();       // 유저 정보
    let [reply, setReply] = useState({text: []});   // 댓글 관련 정보

    // userInfo에서 가져올 애들
    let [postLiked, setPostLiked] = useState([]);    // 내가 좋아요 한 글 목록
    let [replyLiked, setReplyLiked] = useState([]);   // 내가 좋아요 한 댓글 목록

    // 이건 posting에서 가져올 거라 일단 하드코딩함
    let [postLikeCnt, setPostLikeCnt] = useState(0);    // 좋아요 수  

    // 이 페이지에서만 쓸 애들
    let [replyArrow, setReplyArrow] = useState("↓");    // 댓글 버튼 화살표
    let [replyAgain, setReplyAgain] = useState([false]); // 대댓글 쓰기 눌렀는지 여부
    let [replyContent, setReplyContent] = useState(""); // 댓글 내용
    let [replyEditContent, setReplyEditContent] = useState(""); // 댓글 수정 내용 저장
    let [isEditing, setIsEditing] = useState([false]);  // 댓글을 수정 중인지
    

    // 유저 아이디, 글 아이디 설정
    useEffect(()=>{

        setPostingID('abc');
        setUserID('toodury');
    }, [])
    

    // 댓글 데이터 가져오기
    useEffect(() => {

         if (postingID !== undefined) {
            let docRefReply = db.collection("reply").doc(postingID);
            docRefReply.onSnapshot((doc) => {
                setReply(doc.data());
            });
        }
    }, [postingID]);


    // 유저 데이터 가져오기
    useEffect(()=>{

        if (userID !== undefined) {
            let docRefUserInfo = db.collection("userInfo").doc(userID);
            docRefUserInfo.onSnapshot((doc) => {
                setUserInfo(doc.data());
            });
        }
    }, [userID])


    // 댓글 개수를 바탕으로 필요한 상태들 초기화
    useEffect(()=>{
        
        let tmpReplyAgain = [...replyAgain];
        let tmpIsEditing = [...isEditing];

        for (let i = 0; i < reply.text.length; i++) {
            if (tmpReplyAgain[i] === undefined) {
                tmpReplyAgain[i] = false;
            }
            if (tmpIsEditing[i] === undefined) {
                tmpIsEditing[i] = false;
            }
        }
        setReplyAgain(tmpReplyAgain);
        setIsEditing(tmpIsEditing);
    }, [reply])


    // 유저가 좋아요 한 글, 댓글 목록 저장
    useEffect(()=>{
        
        if (userInfo !== undefined) {
            setPostLiked(userInfo.postLiked);
            setReplyLiked(userInfo.replyLiked);
        }
    }, [userInfo])
    

    // 글 좋아요 버튼 누르기
    const clickLikeButton = () => {

        let tmpPostLikeCnt = postLikeCnt;
        let tmpPostLiked = [...postLiked];
        
        if (postLiked.find(id=>id===postingID) !== undefined) {
            setPostLikeCnt(tmpPostLikeCnt - 1);
            let idx = tmpPostLiked.findIndex(id=>id===postingID);
            tmpPostLiked.splice(idx, 1);
            db.collection('userInfo')
            .doc(userID)
            .update({
                postLiked: tmpPostLiked
            })
        } else {
            setPostLikeCnt(tmpPostLikeCnt + 1);
            tmpPostLiked.push(postingID);
            db.collection('userInfo')
            .doc(userID)
            .update({
                postLiked: tmpPostLiked
            })
        }
    }


    // 댓글 버튼 화살표 바꾸기
    const clickReplyArrow = () => {

        if (replyArrow === "↓") {
            setReplyArrow("↑");
        } else {
            setReplyArrow("↓");
        }
    }


    // 대댓글 쓰는 창 보여주기
    const showReplyAgain = i => {

        let tmp = [...replyAgain];
        tmp[i] = !tmp[i];
        setReplyAgain(tmp);
    }


    // 댓글 좋아요 버튼 누르기
    const clickReplyLikeButton = i => {

        let heart = [...reply.heart];
        let tmpReplyLiked = [...replyLiked];
        let reply_id = reply.reply_id[i];
        let idx = replyLiked.findIndex(id=>id===reply_id);
        
        if (idx === -1) {
            heart[i] = heart[i] + 1;
            tmpReplyLiked.push(reply_id);
            db.collection('reply')
            .doc(postingID)
            .update({
                heart: heart
            })
            db.collection('userInfo')
            .doc(userID)
            .update({
                replyLiked: tmpReplyLiked
            })
        } else {
            heart[i] = heart[i] - 1;
            tmpReplyLiked.splice(idx, 1);
            db.collection('reply')
            .doc(postingID)
            .update({
                heart: heart
            })
            db.collection('userInfo')
            .doc(userID)
            .update({
                replyLiked: tmpReplyLiked
            })
        }
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

        let text = [...reply.text];
        text[i] = replyEditContent;

        db.collection('reply')
        .doc(postingID)
        .update({
            text: text
        });
        cancelEditReply(i);
    }


    // 댓글 삭제
    const deleteReply = (i) => {

        let writer = [...reply.writer];
        let regDate = [...reply.regDate];
        let heart = [...reply.heart];
        let text = [...reply.text];
        let reply_id = [...reply.reply_id];

        writer.splice(i, 1);
        regDate.splice(i, 1);
        heart.splice(i, 1);
        text.splice(i, 1);
        reply_id.splice(i, 1);

        db.collection('reply')
        .doc(postingID)
        .update({
            reply_id: reply_id,
            writer: writer,
            regDate: regDate,
            heart: heart,
            text: text
        });
    }


    // 댓글 firebase로 전송
    const submitReply = () => {
        
        db.collection('reply')
          .doc(postingID)
          .get()
          .then(doc => {

            let heart = [...reply.heart];
            let regDate = [...reply.regDate];
            let text = [...reply.text];
            let writer = [...reply.writer];
            let reply_id = [...reply.reply_id];
            let today = new Date();

            heart.push(0);
            regDate.push(today.toLocaleDateString());
            text.push(replyContent);
            writer.push(userInfo.name);
            reply_id.push(uuidv4());
            
            db.collection('reply')
                .doc(postingID)
                .set({
                    reply_id: reply_id,
                    heart: heart,
                    regDate: regDate,
                    text: text,
                    writer: writer
            })})
            document.getElementById("replyContent").value = "";
      };

    return (
        <S.Reply>
            <S.Buttons>
                <S.LikeButton onClick={clickLikeButton}>
                {
                    postLiked.find(id=>id===postingID)
                    ? "💖"
                    : "🤍"
                } 공감 {postLikeCnt}</S.LikeButton>
                <S.ReplyButton onClick={clickReplyArrow}>💌 {reply.text.length}   {replyArrow}</S.ReplyButton>
            </S.Buttons>
            {
                replyArrow === "↑"
                ?   <S.ReplyList>
                        <S.ReplyItem>
                            {
                                reply.text.map((text, i)=>{
                                    if (isEditing[i]) {
                                        return (
                                            <>
                                            <S.Cancel onClick={()=>{cancelEditReply(i)}}>취소</S.Cancel>
                                            <S.WritingReply>
                                                <S.WritingReplyUserName>{userInfo.name}</S.WritingReplyUserName>
                                                <S.WritingReplyInput defaultValue={reply.text[i]} onChange={(e)=>{setReplyEditContent(e.target.value)}}></S.WritingReplyInput><br />
                                                <S.ReplySubmitBtn onClick={()=>{editReply(i)}}>등록</S.ReplySubmitBtn>
                                            </S.WritingReply>
                                            </>
                                        )
                                    } else {
                                    return(
                                        <> 
                                            <p>{reply.writer[i]}</p>
                                            <p dangerouslySetInnerHTML={{__html: reply.text[i]}} />
                                            <S.ReplyDate>{reply.regDate[i]}</S.ReplyDate>
                                            <S.ReplyAgain onClick={()=>{showReplyAgain(i)}}>답글</S.ReplyAgain>
                                            {
                                                userInfo.name === reply.writer[i]
                                                ?<>
                                                <S.ReplyDelete onClick={()=>deleteReply(i)}>삭제</S.ReplyDelete>
                                                <S.ReplyEdit onClick={()=>{showEditReply(i)}}>수정</S.ReplyEdit>
                                                </>
                                                : null
                                            }
                                            <p><S.ReplyLikeBtn onClick={()=>clickReplyLikeButton(i)}>
                                            {
                                                replyLiked.find(id=>id===reply.reply_id[i])
                                                ? "💖"
                                                : "🤍"
                                            }
                                            </S.ReplyLikeBtn>  {reply.heart[i]}</p>
                                            {
                                                replyAgain[i]
                                                ?   <S.WritingReply>
                                                        <S.WritingReplyUserName>{userInfo.name}</S.WritingReplyUserName>
                                                        <S.WritingReplyInput placeholder="답글 쓰기"></S.WritingReplyInput><br />
                                                        <S.ReplySubmitBtn>등록</S.ReplySubmitBtn>
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
                                    <S.WritingReplyUserName>{userInfo.name}</S.WritingReplyUserName>
                                    <S.WritingReplyInput id="replyContent" placeholder="댓글 쓰기" onChange={(e)=>{setReplyContent(e.target.value)}}></S.WritingReplyInput><br />
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