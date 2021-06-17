import React, { useState, useEffect } from 'react';
import db from '../../firebase.js';
import * as S from './styles';

const Header = () => {
    const [bannerImage, setBannerImage] = useState();
    const [blogName, setBlogName] = useState();
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
                console.log("header banner image getting success!")
            }
            else {
                console.log("Error getting banner image!");
            }
        }).catch((error) => {
            console.log("Error getting banner image:", error);
        });
    }

    return (
        <S.HeaderContainer>
            <S.BannerText>{blogName}</S.BannerText>
            <S.BannerImage src={bannerImage}/>
        </S.HeaderContainer>
    );
}

export default Header;