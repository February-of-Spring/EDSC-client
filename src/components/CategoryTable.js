import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import {
  TableContainer,
  Table,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
  Paper,
  Button,
} from "@material-ui/core";
import useStyles from "../Style";
import editIcon from "../image/edit.png";
import addIcon from "../image/add.png";
import trashIcon from "../image/trash.png";
import SubCategoryTable from "./SubCategoryTable";

const CategoryTable = ({ category, categories, setCategories, mainId }) => {
  const classes = useStyles();
  const [mainEditing, setMainEditing] = useState(false);
  const textInput = useRef();

  const toggleMainEditing = () => {
    setMainEditing((val) => !val);
  };

  const deleteMainCategory = () => {
    if (confirm("전체 카타고리를 삭제하시겠습니까?")) {
      alert("카테고리가 삭제되었습니다.");
      const newCategories = categories.filter((item) => {
        return item.id !== mainId;
      });

      setCategories(newCategories);
    }
  };

  const editMainCategory = (idx, newText) => {
    const newCategory = categories.map((item) => {
      if (item.id === idx) {
        return {
          ...item,
          parent: {
            ...item.parent,
            name: newText,
          },
        };
      }
      return item;
    });
    setCategories(newCategory);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (textInput.current.value === "") {
      alert("내용을 입력하세요");
    }
    editMainCategory(category.id, textInput.current.value);
    setMainEditing(false);
  };

  const addSubCategory = () => {
    const newId =
      category.childNum > 0 ? category.child[category.childNum - 1].id : 0;
    const newCategories = categories.map((item) => {
      if (item.id === mainId) {
        return {
          ...item,
          childNum: item.childNum + 1,
          child: [
            ...item.child,
            {
              id: newId + 1,
              name: "",
              level: 2,
              postNum: 0,
              parentCategoryId: mainId,
            },
          ],
        };
      }
      return item;
    });
    setCategories(newCategories);
  };

  return (
    <TableContainer className={classes.table} component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.mainRow}>
              {mainEditing || category.parent.name === "" ? (
                <form className="edit-form" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    className="edit-input"
                    defaultValue={category.parent.name}
                    ref={textInput}
                  />
                  <Button
                    className={classes.cancelBtn}
                    onClick={toggleMainEditing}
                  >
                    <p className="cancel-text">취소</p>
                  </Button>
                  <Button className={classes.confirmBtn} type="submit">
                    <p className="confirm-text">확인</p>
                  </Button>
                </form>
              ) : (
                <div>
                  <div className="main-categoryname">
                    {category.parent.name}
                  </div>
                  <div className="btn-icons">
                    <img src={editIcon} onClick={toggleMainEditing} />
                    <img src={addIcon} onClick={addSubCategory} />
                    <img src={trashIcon} onClick={deleteMainCategory} />
                  </div>
                </div>
              )}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {category.child.map((subcategory) => (
            <SubCategoryTable
              key={subcategory.id}
              subId={subcategory.id}
              subcategory={subcategory}
              categories={categories}
              setCategories={setCategories}
              mainId={mainId}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

CategoryTable.propTypes = {
  category: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
  setCategories: PropTypes.func.isRequired,
  mainId: PropTypes.number.isRequired,
};

export default CategoryTable;
