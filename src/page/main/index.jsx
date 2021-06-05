import React, { useState, useEffect, useHistory } from 'react';
import * as S from './styles';
import Header from '../../components/header';
import PostList from '../../components/post-list';
import Footer from '../../components/footer';
import db from '../../firebase';


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
          <PostList currentCategory={category} categoryHandler={categoryHandler}/>
          <Footer currentCategory={category} categoryHandler={categoryHandler}/>
      </S.MainContainer>
  );
};

export default Main;