import React, { useState } from "react";
import MainLayout from "../components/MainLayout";
import CategoryTable from "../components/CategoryTable";

const categoryData = [
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

const Settings = () => {
  const [categories, setCategories] = useState(categoryData);
  const newId =
    categories.length > 0 ? categories[categories.length - 1].id : 0;

  const addMainCategory = () => {
    setCategories([
      ...categories,
      {
        id: newId + 1,
        parent: {
          id: newId + 1,
          name: "",
          level: 1,
          postNum: 0,
          parentCategoryId: newId + 1,
        },
        childNum: 0,
        child: [],
      },
    ]);
  };

  return (
    <MainLayout>
      <div className="page-title">카테고리 관리</div>
      <div onClick={addMainCategory} className="add-category-btn">
        <p>카테고리 추가 +</p>
      </div>
      {categories.map((category) => {
        return (
          <CategoryTable
            key={category.id}
            mainId={category.id}
            category={category}
            categories={categories}
            setCategories={setCategories}
          />
        );
      })}
    </MainLayout>
  );
};

export default Settings;
