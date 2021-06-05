import React, { useState } from 'react';
import {Switch, Route} from 'react-router-dom';
import * as S from './styles';
import Header from '../../components/header';
import PostList from '../../components/post-list';
import Footer from '../../components/footer';
import ViewPosting from '../../page/view-posting/index';


const Main = () => {
  return (
    <S.MainContainer>
        <Header/>
        <Switch>
          <Route path="/post">
            <ViewPosting/>
          </Route>
          <Route path="/">
            <PostList/>
          </Route>
        </Switch>
        <Footer/>
    </S.MainContainer>
  );
};

export default Main;