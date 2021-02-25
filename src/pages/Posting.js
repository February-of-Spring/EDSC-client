import { React, useState } from "react";
import MainLayout from "../components/MainLayout";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl, Select, Button, TextField } from "@material-ui/core";
import CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined";
import LinkIcon from "@material-ui/icons/Link";

const useStyles = makeStyles((theme) => ({
  select: {
    width: "340px",
    height: "56px",
  },
  postBtn: {
    position: "absolute",
    top: "0px",
    right: "0px",
    width: "160px",
    height: "40px",
    padding: theme.spacing(1),
    background: "#00462A",
    color: "#ffffff",
    fontSize: "16px",
  },
  attachBtn: {
    width: "160px",
    height: "56px",
    fontSize: "16px",
    lineHeight: "24px",
    marginRight: "20px",
  },
}));

const Posting = () => {
  const classes = useStyles();
  const [post, setPost] = useState({
    email: "",
    title: "",
    content: "",
    categoryName: "",
  });

  const onChangePost = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
    //console.log(post);
  };

  const onChangeImg = (e) => {
    const formData = new FormData();
    formData.append("img", e.target.files[0]);
    console.log(formData);
  };

  const onChangeFile = (e) => {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
  };

  const onClickImageInput = () => {
    document.getElementById("imageInput").click();
  };

  const onClickFileInput = () => {
    document.getElementById("fileInput").click();
  };


  const onPost = () => {
    if (confirm("등록하시겠습니까?")) {
      alert("정상적으로 등록되었습니다.");
    }
  };

  return (
    <MainLayout>
      <div className="inline">
        <p className="content-name">글쓰기</p>
        <Button onClick={onPost} className={classes.postBtn}>
          등록하기
        </Button>
      </div>
      <div id="posting-content">
        <FormControl
          required
          variant="outlined"
          className={classes.formControl}
        >
          <Select
            native
            value={post.categoryName}
            name="categoryName"
            onChange={onChangePost}
            inputProps={{
              name: "categoryName",
            }}
            className={classes.select}
          >
            <option value="" disabled>
              카테고리를 선택해주세요.
            </option>
            <option value="공지사항">공지사항</option>
            <option value="">None</option>
            <option value="">None</option>
          </Select>
        </FormControl>
        <TextField
          id="titleField"
          placeholder="제목을 입력해주세요."
          variant="outlined"
          name="title"
          onChange={onChangePost}
        />
        <TextField
          id="contentField"
          placeholder="내용을 입력해주세요."
          variant="outlined"
          rows={20}
          name="content"
          onChange={onChangePost}
          multiline
        />
        <div className="posting-attaches">
          <input
            accept="image/*"
            className={classes.input}
            style={{ display: "none" }}
            onChange={onChangeImg}
            multiple
            id="imageInput"
            type="file"
          />
          <Button
            variant="outlined"
            endIcon={<CameraAltOutlinedIcon />}
            className={classes.attachBtn}
            onClick={onClickImageInput}
          >
            사진추가
          </Button>
          <input
            className={classes.input}
            style={{ display: "none" }}
            onChange={onChangeFile}
            multiple
            id="fileInput"
            type="file"
          />
          <Button
            variant="outlined"
            endIcon={<LinkIcon />}
            className={classes.attachBtn}
            onClick={onClickFileInput}
          >
            첨부파일
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Posting;
