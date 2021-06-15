import styled from 'styled-components';

export const HeaderContainer = styled.div`
    width: 100%;
    height: 15rem;
    position: relative;
`;

export const BannerImage = styled.img`
    width: 100%;
    height: 15rem;
    object-fit: cover;
`;

export const BannerText = styled.div`
    border: 0.3rem solid white;
    color: white;
    font-size: 3rem;
    font-weight: 700;
    position: absolute;
    top: 50%;
    left: 60%;
    transform: translate( 0%, -50% );
`;
