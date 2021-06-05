import React, { useEffect, useState } from 'react';
import db from '../../firebase';
import Post from '../post';
import * as S from './styles';

const PostList = (props) => {
  const [postList, setPostList] = useState([{title:'add', postId: "default"}]);
  useEffect(() => {
    getPostList();
  }, []);

  const getPostList = () => { 
    db.collection('categories').doc(props.currentCategory).collection('posts')
    .get()
    .then((querySnapshot) => {
      var array = [];
      querySnapshot.forEach((doc) => {
          const tmp = doc.data();
          array.push({title: tmp.title, postId: doc.id});
      });
      setPostList(array);
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    })
  };
  const postClick = (postId) => {
    // 해당 postId를 가진 글을 볼 수 있도록 라우팅
  }

  return (
    <S.PostListContainer>
      <S.PostListTitle>개발 일지</S.PostListTitle>
        <S.ContentContainer>
        {postList.length === 0 ? (
          <S.NoPost>쓰인 글이 없습니다!</S.NoPost>
          ) : (
          postList.map((post) => (
            <Post
              key={post.postId}
              title={post.title}
              onClick={() => {
                //history.push(`/post/${post.id}`);
              }}
            />
          ))
        )}
        </S.ContentContainer>

    </S.PostListContainer>
  );
}

export default PostList;