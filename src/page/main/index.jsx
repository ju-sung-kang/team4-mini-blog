import React, { useState, useEffect } from 'react';
import {Switch, Route, useHistory} from 'react-router-dom';
import * as S from './styles';
import Header from '../../components/header';
import PostList from '../../components/post-list';
import Footer from '../../components/footer';
import db from '../../firebase';
import ViewPosting from '../../page/view-posting/index';


const Main = () => {
  const [curCategory, setCurCategory] = useState();
  let history = useHistory();
  useEffect(()=> {
    getDefCategory();
  }, []);

  const getDefCategory = () => {
    db.collection('blogInfo').doc('info')
    .get()
    .then((doc) => {
        const tmp = doc.data();
        setCurCategory(tmp.defCategory);
        console.log("main def category getting success");
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
  }

  const categoryHandler = (nextCategory) => {
    setCurCategory(nextCategory);
    history.push('/');
  }

  return (
    <S.MainContainerContainerContainer>
    <S.MainContainerContainer>
    <S.MainContainer>
        <Header/>
        <Switch>
          <Route path="/post">
            <ViewPosting/>
          </Route>
          <Route path="/">
            <PostList currentCategory={curCategory} categoryHandler={categoryHandler}/>
          </Route>
        </Switch>
        <Footer currentCategory={curCategory} categoryHandler={categoryHandler}/>
        <S.MarginBottom/>
    </S.MainContainer>
    </S.MainContainerContainer>
    </S.MainContainerContainerContainer>
  );
};

export default Main;