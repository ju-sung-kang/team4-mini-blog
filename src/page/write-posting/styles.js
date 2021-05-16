import styled from "styled-components";

export const WritePostingContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

//header
export const WritePostingHeader = styled.div`
    display: flex;
    width: 100%;
    height: 3rem;
    border-bottom: 1px solid #a0a0a0;
    align-items: center;
`;

export const PostingWriteButton = styled.div`
    text-align: center;
    width: 2.5rem;
    height: 1.7rem;
    position: absolute;
    left: 95%;
    color: white;
    background-color: #2DB400;
    font-weight: 600;
    font-size: 1.2rem;
`;

export const Logo = styled.div`
    text-align: center;
    width: 2.5rem;
    height: 1.7rem;
    color: white;
    background-color: #2DB400;
    font-weight: 600;
    font-size: 1.2rem;
    margin-left: 1.2rem;
    
`;


//title and category
export const WritePostingInfoContainer = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid #a0a0a0;
    height: 3.5rem;
`;

export const WritePostingCategory = styled.select`
    width: 5rem;
    height: 2.5rem;
    margin-left: 1.2rem;
`;

export const InfoContainerTitleLabel = styled.div`
    height: 2.5rem;
    margin-left: 1rem;
    text-align: center;
    width: 2.5rem;
    height: 2.5rem;
    font-weight: 600;
    font-size: 1rem;
    padding-top: 1rem;
`;

export const WritePostingTitle = styled.input`
    height: 2.5rem;
    width: 50%;
    margin-left: 0.5rem;
`;

export const FileAdd = styled.div`
    height: 1.6rem;
    width: 4rem;
    margin-left: 1rem;
    font-size: 1rem;
    padding-top: 0.35rem;
    border: 1px solid gray;
    border-radius: 0.5rem;
`;


//letter styling
export const StyleMenuContainer = styled.div`
    display: flex;
    height: 3rem;
    border-bottom: 1px solid #a0a0a0;
    align-items: center;
`;

export const LetterFont = styled.select`
    width: 5rem;
    height: 2.5rem;
    margin-left: 1.2rem;
`;

export const LetterFontSize = styled.select`
    width: 6rem;
    height: 2.5rem;
    margin-left: 1rem;
`;

export const LetterLayout = styled.select`
    width: 5rem;
    height: 2.5rem;
    margin-left: 1rem;
`;


//wirting region
export const WriteRegionContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const WriteRegion = styled.input`
    width: 50%;
    height: 50rem;
`;
