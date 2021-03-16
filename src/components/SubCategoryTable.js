import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { TableRow, TableCell, Button } from "@material-ui/core";
import useStyles from "../Style";
import editIcon from "../image/edit.png";
import deleteIcon from "../image/delete.png";

const SubCategoryTable = ({
  subcategory,
  categories,
  setCategories,
  mainId,
  subId,
}) => {
  const classes = useStyles();
  const [subEditing, setSubEditing] = useState(false);
  const textInput = useRef();
  const index = categories.findIndex((item) => item.id === mainId);

  const toggleSubEditing = () => {
    setSubEditing((val) => !val);
  };

  const editSubCategory = (idx, newText) => {
    const newChild = categories[index].child.map((item) => {
      if (item.id === subId) {
        return {
          ...item,
          name: newText,
        };
      }
      return item;
    });

    const newCategories = categories.map((item) => {
      if (item.id === idx) {
        return {
          ...item,
          child: newChild,
        };
      }
      return item;
    });

    setCategories(newCategories);
  };

  const deleteSubCategory = () => {
    if (confirm("해당 카테고리를 삭제하시겠습니까?")) {
      alert("카테고리가 삭제되었습니다.");
      const newChild = categories[index].child.filter((item) => {
        return item.id !== subId;
      });

      const newCategories = categories.map((item) => {
        if (item.id === mainId) {
          return {
            ...item,
            childNum: item.childNum - 1,
            child: newChild,
          };
        }
        return item;
      });
      setCategories(newCategories);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editSubCategory(mainId, textInput.current.value);
    setSubEditing(false);
  };

  return (
    <TableRow>
      <TableCell className={classes.subRow} component="th" scope="row">
        {subEditing || subcategory.name === "" ? (
          <form onSubmit={handleSubmit} className="edit-form">
            <input
              type="text"
              className="sub-edit-input"
              defaultValue={subcategory.name}
              ref={textInput}
            />
            <Button className={classes.cancelBtn} onClick={toggleSubEditing}>
              <p className="cancel-text">취소</p>
            </Button>
            <Button className={classes.confirmBtn} type="submit">
              <p className="confirm-text">확인</p>
            </Button>
          </form>
        ) : (
          <>
            <div className="sub-categoryname">{subcategory.name}</div>
            <div className="btn-icons">
              <img src={editIcon} onClick={toggleSubEditing} />
              <img src={deleteIcon} onClick={deleteSubCategory} />
            </div>
          </>
        )}
      </TableCell>
    </TableRow>
  );
};

SubCategoryTable.propTypes = {
  subcategory: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
  setCategories: PropTypes.func.isRequired,
  mainId: PropTypes.number.isRequired,
  subId: PropTypes.number.isRequired,
};

export default SubCategoryTable;
