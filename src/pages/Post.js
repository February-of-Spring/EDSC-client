import { React } from "react";
import MainLayout from "../components/MainLayout";
//import useStyles from "../Style";

const Posting = () => {
  //const classes = useStyles();

  const post = {
    id: 6,
    user: {
      email: "hoit1302@ewhain.net",
      name: "박주은",
      nickname: "hoit1302",
      profileImage:
        "https://edsc-s3.s3.ap-northeast-2.amazonaws.com/profile-image/1",
    },
    title: "자유게시판",
    content: "거품의 모양 모양의 거품",
    likeCount: 2,
    viewCount: 1,
    createdAt: "2021-02-20T03:38:06.000+00:00",
    modifiedAt: "2021-02-22T00:33:25.000+00:00",
    category: {
      id: 6,
      name: "자유게시판",
      level: 2,
      postNum: 3,
      parentCategoryId: 1,
    },
    imageList: [],
    fileList: [],
    commentNum: 4,
    commentList: [
      {
        comment: {
          id: 8,
          user: {
            email: "example@gmail.com",
            name: "김구름",
            nickname: "구름빵",
            profileImage:
              "https://edsc-s3.s3.ap-northeast-2.amazonaws.com/profile-image/2",
          },
          content: "LGTM ✨💖",
          isPublic: false,
          createdAt: "2021-02-24T05:04:03.000+00:00",
          modifiedAt: "2021-02-24T05:04:03.000+00:00",
        },
        childNum: 2,
        childList: [
          {
            id: 10,
            user: {
              email: "hoit1302@ewhain.net",
              name: "박주은",
              nickname: "hoit1302",
              profileImage:
                "https://edsc-s3.s3.ap-northeast-2.amazonaws.com/profile-image/1",
            },
            content: "무슨 뜻이에요?",
            isPublic: false,
            createdAt: "2021-02-24T05:05:29.000+00:00",
            modifiedAt: "2021-02-24T05:05:29.000+00:00",
          },
          {
            id: 11,
            user: {
              email: "example@gmail.com",
              name: "김구름",
              nickname: "구름빵",
              profileImage:
                "https://edsc-s3.s3.ap-northeast-2.amazonaws.com/profile-image/2",
            },
            content: "Looks Good To Me !",
            isPublic: false,
            createdAt: "2021-02-24T05:06:01.000+00:00",
            modifiedAt: "2021-02-24T05:06:01.000+00:00",
          },
        ],
      },
      {
        comment: {
          id: 9,
          user: {
            email: "example@gmail.com",
            name: "김구름",
            nickname: "구름빵",
            profileImage:
              "https://edsc-s3.s3.ap-northeast-2.amazonaws.com/profile-image/2",
          },
          content: "너무 멋져요!",
          isPublic: false,
          createdAt: "2021-02-24T05:04:21.000+00:00",
          modifiedAt: "2021-02-24T05:04:21.000+00:00",
        },
        childNum: 0,
        childList: [],
      },
    ],
  };

  return (
    <MainLayout>
      <div id="post">
        <div id="post-categoryname">
          <p>{post.category.name}</p>
        </div>
        <div>
          <h1 id="post-title">{post.title}</h1>
        </div>
        <div id="post-user">
          <img src={post.user.profileImage} id="profile-image"/>
          <p id="post-user-nickname">{post.user.nickname}</p>
          <p id="post-createdat">{post.createdAt.substring(0,10)} {post.createdAt.substring(11,19)}</p>
        </div>
        <div id="post-content">
          <p>{post.content}</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Posting;
