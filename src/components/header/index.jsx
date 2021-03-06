import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import db from '../../firebase.js';
import * as S from './styles';

const Header = () => {
    const history = useHistory();
    const [bannerImage, setBannerImage] = useState();
    const [blogName, setBlogName] = useState();
    const [userName, setUserName] = useState();
    
    useEffect(() => {
        getInfo();
    }, [])

    const getInfo = () => {
        db.collection('blogInfo').doc('info')
        .get()
        .then((doc) => {
            if (doc.exists) {
                const tmp = doc.data();
                setBannerImage(tmp.bannerImageUrl);
                setBlogName(tmp.blogName);
                setUserName(tmp.nickName);
                console.log("header banner image getting success!");
            }
            else {
                console.log("Error getting banner image!");
            }
        }).catch((error) => {
            console.log("Error getting banner image:", error);
        });
    }

    const goToMain = () => {
        history.push('/');
    }

    const bannerImageError = (e) => {
        e.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReZh4H9YepN5T6gkMAIGDEXv4lYWOmRfs1_g&usqp=CAU";
    }

    return (
        <S.HeaderContainer>
            <S.BannerText>{blogName} &nbsp; <S.nameText>ㅡ</S.nameText> &nbsp;by {userName}.</S.BannerText>
            <S.BannerImage src={bannerImage} onError={bannerImageError} onClick={goToMain}/>
        </S.HeaderContainer>
    );
}

export default Header;
