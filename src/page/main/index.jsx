import React, { useState, useEffect } from 'react';
import {Switch, Route, useHistory} from 'react-router-dom';
import * as S from './styles';
import Header from '../../components/header';
import PostList from '../../components/post-list';
import Footer from '../../components/footer';
import db from '../../firebase';
import ViewPosting from '../../page/view-posting/index';


const Main = () => {
  const [defCategory, setDefCategory] = useState();
  const [curCategory, setCurCategory] = useState(defCategory);
  let history = useHistory();
  useEffect(()=> {
    getDefCategory();
  }, []);

  const getDefCategory = () => {
    db.collection('blogInfo').doc('PkW2DmPU6YAZCQPBNc65')
    .get()
    .then((doc) => {
          const tmp = doc.data();
          setDefCategory(tmp.defCategory);
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
  }

  const categoryHandler = (nextCategory) => {
    setCurCategory(nextCategory);
    history.push('/');
  }

  return (

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
    </S.MainContainer>

  );
};

export default Main;