import { React, useState } from "react";
import PropTypes from "prop-types";
import PostComment from "./PostComment";

const Comment = ({ comment }) => {
  const [reply, setReply] = useState(false);

  return (
    <div className="comment">
      <hr className="comment-line" />
      <div className="comment-profile">
        <img src={comment.user.profileImage} className="profile-image" />
        <p>{comment.user.nickname}</p>
      </div>
      <div className="comment-texts">
        <p>{comment.content}</p>

        <div className="comment-bottom">
          <p className="createdat">
            {comment.createdAt.substring(0, 10)}{" "}
            {comment.createdAt.substring(11, 19)}
          </p>
          <button className="reply-btn">
            <p className="createdat" onClick={() => setReply(true)}>답글쓰기</p>
          </button>
        </div>
      </div>
      {reply && <PostComment />}
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
};

export default Comment;
