import React, { useState } from 'react';
import * as S from './styles';
import Header from '../../components/header';
import PostList from '../../components/post-list';
import Footer from '../../components/footer';


const Main = () => {
  return (
    <S.MainContainer>
        <Header/>
        <PostList/>
        <Footer/>
    </S.MainContainer>
  );
};

export default Main;