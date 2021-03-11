import { React } from "react";
import PropTypes from "prop-types";
import downRightArrow from "../image/downRightArrow.png";

const Comment = ({ isChild, comment, postReply }) => {
  if (isChild) {
    // 답글
    return (
      <div className="comment">
        <img src={downRightArrow} className="child-arrow-img" />
        <div className="child-comment">
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
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    // 일반 댓글
    return (
      <div>
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
              <p className="createdat" onClick={() => postReply(comment.id)}>
                답글쓰기
              </p>
            </button>
          </div>
        </div>
      </div>
    );
  }
};

Comment.propTypes = {
  isChild: PropTypes.bool.isRequired,
  comment: PropTypes.object.isRequired,
  postReply: PropTypes.func,
};

export default Comment;
