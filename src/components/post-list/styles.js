import styled from 'styled-components';



export const PostListContainer = styled.div`
    width: 100%;
`;

export const PostListTitle = styled.div`
    width: 100%;
    font-size: 1rem;
    margin-top: 3rem;
    border-bottom: 2px solid black;
`;

export const Bold = styled.strong``;

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
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 11rem;
    height: 15rem;
    font-size: 2rem;
    margin: 1rem 0.25rem;
`;

export const PostImage = styled.img`
    width: 10rem;
    height: 10rem;
    object-fit: cover;
    border: 1px solid gray;
    cursor: pointer;
`;

export const PostTitle = styled.div`
    width: 100%;
    font-weight: 700;
    font-size: 0.9rem;
    &: hover{
        text-decoration: underline;
    }
    margin-left: 0.5rem;
    cursor: pointer;
`;

export const PostRegDate = styled.div`
    width: 100%;
    color: gray;
    font-size: 0.8rem;
    margin-left: 0.5rem;
`;

export const PostAdd = styled.img`
    width: 10rem;
    height: 10rem;
    margin: 1rem 0.25rem;
    cursor: pointer;
    border-radius: 50%;
`;