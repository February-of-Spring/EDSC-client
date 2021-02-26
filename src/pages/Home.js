import React from "react";
import { Link } from "react-router-dom";
import { Card } from "@material-ui/core";
import MainLayout from "../components/MainLayout";
import useStyles from "../Style";
import banner from "../image/banner.png";
import vector from "../image/vector.png";

const Home = () => {
  const classes = useStyles();
  const latestPosts = {
    totalNum: 3,
    postList: [
      {
        id: 9,
        category: {
          id: 4,
          name: "공지사항",
          level: 2,
          postNum: 2,
          parentCategoryId: 1,
        },
        user: {
          email: "hoit1302@ewhain.net",
          name: "박주은",
          nickname: "hoit1302",
          profileImage: "",
        },
        title: "카테고리 SWIFT 2번째 post test",
        content: "day6 💛⛄",
        likeCount: 0,
        viewCount: 2,
      },
      {
        id: 16,
        category: {
          id: 5,
          name: "정보공유",
          level: 2,
          postNum: 2,
          parentCategoryId: 1,
        },
        user: {
          email: "hoit1302@ewhain.net",
          name: "박주은",
          nickname: "hoit1302",
          profileImage: "",
        },
        title: "수정 test",
        content: "수정되었습니다. 💛⛄🙄",
        likeCount: 0,
        viewCount: 7,
      },
      {
        id: 6,
        category: {
          id: 6,
          name: "자유게시판",
          level: 2,
          postNum: 3,
          parentCategoryId: 1,
        },
        user: {
          email: "hoit1302@ewhain.net",
          name: "박주은",
          nickname: "hoit1302",
          profileImage: "",
        },
        title: "자유게시판",
        content: "거품의 모양 모양의 거품",
        likeCount: 2,
        viewCount: 0,
      },
    ],
  };
  return (
    <MainLayout>
      <img src={banner} id="banner" />
      {latestPosts.postList.map((post) => {
        return (
          <div key={post.id} id="latest-posts">
            <div className="inline">
              <h1>{post.category.name}</h1>
              <Link id="viewmore" to={`/category/${post.category.name}`}>
                <p id="viewmore-text">더보기</p>
                <img id="viewmore-img" src={vector} />
              </Link>
            </div>

            <Card
              className={classes.card}
              id="latest-posts-content"
              variant="outlined"
            >
              <Link to={`/posts/${post.id}`}>
                <h2>{post.title}</h2>
                <div>
                  <p>{post.content}</p>
                </div>
              </Link>
            </Card>
          </div>
        );
      })}
    </MainLayout>
  );
};

export default Home;
