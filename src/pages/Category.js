import { React, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Button, Card } from "@material-ui/core";
import useStyles from "../Style";
import MainLayout from "../components/MainLayout";

const Category = ({ history }) => {
  const classes = useStyles();
  const { level1, level2 } = useParams();

  useEffect(() => {
    //GET "/category/:level1", "/category/:level1/:level2"
  }, []);

  const postLists = {
    totalNum: 2,
    postList: [
      {
        id: 11,
        category: {
          id: 7,
          name: "프론트엔드",
          level: 2,
          postNum: 2,
          parentCategoryId: 2,
        },
        user: {
          email: "hoit1302@ewhain.net",
          name: "박주은",
          nickname: "hoit1302",
          profileImage:
            "https://edsc-s3.s3.ap-northeast-2.amazonaws.com/profile-image/1",
        },
        title: "카테고리 jueun 새로 생성되었는지 post test",
        content: "day6 💛⛄",
        likeCount: 0,
        viewCount: 1,
      },
      {
        id: 18,
        category: {
          id: 7,
          name: "프론트엔드",
          level: 2,
          postNum: 2,
          parentCategoryId: 2,
        },
        user: {
          email: "hoit1302@ewhain.net",
          name: "박주은",
          nickname: "hoit1302",
          profileImage:
            "https://edsc-s3.s3.ap-northeast-2.amazonaws.com/profile-image/1",
        },
        title: "react study1",
        content: "react study~~~",
        likeCount: 0,
        viewCount: 0,
      },
    ],
  };

  return (
    <MainLayout>
      <div className="content-title ">
        <p className="content-name">{level2 || level1}</p>
        <Button className={classes.postBtn} onClick={() => {history.push("/posting")}}>글쓰기</Button>
      </div>
      {postLists.postList.map((post) => {
        return (
          <div key={post.id} id="posts-card">
            <Card
              className={classes.card}
              id="latest-posts-card"
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

Category.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Category;
