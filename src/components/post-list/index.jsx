import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import db from '../../firebase';
import * as S from './styles';

const PostList = (props) => {
  const history = useHistory();
  const [postList, setPostList] = useState([{title:'가져오는 중입니다', postId: 'default'}]);
  const [categoryName, setCategoryName] = useState('가져오는 중입니다');
  useEffect(() => {
    getCategoryName();
    getPostList();
  },[props.currentCategory]);

  const getCategoryName = () => {
    if(props.currentCategory){
      db.collection('categories').doc(props.currentCategory)
      .get()
      .then((doc) => {
        const name = doc.data().name;
        setCategoryName(name);
        console.log("post list category name getting success");
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      })
    }
  }

  const getPostList = () => {
    if(props.currentCategory){
      db.collection('categories').doc(props.currentCategory).collection('posts').orderBy('time')
      .get()
      .then((querySnapshot) => {
        var array = [];
        querySnapshot.forEach((doc) => {
            const tmp = doc.data();
            const postId = doc.id;
            array.push({postId: postId, title: tmp.title});
        });
        setPostList(array);
        console.log("post list postlist getting success");
      })
      .catch((error) => {
          console.log("Error getting documents: ", error);
      })
    }
  }

  const postClick = (e) => {
    e.preventDefault();
    console.log("clicked");
    history.push({
      pathname: '/post',
      search: `?categoryId=${props.currentCategory}&postId=${e.target.id}`,
    });
  }

  const postWrite = (e) => {
    e.preventDefault();
    history.push({
      pathname: '/write-posting',
      search: `?categoryId=${props.currentCategory}`,
    })
  }

  return (
    <S.PostListContainer>
      <S.PostListTitle>{categoryName}</S.PostListTitle>
        <S.ContentContainer>
          {postList.length === 0 ? (
              <S.NoPost>쓰인 글이 없습니다!</S.NoPost>
            ) : (
              postList.map((post) => (
                <S.PostContainer
                  id={post.postId}
                  key={post.postId}
                  onClick={postClick}
                >{post.title}</S.PostContainer>
              ))
          )}
          <S.PostAdd onClick={postWrite}>새글 작성</S.PostAdd>
        </S.ContentContainer>

    </S.PostListContainer>
  );
}

export default PostList;