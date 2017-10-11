import React, {Component} from 'react';
import styled from 'styled-components'

const CommentContainer = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
`;

const UserImg = styled.img `
height: 30px;
width: 30px;
border-radius: 100%;
border-style: none;
`;

const UserComment = styled.p `
 padding-left: 5px;
`;

class Comment extends Component {
  render() {
    const {comment} = this.props;
    console.log(comment);
    return (
      <CommentContainer>
        <UserImg src={comment.profile_pic}/>
        <UserComment>
        <strong>{comment.username} </strong>
        {comment.text}</UserComment>
      </CommentContainer>
    );
  }
}

export default Comment;