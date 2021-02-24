import { React, useState } from "react";
import MainLayout from "../components/MainLayout";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl, Select, Button, TextField } from "@material-ui/core";
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';
//import Link from "../image/link.png";

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: "340px",
    height: "56px",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
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
    display: "inline-block",
    width: "160px",
    height: "56px",
  }
}));

const Posting = () => {
  const classes = useStyles();
  const [post, setPost] = useState({
    email: "",
    title: "",
    content: "",
    categoryName: "",
  });

  const onChangeCategoryName = (e) => {
    setPost({
      ...post,
      categoryName: e.target.value,
    });
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
            onChange={onChangeCategoryName}
            inputProps={{
              name: "categoryName",
            }}
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
        />
        <TextField
          id="contentField"
          placeholder="내용을 입력해주세요."
          variant="outlined"
          rows={20}
          multiline
        />
        <Button
          variant="outlined"
          endIcon={<CameraAltOutlinedIcon/>}
          className={classes.attachBtn}
        >
          사진추가
        </Button>
      </div>
    </MainLayout>
  );
};

export default Posting;
