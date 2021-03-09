import React, { useState } from "react";
import PropTypes from "prop-types";
import { TableRow, TableCell, Button } from "@material-ui/core";
import useStyles from "../Style";
import editIcon from "../image/edit.png";
import deleteIcon from "../image/delete.png";

const SubCategoryTable = ({ child }) => {
  const classes = useStyles();
  const [subEditing, setSubEditing] = useState(false);

  const toggleSubEditing = () => {
    setSubEditing((val) => !val);
  };

  const editSubCategory = (e) => {
    e.preventDefault();
  };

  const deleteSubCategory = () => {
    if (confirm("해당 카테고리를 삭제하시겠습니까?")) {
      alert("카테고리가 삭제되었습니다.");
    }
  };
  return (
    <TableRow>
      <TableCell className={classes.subRow} component="th" scope="row">
        {subEditing ? (
          <form onSubmit={editSubCategory} className="edit-form">
            <input
              type="text"
              className="sub-edit-input"
              defaultValue={child.name}
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
            <div className="sub-categoryname">{child.name}</div>
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
  child: PropTypes.object.isRequired,
};

export default SubCategoryTable;
