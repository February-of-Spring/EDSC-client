import React, { useState } from "react";
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

const CategoryTable = ({ category }) => {
  const classes = useStyles();
  const [mainEditing, setMainEditing] = useState(false);

  const toggleMainEditing = () => {
    setMainEditing((val) => !val);
  };

  const editMainCategory = (e) => {
    e.preventDefault();
  };

  const deleteMainCategory = () => {
    if (confirm("전체 카타고리를 삭제하시겠습니까?")) {
      alert("카테고리가 삭제되었습니다.");
    }
  };

  return (
    <TableContainer className={classes.table} component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.mainRow}>
              {mainEditing ? (
                <form className="edit-form" onSubmit={editMainCategory}>
                  <input
                    type="text"
                    className="edit-input"
                    defaultValue={category.parent.name}
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
                    <img src={addIcon} />
                    <img src={trashIcon} onClick={deleteMainCategory} />
                  </div>
                </div>
              )}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {category.child.map((child) => (
            <SubCategoryTable key={child.id} child={child} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

CategoryTable.propTypes = {
  category: PropTypes.object.isRequired,
};

export default CategoryTable;
