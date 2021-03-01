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
  loginBtn: {
    position: "absolute",
    right: "0px",
    bottom: "4px",
    width: "70px",
    height: "32px",
    padding: theme.spacing(1),
  },
  commentCard: {
    width: "880px",
    height: "160px",
    marginBottom: "40px",
  }
}));

export default useStyles;
