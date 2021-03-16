import React from "react";
import useStyles from "../Style";
import MainLayout from "../components/MainLayout";
import { Card } from "@material-ui/core";
import profile from "../image/profile.png";
import vector from "../image/vector.png";

const MyPage = () => {
  const classes = useStyles();
  return (
    <MainLayout>
      <h1 className="page-title">마이페이지</h1>

      <div className="info-header">
        <p className="title-info">내 정보</p>
        <button id="logout-btn">
          <p>로그아웃</p>
        </button>
      </div>
      <Card className={classes.profileCard} variant="outlined">
        <img src={profile} id="mypage-profile" />
        <div id="user-info">
          <div>배꽃나무</div>
          <div>dscewha1234@gmail.com</div>
        </div>
      </Card>

      <div>
        <div className="myposts-header">
          <div className="title-info">내가 쓴 글</div>
          <img src={vector} />
          <p>더보기</p>
        </div>
        <Card className={classes.postCard} variant="outlined">
          <div className="mypost-card">
            <div>love is an bubble</div>
            <div>2021.01.01 00:00</div>
            <div>bubble is made of!!</div>
          </div>
        </Card>
      </div>

      <div>
        <div className="myposts-header">
          <div className="title-info">좋아요한 글</div>
          <img src={vector} />
          <p className="more-text">더보기</p>
        </div>
        <Card className={classes.postCard} variant="outlined">
          <div className="mypost-card">
            <div>love is an bubble</div>
            <div>2021.01.01 00:00</div>
            <div>bubble is made of!!</div>
          </div>
        </Card>
      </div>
    </MainLayout>
  );
};

export default MyPage;
