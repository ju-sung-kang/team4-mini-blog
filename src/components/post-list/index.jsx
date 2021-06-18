import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import db from '../../firebase';
import * as S from './styles';
import defPostImage from '../../assets/book.png'
import postAddImage from '../../assets/postadd.png';
import postAddImageHover from '../../assets/postaddhover.png';


const PostList = (props) => {
  const history = useHistory();
  const [postList, setPostList] = useState([]);
  const [categoryName, setCategoryName] = useState('가져오는 중입니다');
  const [categoryPostNum, setCategoryPostNum] = useState(0);
  const [isPostAddImageHover, setHover] = useState(false);
  useEffect(() => {
    getCategoryName();
    getPostList();
  },[props.currentCategory, categoryPostNum]);

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
        const num = querySnapshot.size;
        setCategoryPostNum(num);
        var array = [];
        querySnapshot.forEach((doc) => {
            const tmp = doc.data();
            const postId = doc.id;
            const shortTitle = textCut(tmp.title);
            array.push({
              postId: postId, 
              title: tmp.title, 
              shortTitle: shortTitle, 
              postImageUrl: tmp.postImageUrl, 
              regDate: tmp.regDate
            });
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


  const textCut = (txt) => {
    const len = 15;
    if (txt.length > len) {
        txt = txt.substr(0, len) + '...';
    }
    return txt;
  }

  const imageLoadError = (e) => {
    e.target.src = defPostImage;
  }


  return (
    <S.PostListContainer>
      <S.PostListTitle><S.Bold>{categoryName}</S.Bold> &nbsp; {categoryPostNum}개의 글</S.PostListTitle>
        <S.ContentContainer>
          {postList.length === 0 ? (
              <S.NoPost>쓰인 글이 없습니다!</S.NoPost>
            ) : (
              postList.map((post) => (
                <S.PostContainer>
                  <S.PostImage 
                  src={post.postImageUrl}
                  onError={imageLoadError}
                  id={post.postId} 
                  key={post.postImageUrl} 
                  onClick={postClick}/>
                  <S.PostTitle 
                  id={post.postId} 
                  key={post.postId} 
                  onClick={postClick}>
                    {post.shortTitle}
                  </S.PostTitle>
                  <S.PostRegDate>{post.regDate}</S.PostRegDate>
                </S.PostContainer>
              ))
          )}
          <S.PostAdd 
          onMouseOver={() =>setHover(true)}
          onMouseOut={() => setHover(false)}
          src={isPostAddImageHover ? postAddImageHover : postAddImage} 
          onClick={postWrite}/>
        </S.ContentContainer>

    </S.PostListContainer>
  );
}

export default PostList;