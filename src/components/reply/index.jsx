/* eslint-disable */

import React, {useState} from 'react';
import * as S from './styles.js';
import userInfo from './userInfo.js';
import reply_list from './reply-list.js';

function Reply() {

    let [liked, setLiked] = useState(0);
    let [likeCnt, setLikeCnt] = useState(0);
    let [replyCnt, setReplyCnt] = useState(2);
    let [replyArrow, setReplyArrow] = useState("↓");
    let [replyLiked, setReplyLiked] = useState(0);
    let [replyLikeCnt, setReplyLikeCnt] = useState(0);
    let [replyAgain, setReplyAgain] = useState([false, false]);

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
    }

    const clickReplyLikeButton = () => {
        let tmp = replyLikeCnt;

        if (replyLiked === true) {
            setReplyLikeCnt(tmp - 1);
        } else {
            setReplyLikeCnt(tmp + 1);
        }

        setReplyLiked(!replyLiked);
    }

    return (
        <S.Reply>
            <S.Buttons>
                <S.LikeButton onClick={clickLikeButton}>
                {
                    liked
                    ? "💖"
                    : "🤍"
                } 공감 {likeCnt}</S.LikeButton>
                <S.ReplyButton onClick={clickReplyArrow}>💌 댓글 {replyCnt}   {replyArrow}</S.ReplyButton>
            </S.Buttons>
            {
                replyArrow === "↑"
                ?   <S.ReplyList>
                        <S.ReplyItem>
                            {
                                reply_list.map((reply_item, i)=>{
                                    return(
                                        <>
                                            <p>{reply_item.user_name}</p>
                                            <p>{reply_item.reply_content}</p>
                                            <S.ReplyDate>{reply_item.reply_date}</S.ReplyDate>
                                            <S.ReplyAgain onClick={()=>{showReplyAgain(i)}}>답글</S.ReplyAgain>
                                            <p><S.ReplyLikeBtn onClick={clickReplyLikeButton}>
                                            {
                                                replyLiked
                                                ? "💖"
                                                : "🤍"
                                            }
                                            </S.ReplyLikeBtn>  {reply_item.reply_like}</p>
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
                                    )
                                
                                })
                            }
                            <p>
                                <S.WritingReply>
                                    <S.WritingReplyUserName>{userInfo[0].name}</S.WritingReplyUserName>
                                    <S.WritingReplyInput placeholder="댓글 쓰기"></S.WritingReplyInput><br />
                                    <S.ReplySubmitBtn>등록</S.ReplySubmitBtn>
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