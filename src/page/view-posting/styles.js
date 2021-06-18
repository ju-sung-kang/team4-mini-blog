import styled from "styled-components";

export const PostingContainer = styled.div`
    box-sizing: border-box;
    margin-bottom: 10px;
    margin-top: 10px;
    padding: 15px;
`;

export const PostingHeader = styled.div`
    margin-left: 30px;
    margin-top: 30px;
`;

export const PostingCategory = styled.p``;

export const PostingTitle = styled.h1`
    margin-left: 10px;
`;

export const PostingDate = styled.p`
    color: gray;
    font-size: 15px;
    margin-left: 20px;
`;

export const PostingBody = styled.div`
    padding: 50px;
`;

export const PostingDeleteBtn = styled.button`
    border: 0;
    outline: 0;
    background-color: transparent;
    float: right;
    &:hover {
        text-decoration-line: underline;
        cursor: pointer;
    }
`;