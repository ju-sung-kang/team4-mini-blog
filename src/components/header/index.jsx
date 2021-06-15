import React, { useState, useEffect } from 'react';
import db from '../../firebase.js';
import * as S from './styles';

const Header = () => {
    const [bannerImage, setBannerImage] = useState();
    useEffect(() => {
        getBannerImage();
    }, [])

    const getBannerImage = () => {
        db.collection('blogInfo').doc('info')
        .get()
        .then((doc) => {
            if (doc.exists) {
                const tmp = doc.data();
                setBannerImage(tmp.bannerImageUrl);
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
            <S.BannerImage src={bannerImage}/>
            <S.BannerText>디카프리오의 블로그</S.BannerText>
        </S.HeaderContainer>
    );
}

export default Header;