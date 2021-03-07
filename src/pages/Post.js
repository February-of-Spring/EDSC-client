import { React } from "react";
import MainLayout from "../components/MainLayout";
import Comment from "../components/Comment";
import greenVector from "../image/greenVector.png";
import heart from "../image/heart.png";
import comment from "../image/comment.png";
import PostComment from "../components/PostComment";

const Post = () => {
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
    content:
      "DSC (Developer Student Club)는 Google이 후원하는 대학생 개발자 그룹입니다.\n\n\
    현재 여러 나라에서 DSC 활동이 일어나고 있으며, DSC Korea는 올해 8월 DSC Lead at Korea의 선발을 통해\
    정식적으로 활동을 할 수 있게 되었습니다. \n\n\
     \
    현재 DSC Korea는 12명의 Lead를 주축으로 12개 대학교에 선발되었으며,\n\
    Ewha Womans University에서 활동하는 DSC를 저희는 DSC Ewha 라고 명명합니다.\n\n\n\n\n\
     \
     \
     \
    DSC Ewha's Activity\n\n\
    \
    저희 DSC Ewha는 22명의 Member로 구성되어있으며, 프로젝트를 완성하고 싶은 Developer들이 모인 클럽입니다.\n\
    매주 월요일 8교시에 모임을 진행하며 모임은 아래 구성으로 진행됩니다.\n\n\
     \
    1. 멤버별 개인 미니 세미나 : 자신이 공유하고 싶은 개발 지식을 20분 세미나를 통해 전달\n\
    2. 팀별 회의시간 : 이번주까지 한 일, 다음주에 할 일을 설정합니다.\n\
    3. 팀별 발표시간 : 팀별 진행사항을 발표하고, 여러 멤버들에게 피드백을 받습니다.\n\n\
    또한 매주 개발 하면서 Error를 해결하거나, Study 한 내용을 각 팀이 블로그에 포스팅 할 예정입니다.",
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
            content: "바람 불면 울렁이는 기분 탓에 나도 모르게 바람 불면 저편에서 그대여 니 모습이 자꾸 겹쳐오 또 울렁이는 기분 탓에 나도 모르게 바람 불면 저편에서 그대여 니 모습이 자꾸 겹쳐",
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
          <img src={greenVector} />
        </div>
        <div className="post-title">
          <h1>{post.title}</h1>
          <img src={heart} />
        </div>
        <div id="post-user">
          <img src={post.user.profileImage} className="profile-image" />
          <p id="post-user-nickname">{post.user.nickname}</p>
          <p id="post-createdat">
            {post.createdAt.substring(0, 10)} {post.createdAt.substring(11, 19)}
          </p>
        </div>
        <div id="post-content">
          <p>
            {post.content.split("\n").map((line) => {
              return (
                <>
                  {line}
                  <br />
                </>
              );
            })}
          </p>
        </div>
      </div>
      <hr />
      <div>
        <div id="comment-title">
          <img src={comment} id="comment-img" />
          <p>댓글 {post.commentNum}</p>
        </div>

        {<PostComment postId={post.id} />}

        <div id="commentlist-container">
          {post.commentList.map((comment) => {
            return (
              <>
                <Comment
                  key={comment.comment.id}
                  postId={post.id}
                  isChild={false}
                  comment={comment.comment}
                />
                {comment.childNum > 0 &&
                  comment.childList.map((child) => {
                    return (
                      <Comment
                        key={child.id}
                        postId={post.id}
                        isChild={true}
                        comment={child}
                      />
                    );
                  })}
              </>
            );
          })}
          <hr className="comment-line" />
        </div>
      </div>
    </MainLayout>
  );
};

export default Post;
