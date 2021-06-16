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
    border-top: 1px black solid;
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
    display: inline-block;
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
    border: 1px solid black;
    box-sizing: border-box;
    position: relative;
`;

export const WritingReplyUserName = styled.p`
    margin-left: 15px;
    text-align: left;
`;

export const WritingReplyNickName = styled.input`
    margin: 10px;
    height: 30px;
    width: 120px;
`;

export const WritingReplyPassword = styled.input`
    text-align: left;
    margin: 10px;
    height: 30px;
    width: 120px;
`;

export const WritingReplyInput = styled.textarea`
    white-space: normal;
    width: 95%;
    height: 100px;
    margin-left: 10px;
`;

export const ReplySubmitBtn = styled.button`
    position: absolute;    
    width: 50px;
    height: 30px;
    right: -1px;
    bottom: -1px;
`;

export const ReReplyList = styled.ul``;

export const ReReply = styled.li`
    margin-left: 50px;
    margin-top: 30px;
    list-style-type: '➡   ';
`;