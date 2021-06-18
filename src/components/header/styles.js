import styled from 'styled-components';

export const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`;

export const BannerImage = styled.img`
    width: 100%;
    height: 15rem;
    object-fit: cover;
    cursor: pointer;
`;

export const BannerText = styled.div`
    font-size: 1rem;
    font-weight: 500;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-bottom: 2px;
    color: #626262;
`;

export const nameText = styled.div`
    font-size: 1rem;
    font-weight: 300;
    color: #8c8c8c;
    padding-bottom: 1px;
`;