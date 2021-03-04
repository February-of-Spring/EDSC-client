import { React } from "react";

const PostComment = () => {
  return (
    <div className="comment-container">
      <p className="comment-user-nickname">배꽃나무</p>
      <textarea
        className="comment-textarea"
        rows="2"
        autoFocus
        placeholder="소중한 댓글 부탁드려요:)"
      />
      <label>
        <input
          className="checkbox"
          type="checkbox"
          name="isPublic"
          value="false"
        ></input>
        비밀글
      </label>
      <button className="submit-btn">등록하기</button>
    </div>
  );
};

export default PostComment;
