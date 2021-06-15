import styled from 'styled-components';

export const FooterContainer = styled.div`
    display: flex;
    width: 100%;
    margin-top: 3rem;
`;

//profile
export const Profile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 20%;
    border: 1px solid #D5D5D5;
    background-color: #FDFDFB;
    border-radius: 5%;
    margin-right: 1rem;
`;

export const ProfileImage = styled.img`
    width: 10rem;
    height: 10rem;
    object-fit: cover;
`;

export const ProfileName = styled.p`
    width: 100%;
    font-size: 1rem;
`;

export const ProfileIntro = styled.p`
    width: 100%;
    font-size: 1rem;
`;

export const Settings = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

export const BlogInfoSettings = styled.div`
    width: 80%;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid gray;
    background-color: #FFFFFF;
    margin-top: 1rem;
    margin-bottom: 1rem;
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: 700;
`;

export const CategorySettings = styled.div`
    width: 80%;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid gray;
    background-color: #FFFFFF;
    margin-bottom: 1rem;
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: 700;
`;

// category
export const Category = styled.div`
    width: 35%;
    align-items: center;
    border-right: 1px solid gray;
`;

export const CategoryLabel = styled.div`
    color: red;
`;

export const NoCategory = styled.div`
    width: 100%;
`;

export const CategoryTitle = styled.div`
    width: 100%;
    height: 4rem;
    &: hover {
        background-color: gray;
    }
`;

export const Weather = styled.div`
    width: 30%;
`;
