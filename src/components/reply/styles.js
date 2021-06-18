import styled from 'styled-components'

export const Reply = styled.div`
    box-sizing: border-box;
`;

export const Buttons = styled.div`
    margin-left: 30px;
`;

export const LikeButton = styled.button`
    margin: 10px;
`;

export const ReplyButton = styled.button`
    margin: 10px;
`;

export const ReplyList = styled.ul`
    margin: auto;
`;

export const ReplyItem = styled.li`
    text-align: left;
    list-style: none;
    margin: 20px;
    margin-left: 0px;
    border-top: 1px solid #aaaaaa;
    padding: 30px;
    padding-top: 0px;
    padding-bottom: 20px;
`;

export const ReplyDate = styled.p`
    font-size: 12px;
    color: gray;
`;

export const ReReplyButton = styled.button`
    border: 0;
    outline: 0;
    background-color: transparent;
    &:hover {
        text-decoration-line: underline;
        cursor: pointer;
    }
`;

export const ReplyDelete = styled.button`
    border: 0;
    outline: 0;
    background-color: transparent;
    float: right;
    &:hover {
        text-decoration-line: underline;
        cursor: pointer;
    }
`;

export const ReplyEdit = styled.button`
    border: 0;
    outline: 0;
    background-color: transparent;
    float: right;
    &:hover {
        text-decoration-line: underline;
        cursor: pointer;
    }
`;

export const Cancel = styled.button`
    border: 0;
    outline: 0;
    background-color: transparent;
    float: right;
    margin-right: 10px;
    margin-top: 10px;
    &:hover {
        text-decoration-line: underline;
        cursor: pointer;
    }
`;

export const ReplyLikeBtn = styled.button`
    border: 0;
    outline: 0;
    background-color: transparent;
    display: inline-block;
    &:hover {
        cursor: pointer;
    }
`;

export const WritingReply = styled.div`
    width: 90%;
    height: 210px;
    margin-top: 20px;
    border: 1px solid #aaaaaa;
    box-sizing: border-box;
    position: relative;
    border-radius: 0.4rem;
`;

export const WritingReplyUserName = styled.p`
    margin-left: 15px;
    text-align: left;
`;

export const WritingReplyNickName = styled.input`
    margin: 10px;
    height: 14%;
    width: 120px;
    border: 2px solid gray;
    border-radius: 0.4rem;
    &: focus {
        outline: none;
        box-shadow: 0px 0px 1px 2px #B2CCFF;
        border: 2px solid #576DE9;
    }
`;

export const WritingReplyPassword = styled.input`
    text-align: left;
    margin: 10px;
    height: 14%;
    width: 120px;
    border: 2px solid gray;
    border-radius: 0.4rem;
    &: focus {
        outline: none;
        box-shadow: 0px 0px 1px 2px #B2CCFF;
        border: 2px solid #576DE9;
    }
`;

export const WritingReplyInput = styled.textarea`
    white-space: normal;
    width: 95%;
    height: 100px;
    margin-left: 10px;
    border: 2px solid gray;
    border-radius: 0.4rem;
    &: focus {
        outline: none;
        box-shadow: 0px 0px 1px 2px #B2CCFF;
        border: 2px solid #576DE9;
    }
`;

export const ReplySubmitBtn = styled.button`
    position: absolute;    
    width: 50px;
    height: 30px;
    right: -1px;
    bottom: -1px;
    background-color: rgb(87, 109, 233);
    border: none;
    color: white;
`;

export const ReReplyList = styled.ul``;

export const ReReplyItem = styled.li`
    margin-left: 50px;
    margin-top: 25px;
    list-style-type: '➡   ';
    list-style: none;
    border-top: 1px solid #aaaaaa;
    padding-top: 25px;
    padding-bottom: 0px;
`;

export const ReReply = styled.span`
    display: inline-block;  
`;