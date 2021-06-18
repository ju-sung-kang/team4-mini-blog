import React, {useState, useEffect} from 'react';
import {Switch, Route, Link} from  'react-router-dom';
import * as S from './styles.js';
import SettingsBlogInfo from '../blog-info/index';
import SettingsCategory from '../category/index';

function SettingsNav() {

    const SETTINGS_CATEGORY = 'category'
    const SETTINGS_INFO = 'info'

    var [curMenu, setCurMenu] = useState(SETTINGS_INFO);

    const handleSettingsCategory = (e) => {
        e.preventDefault();
        setCurMenu(SETTINGS_CATEGORY);
    }

    const handleSettingsInfo= (e) => {
        e.preventDefault();
        setCurMenu(SETTINGS_INFO);
    }

    return (
        <S.Container>
            <S.NavContainer>
                <S.NavItem>
                    <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>홈</Link>
                </S.NavItem>
                <S.NavItem 
                    selected={curMenu === SETTINGS_INFO}
                    onClick={handleSettingsInfo}>블로그 정보</S.NavItem>
                <S.NavItem 
                    selected={curMenu === SETTINGS_CATEGORY}
                    onClick={handleSettingsCategory}>카테고리 관리</S.NavItem>
            </S.NavContainer>
            <S.ContentContainer>

            </S.ContentContainer>
            { curMenu === SETTINGS_INFO ? <SettingsBlogInfo /> : <SettingsCategory />}
        </S.Container>
    )
}

export default SettingsNav