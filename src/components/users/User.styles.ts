import { makeStyles } from "@material-ui/styles";
import Theme from "../../themes";

export const useUserStyles = makeStyles(() => ({
  userParent: {
    backgroundColor: Theme.colors.userBackground,
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: `${Theme.spacing.space16} 0px`,
    borderBottom: `1px solid ${Theme.colors.lightGray}`,
  },
  avatar: {
    width: "64px",
    height: "64px",
    borderRadius: "50%",
  },
  name: {
    font: Theme.type.body,
    marginLeft: Theme.spacing.space24,
    color: Theme.colors.primaryText,
  },
}));

export default useUserStyles;
