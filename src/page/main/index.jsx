import React, { useState, useEffect } from 'react';
import {Switch, Route} from 'react-router-dom';
import * as S from './styles';
import Header from '../../components/header';
import PostList from '../../components/post-list';
import Footer from '../../components/footer';
import db from '../../firebase';
import ViewPosting from '../../page/view-posting/index';


const Main = () => {
  const [category, setCategory] = useState();
  let history = useHistory();
  useEffect(()=> {
    getDefCategory();
  }, []);

  const getDefCategory = () => {
    db.collection('blogInfo').doc('PkW2DmPU6YAZCQPBNc65')
    .get()
    .then((doc) => {
        if (doc.exists) {
            const tmp = doc.data();
            setCategory(tmp.defCategory);
        }
        else {
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
  }

  const categoryHandler = (nextCategory) => {
    //setCategory(nextCategory);
    db.collection('blogInfo').doc('PkW2DmPU6YAZCQPBNc65').update({defCategory: nextCategory})
    .then(() => {
      history.replace('/'); // 라우터 돔 활용만 해주면 될듯
      console.log("Document successfully updated!");
    });
  }

  return (

    <S.MainContainer>
        <Header/>
        <Switch>
          <Route path="/post">
            <ViewPosting/>
          </Route>
          <Route path="/">
            <PostList currentCategory={category} categoryHandler={categoryHandler}/>
          </Route>
        </Switch>
        <Footer currentCategory={category} categoryHandler={categoryHandler}/>
    </S.MainContainer>

  );
};

export default Main;