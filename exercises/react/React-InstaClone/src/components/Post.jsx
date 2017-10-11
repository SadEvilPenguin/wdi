import React, { Component } from 'react';
import Comment from './Comment';
import { FaHeartO, FaCommentO } from 'react-icons/lib/fa'
import styled from 'styled-components';

const PostDiv = styled.div `
 background-color: #fff;
 border-radius: 3px;
 width: 95vw;
 max-width: 600px;
 margin: 20px auto;
 border: 1px solid #e6e6e6;
`;

const PostHead = styled.div`
 display: flex;
 justify-content: flex-start;
 align-items: center;
 padding: 16px;
`;

const UserImg = styled.img `
 height: 30px;
 width: 30px;
 border-radius: 100%;
 border-style: none;
`;

const UserTag = styled.span `
  padding-left: 5px;
  font-weight: bold;
`;

const PostImg = styled.img `
  max-width: 600px;
  margin: 0 auto;
  border-style: none;
`;

const PostCaption = styled.p `
  padding: 5px 16px;
  font-family: "Open Sans";
`;

const PostIcons = styled.div `
width: 90px;
display: flex;
justify-content: space-around;
font-size: 2em;
margin: 0;
padding: 5px 16px;
`;

const CommentContainer = styled.div `
padding: 5px 16px;
font-family: "Open Sans";
`;


class Post extends Component{

  render(){
    const { post } = this.props;
    return(
      <PostDiv>
        <PostHead>
          <UserImg src={post.user.profile_pic} alt={post.user.username} />
          <UserTag>{post.user.username}</UserTag>
        </PostHead>
        <div>
          <PostImg src={post.image.url} />
          <PostCaption>{post.caption}</PostCaption>
        </div>
        <PostIcons>
          <FaHeartO />
          <FaCommentO />
        </PostIcons>
        <CommentContainer>
        <p>{post.likes.length} likes</p>
        {post.comments.map((comment,i) => <Comment key={i} comment={comment}/>)}
        </CommentContainer>
      </PostDiv>
    )
  }
}

export default Post;