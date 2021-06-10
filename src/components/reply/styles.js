import styled from 'styled-components'

export const Reply = styled.div`
    box-sizing: border-box;
`;

export const Buttons = styled.div`
    margin-left: 293px;
`;

export const LikeButton = styled.button`
    margin: 10px;
`;

export const ReplyButton = styled.button`
    margin: 10px;
`;

export const ReplyList = styled.ul`
    margin: auto;
    width: 60%;
    border: 1px solid black;
`;

export const ReplyItem = styled.li`
    text-align: left;
    list-style: none;
    margin: 5px;
`;

export const ReplyDate = styled.p`
    font-size: 12px;
    color: gray;
`;

export const ReplyAgain = styled.button`
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
    &:hover {
        text-decoration-line: underline;
        cursor: pointer;
    }
`;

export const ReplyLikeBtn = styled.button`
    border: 0;
    outline: 0;
    background-color: transparent;
    &:hover {
        cursor: pointer;
    }
`;

export const WritingReply = styled.div`
    width: 60%;
    height: 300px;
    border: 1px solid black;
    box-sizing: border-box;
    position: relative;
    text-align: center;
`;

export const WritingReplyUserName = styled.p`
    text-align: left;
    margin-left: 10px;
`;

export const WritingReplyInput = styled.textarea`
    white-space: normal;
    width: 95%;
    height: 200px;
`;

export const ReplySubmitBtn = styled.button`
    position: absolute;    
    right: 10px;
    bottom: 10px;  
`;

export const ReReply = styled.div`
    margin-left: 30px;
`;