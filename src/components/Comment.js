import { React, useState } from "react";
import PropTypes from "prop-types";
import PostComment from "./PostComment";
import downRightArrow from "../image/downRightArrow.png";

const Comment = ({ postId, isChild, comment }) => {
  const [reply, setReply] = useState(false);

  if (isChild) { // 답글
    return (
      <>
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
                <button className="reply-btn">
                  <p className="createdat" onClick={() => setReply(true)}>
                    답글쓰기
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
        {reply && <PostComment postId={postId} parentId={comment.id} parentNickname={comment.user.nickname} setReply={setReply}/>}
      </>
    );
  } else { // 일반 댓글
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
              <p className="createdat" onClick={() => setReply(true)}>
                답글쓰기
              </p>
            </button>
          </div>
        </div>
        {reply && <PostComment postId={postId} parentId={comment.id} />}
      </div>
    );
  }
};

Comment.propTypes = {
  postId: PropTypes.number.isRequired,
  isChild: PropTypes.bool.isRequired,
  comment: PropTypes.object.isRequired,
};

export default Comment;
