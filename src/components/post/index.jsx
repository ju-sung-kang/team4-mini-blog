import React from 'react';
import * as S from './styles';

const Post = (props) => {
    return (
        <S.PostContainer>{props.title}</S.PostContainer>
    );
}

export default Post;