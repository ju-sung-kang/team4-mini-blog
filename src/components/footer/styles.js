import styled from 'styled-components';

export const FooterContainer = styled.div`
    display: flex;
    width: 100%;
    border: 1px solid gray;
`;

//profile
export const Profile = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 30%;
    border-right: 1px solid gray;
`;

export const ProfileImage = styled.img`
    width: 150px;
    height: 150px;
    object-fit: cover;
`;

export const ProfileName = styled.p`
    width: 100%;
`;

export const ProfileIntro = styled.p`
    width: 100%;
`;

// category
export const Category = styled.div`
    width: 35%;
    align-items: center;
    border-right: 1px solid gray;
`;

export const NoCategory = styled.div`
    width: 100%;
`;

export const CategoryLabel = styled.div`
    width: 100%;
    height: 4rem;
    &: hover {
        background-color: gray;
    }
`;

export const Weather = styled.div`
    width: 30%;
`;

