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
    background-color: #576DE9;
`;

export const PostingWriteButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0rem 1.2rem;
    height: 3rem;
    color: white;
    background-color: #002D93;
    font-weight: 700;
    font-size: 1.2rem;
    &: hover {
        background-color: #00096F;
    }
    cursor: pointer;
    margin-left: auto;
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3rem;
    color: white;
    background-color: #002D93;
    font-weight: 700;
    font-size: 1.2rem;
    padding: 0rem 1.2rem;
    &: hover{
        background-color: #00096F;
    }
    cursor: pointer;
`;


//title and category
export const WritePostingInfoContainer = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid #a0a0a0;
    height: 3.2rem;
`;

export const InfoContainerTitleLabel = styled.div`
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 1rem;
    margin-left: 1rem;
`;

export const WritePostingTitle = styled.input`
    height: 1.8rem;
    width: 35%;
    margin-left: 0.5rem;
    border: 2px solid gray;
    border-radius: 0.4rem;
    &: focus {
        outline: none;
        box-shadow: 0px 0px 1px 2px #B2CCFF;
        border: 2px solid #576DE9;
    }
`;

export const PostingImageLabel = styled.div`
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 1rem;
    margin-left: 1rem;
`;

export const PostingImageUrlInput = styled.input`
    height: 1.8rem;
    width: 20%;
    margin-left: 2rem;
    border: 2px solid gray;
    border-radius: 0.4rem;
    &: focus {
        outline: none;
        box-shadow: 0px 0px 1px 2px #B2CCFF;
        border: 2px solid #576DE9;
    }
`;


//letter styling

export const h1TagButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 1.8rem;
    margin-left: 1rem;
    background-color: #f4f4f4;
    &: hover {
        background-color: #eaeaea;
    }
    border: 1px solid gray;
    border-radius: 0.25rem 0rem 0rem 0.25rem;
    cursor: pointer;
`;

export const h2TagButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 1.8rem;
    background-color: #f4f4f4;
    &: hover {
        background-color: #eaeaea;
    }
    border: 1px solid gray;
    cursor: pointer;
`;

export const h3TagButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 1.8rem;
    background-color: #f4f4f4;
    &: hover {
        background-color: #eaeaea;
    }
    border: 1px solid gray;
    border-radius: 0rem 0.25rem 0.25rem 0rem;
    cursor: pointer;
`;

export const BoldButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 1.8rem;
    margin-left: 1rem;
    background-color: #f4f4f4;
    &: hover {
        background-color: #eaeaea;
    }
    border: 1px solid gray;
    border-radius: 0.25rem 0rem 0rem 0.25rem;
    cursor: pointer;
`;

export const ItalicButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 1.8rem;
    background-color: #f4f4f4;
    &: hover {
        background-color: #eaeaea;
    }
    border: 1px solid gray;
    border-radius: 0rem 0.25rem 0.25rem 0rem;
    cursor: pointer;
`;
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

export const WriteRegion = styled.textarea`
    width: 50%;
    height: 50rem;
    border: 2px solid gray;
    border-radius: 0.4rem;
    &: focus {
        outline: none;
        box-shadow: 0px 0px 1px 2px #B2CCFF;
        border: 2px solid #576DE9;
    }
    margin-top: 0.6rem;
`;
