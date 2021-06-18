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
    height: 170px;
    border-bottom: 2px solid rgb(87, 109, 233);
`;

export const PostingCategory = styled.p`
    font-weight: bold;
`;

export const PostingTitle = styled.h1`
    margin-left: -3px;
    color: rgb(87, 109, 233);
`;

export const PostingDate = styled.p`
    color: gray;
    font-size: 15px;
`;

export const PostingBody = styled.div`
    padding: 30px;
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