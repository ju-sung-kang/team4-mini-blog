import styled from 'styled-components';



export const PostListContainer = styled.div`
    width: 100%;
`;

export const PostListTitle = styled.div`
    width: 100%;
    height: 4rem;
    text-align: center;
    font-size: 2rem;
    padding-top: 1rem;
`;

export const ContentContainer = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
`;

export const NoPost = styled.span`
    width: 100%;
    height: 3rem;
`;

export const PostContainer = styled.div`
    width: 11rem;
    height: 11rem;
    padding-left: 1px;
    padding-top: 1px;
    font-size: 2rem;
    margin: 1rem 0.7rem;
    &: hover {
        background-color: gray;
    }
    border: 1px solid gray;
`;

export const PostAdd = styled.div`
    width: 11rem;
    height: 11rem;
    padding-left: 1px;
    padding-top: 1px;
    font-size: 2rem;
    margin: 1rem 0.7rem;
    &: hover {
        background-color: gray;
    }
    border: 1px solid gray;
`;