/* eslint-disable */

import React, {useState, useEffect} from 'react';
import firebase from 'firebase';
import db from '../../Firebase.js';
import * as S from './styles.js';
import userInfo from './userInfo.js';

function Reply() {

    let [liked, setLiked] = useState(0);    // 해당 글 좋아요 눌렀는지 여부
    let [likeCnt, setLikeCnt] = useState(0);    // 좋아요 수    
    let [replyArrow, setReplyArrow] = useState("↓");    // 댓글 버튼 화살표
    let [replyLiked, setReplyLiked] = useState([false]);  // 댓글 좋아요 눌렀는지 여부
    let [replyAgain, setReplyAgain] = useState([false]); // 대댓글 쓰기 눌렀는지 여부
    let [replyContent, setReplyContent] = useState(""); // 댓글 내용
    let [replyEditContent, setReplyEditContent] = useState("");
    let [isEditing, setIsEditing] = useState([false]);

    let [reply, setReply] = useState({text:[]});

    useEffect(() => {
         /*const unsubscribe = db
         .collection('reply')
         .doc('abc')
         .then((doc) => {
             doc.exists && setReply(doc.data());
         }).catch((error) => {
             console.log("Error getting document:", error);
         })*/

        let docRef = db.collection("reply").doc("abc");
        docRef.onSnapshot((doc) => {
            setReply(doc.data());
        });
    }, []);

    useEffect(()=>{

        let tmp1 = [...replyLiked];
        let tmp2 = [...replyAgain];
        let tmp3 = [...isEditing];
        for (let i = 0; i < reply.text.length; i++) {
            if (tmp1[i] === undefined) {
                tmp1[i] = false;
            }
            if (tmp2[i] === undefined) {
                tmp2[i] = false;
            }
            if (tmp3[i] === undefined) {
                tmp3[i] = false;
            }
        }
        setReplyLiked(tmp1);
        setReplyAgain(tmp2);
        setIsEditing(tmp3);
    }, [reply])
    

    const clickLikeButton = () => {
        let tmp = likeCnt;
        if (liked === true) {
            setLikeCnt(tmp - 1);
        } else {
            setLikeCnt(tmp + 1);
        }
        setLiked(!liked);
    }

    const clickReplyArrow = () => {
        if (replyArrow === "↓") {
            setReplyArrow("↑");
        } else {
            setReplyArrow("↓");
        }
    }

    const showReplyAgain = i => {
        let tmp = [...replyAgain];
        tmp[i] = !tmp[i];
        setReplyAgain(tmp);
    }   // 대댓글 쓰는 창 보여주기

    const clickReplyLikeButton = i => {
        let heart = [...reply.heart];
        let tmp = [...replyLiked];
        
        if (replyLiked[i] === false) {
            heart[i] = heart[i] + 1
            db.collection('reply')
            .doc('abc')
            .update({
                heart: heart
            })
        } else if (replyLiked[i] === true) {
            heart[i] = heart[i] - 1
            db.collection('reply')
            .doc('abc')
            .update({
                heart: heart
            })
        }

        tmp[i] = !tmp[i];
        setReplyLiked(tmp);
    }   // 댓글 좋아요 누르기 

    const showEditReply = (i) => {
        let tmp = [...isEditing];
        tmp[i] = true;
        setIsEditing(tmp);
    }

    const cancelEditReply = (i) => {
        let tmp = [...isEditing];
        tmp[i] = false;
        setIsEditing(tmp);
    }
    
    const editReply = (i) => {

        let text = [...reply.text];
        text[i] = replyEditContent;

        db.collection('reply')
        .doc('abc')
        .update({
            text: text
        });
        cancelEditReply(i);
    }

    const deleteReply = (i) => {
        let writer = [...reply.writer];
        let regDate = [...reply.regDate];
        let heart = [...reply.heart];
        let text = [...reply.text];

        writer.splice(i, 1);
        regDate.splice(i, 1);
        heart.splice(i, 1);
        text.splice(i, 1);

        db.collection('reply')
        .doc('abc')
        .update({
            writer: writer,
            regDate: regDate,
            heart: heart,
            text: text
        });
    }


    const submitReply = () => {
        db.collection('reply')
          .doc('abc')
          .get()
          .then(doc => {

            let heart = [...reply.heart];
            let regDate = [...reply.regDate];
            let text = [...reply.text];
            let writer = [...reply.writer];
            let today = new Date();

            heart.push(0);
            regDate.push(today.toLocaleDateString());
            text.push(replyContent);
            writer.push(userInfo[0].name);

            
            db.collection('reply')
                .doc('abc')
                .set({
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
                    liked
                    ? "💖"
                    : "🤍"
                } 공감 {likeCnt}</S.LikeButton>
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
                                                <S.WritingReplyUserName>{userInfo[0].name}</S.WritingReplyUserName>
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
                                            <S.ReplyDelete onClick={()=>deleteReply(i)}>삭제</S.ReplyDelete>
                                            <S.ReplyEdit onClick={()=>{showEditReply(i)}}>수정</S.ReplyEdit>
                                            <p><S.ReplyLikeBtn onClick={()=>clickReplyLikeButton(i)}>
                                            {
                                                replyLiked[i]
                                                ? "💖"
                                                : "🤍"
                                            }
                                            </S.ReplyLikeBtn>  {reply.heart[i]}</p>
                                            {
                                                replyAgain[i]
                                                ?   <S.WritingReply>
                                                        <S.WritingReplyUserName>{userInfo[0].name}</S.WritingReplyUserName>
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
                                    <S.WritingReplyUserName>{userInfo[0].name}</S.WritingReplyUserName>
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