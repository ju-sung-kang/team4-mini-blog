import React, { useEffect, useState } from 'react';
import Post from '../post';
import * as S from './styles';


function PostList() {
  const [postList, setPostList] = useState([{'title': '리액트 사용해보기'}, {'title': '파이어베이스 사용해보기'}]);
  // useEffect(() => {
  //   getPostList();
  // }, []);

//   const getChatRoomList = async () => { 
//     const postList = await getPostList();
//     setPostList(postList);
//   };

  return (
    <S.PostListContainer>
      <S.PostListTitle/>
      {postList.length === 0 ? (
        <S.NoPost>개설된 채팅방이 없습니다!</S.NoPost>
      ) : (
        postList.map((post) => (
          <Post
            title={post.title}
            key={post.id}
            onClick={() => {
              //history.push(`/post/${post.id}`);
            }}
          />
        ))
      )}
    </S.PostListContainer>
  );
}

export default PostList;