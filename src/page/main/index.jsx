import React, { useState } from 'react';
import * as S from './styles';
import Footer from '../../components/footer';
import Header from '../../components/header';
import PostList from '../../components/post-list';


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