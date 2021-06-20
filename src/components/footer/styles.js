import styled from 'styled-components';

export const FooterContainer = styled.div`
    display: flex;
    width: 100%;
    margin-top: 3rem;
    border-top: 2px solid black;
    padding-top: 1rem;
`;

//profile
export const Profile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 15rem;
    border: 1px solid #D5D5D5;
    border-radius: 1rem;
    background-color: #FDFDFB;
    margin-right: 2rem;
`;

export const ProfileImage = styled.img`
    width: 12rem;
    height: 12rem;
    object-fit: cover;
    border-radius: 1rem;
    margin-top: 1rem;
`;

export const ProfileName = styled.p`
    width: 100%;
    font-size: 0.9rem;
    font-weight: 700;
    padding-left: 10%;
`;

export const ProfileIntro = styled.p`
    width: 100%;
    font-size: 0.8rem;
    padding-left: 10%;
    padding-right: 10%;
`;

export const Settings = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

export const BlogInfoSettingsContainer = styled.div`
    width: 100%;
    padding-left: 10%;
    display: flex;
`;

export const BlogInfoSettingsEmoji = styled.div`
    color: red;
`;

export const BlogInfoSettings = styled.div`
    display: flex;
    align-items: center;
    font-size: 0.8rem;
    cursor: pointer;
    &: hover {
        text-decoration: underline 1px gray;
    }
`;

export const CategorySettings = styled.div`
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
    font-size: 0.9rem;
    font-weight: 900;
`;

export const CategoryAndWeather = styled.div`
    display: flex;
    flex-direction: column;
`;

// category
export const Category = styled.div`
    width: 30rem;
    margin-right: 1.5rem;
`;

export const CategoryLabel = styled.div`
    font-size: 0.9rem;
    margin-left: 1.4rem;
    color: red;
`;

export const NoCategory = styled.div`
    width: 100%;
`;

export const CategoryUl = styled.ul`
    list-style-type: square;
`;

export const CategoryTitle = styled.li`
    &: hover {
        text-decoration: underline 1px gray;
    }
    margin-top: 0.5rem;
    cursor: pointer;
    font-size: 0.8rem;
`;

//weather

export const Weather = styled.div`
    width: 10rem;
    margin-top: 2rem;
`;

export const WeatherImage = styled.img`
    width: 5rem;
    height: 5rem;
    object-fit: cover;
    font-size: 0.8rem;
    margin-left: 1.4rem;
`;

export const WeatherTemperature = styled.div`
    font-size: 0.8rem;
    margin-left: 1.4rem;
`;

export const BlogBanner = styled.div`
    width: 25rem;
    height: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: #465273;
    border-radius: 1rem;
`;
