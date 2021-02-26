import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  select: {
    width: "340px",
    height: "56px",
  },
  postBtn: {
    position: "absolute",
    top: "0px",
    right: "0px",
    width: "160px",
    height: "40px",
    padding: theme.spacing(1),
    background: "#00462A",
    color: "#ffffff",
    fontSize: "16px",
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
    boxShadow: " 0px 0px 4px rgba(0, 0, 0, 0.1)",
    padding: "32px 30px",
  },
  loginBtn: {
    position: "absolute",
    height: "32px",
    left: "1181px",
    top: "100px",
    padding: theme.spacing(1),
  },
}));

export default useStyles;
