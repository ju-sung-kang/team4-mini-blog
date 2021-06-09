import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import db from '../../firebase';
import { PostContainer } from '../post/styles';
import * as S from './styles';

const PostList = (props) => {
  const history = useHistory();
  const [postList, setPostList] = useState([{title:'add', postId: "default"}]);
  useEffect(() => {
    getPostList();
  });

  const getPostList = () => {
    db.collection('categories').doc(props.currentCategory).collection('posts')
    .get()
    .then((querySnapshot) => {
      var array = [];
      querySnapshot.forEach((doc) => {
          const tmp = doc.data();
          const postId = doc.id;
          array.push({postId: postId, title: tmp.title});
      });
      setPostList(array);
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    })
  };
  const postClick = (e) => {
    e.preventDefault();
    console.log("clicked");
    history.push({
      pathname: '/post',
      search: `?categoryId=rkPeoyYAgGPXWEChvB6W&postId=${e.target.id}`,
    });
  }

  return (
    <S.PostListContainer>
      <S.PostListTitle>개발 일지</S.PostListTitle>
        <S.ContentContainer>
        {postList.length === 0 ? (
            <S.NoPost>쓰인 글이 없습니다!</S.NoPost>
          ) : (
          postList.map((post) => (
            <S.PostContainer
              id={post.postId}
              key={post.postId}
              //title={post.title}
              onClick={postClick}
            >{post.title}</S.PostContainer>
          ))
        )}
        </S.ContentContainer>

    </S.PostListContainer>
  );
}

export default PostList;