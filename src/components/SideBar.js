import React from "react";
import { Link } from "react-router-dom";
import settings from "../image/settings.png";

const SideBar = () => {
  const categories = [
    {
      id: 1,
      parent: {
        id: 1,
        name: "DSC Ewha Activity",
        level: 1,
        postNum: 7,
        parentCategoryId: 1,
      },
      childNum: 3,
      child: [
        {
          id: 4,
          name: "공지사항",
          level: 2,
          postNum: 2,
          parentCategoryId: 1,
        },
        {
          id: 5,
          name: "정보공유",
          level: 2,
          postNum: 2,
          parentCategoryId: 1,
        },
        {
          id: 6,
          name: "자유게시판",
          level: 2,
          postNum: 3,
          parentCategoryId: 1,
        },
      ],
    },
    {
      id: 2,
      parent: {
        id: 2,
        name: "개발 파트별 게시판",
        level: 1,
        postNum: 2,
        parentCategoryId: 2,
      },
      childNum: 2,
      child: [
        {
          id: 7,
          name: "프론트엔드",
          level: 2,
          postNum: 1,
          parentCategoryId: 2,
        },
        {
          id: 8,
          name: "백엔드",
          level: 2,
          postNum: 1,
          parentCategoryId: 2,
        },
      ],
    },
    {
      id: 3,
      parent: {
        id: 3,
        name: "프로젝트별 게시판",
        level: 1,
        postNum: 0,
        parentCategoryId: 3,
      },
      childNum: 0,
      child: [],
    },
  ];

  return (
    <nav id="navbar">
      <ul className="navbar-content">
        <li className="navbar-main">
          <p>전체보기</p>
          <img src={settings} id="setting" />
        </li>
        {categories.map((category) => {
          return (
            <div key={category.id}>
              <hr className="navbar-hr" />
              <li className="navbar-main">
                <p>{category.parent.name}</p>
              </li>
              {category.child.map((child) => {
                return (
                  <li key={child.id}>
                    {
                      <Link className="navbar-sub" exact to="/">
                        <p>
                          {child.name} ({child.postNum})
                        </p>
                      </Link>
                    }
                  </li>
                );
              })}
            </div>
          );
        })}
      </ul>
    </nav>
  );
};

export default SideBar;
