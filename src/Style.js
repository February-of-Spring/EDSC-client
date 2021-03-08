import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  select: {
    width: "340px",
    height: "56px",
  },
  postBtn: {
    float: "right",
    width: "160px",
    height: "40px",
    padding: theme.spacing(1),
    background: "#00462A",
    color: "#ffffff",
    fontSize: "16px",
    borderRadius: "8px",
  },
  attachBtn: {
    width: "160px",
    height: "56px",
    fontSize: "16px",
    lineHeight: "24px",
    marginRight: "20px",
  },
  card: {
    borderRadius: "8px",
    boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.1)",
    padding: "32px 30px",
  },
  commentCard: {
    width: "880px",
    height: "160px",
    marginBottom: "40px",
    padding: "16px",
  },
  table: {
    width: "880px",
    marginTop: "40px",
    borderRadius: "8px",
  },
  mainRow: {
    backgroundColor: "#F2F2F2",
    border: "none",
    paddingInline: 0,
  },
  subRow: {
    border: "none",
    paddingInline: 0,
    display: "flex",
    justifyContent: "space-between",
  },
  cancelBtn: {
    width: "70px",
    height: "32px",
    backgroundColor: "#ffffff",
    boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.2)",
    borderRadius: "8px",
    marginLeft: "20px",
  },
  confirmBtn: {
    width: "70px",
    height: "32px",
    backgroundColor: "#00462A",
    boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.2)",
    borderRadius: "8px",
    marginLeft: "8px",
  },
}));

export default useStyles;
