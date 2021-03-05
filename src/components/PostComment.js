import { React, useState } from "react";
import PropTypes from "prop-types";
import { FormControlLabel, Checkbox } from "@material-ui/core";

const PostComment = ({ postId, parentId }) => {
  const [comment, setComment] = useState({
    content: "",
    isPublic: true,
  });

  const postComment = () => {
    // 댓글 내용이 있을 경우
    if (comment.content) {
      if (parentId) {
        /* 
        대댓글
        POST /posts/:postId/comments
        {
        "email": "example@gmail.com",
        "content": "LGTM ✨💖",
        "parentId": "",
        "isPublic": 1
        }
        */
        console.log(postId);
        console.log(parentId);
        console.log(comment);
      } else {
        /* 
        일반 댓글
        POST /posts/:postId/comments
        {
        "email": "example@gmail.com",
        "content": "LGTM ✨💖",
        "isPublic": 1
        }
        */
        console.log(postId);
        console.log(comment);
      }
    } else { 
      alert("내용을 입력해주세요.");
    }
  };

  const onChangeContent = ({ target }) => {
    setComment({
      ...comment,
      [target.name]: target.value,
    });
  };

  const onChangePublic = () => {
    setComment({
      ...comment,
      isPublic: !comment.isPublic,
    });
  };

  return (
    <div className="comment-container">
      <p className="comment-user-nickname">배꽃나무</p>
      <textarea
        className="comment-textarea"
        rows="2"
        autoFocus
        placeholder="소중한 댓글 부탁드려요:)"
        name="content"
        onChange={onChangeContent}
      />
      <FormControlLabel
        control={
          <Checkbox
            id="public-check"
            onChange={onChangePublic}
            name="checkedB"
            color="primary"
          />
        }
        label="비밀글"
      />
      <button className="submit-btn" onClick={postComment}>
        등록하기
      </button>
    </div>
  );
};

PostComment.propTypes = {
  postId: PropTypes.number.isRequired,
  parentId: PropTypes.number,
};

export default PostComment;
