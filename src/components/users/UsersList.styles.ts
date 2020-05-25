import { makeStyles } from "@material-ui/styles";
import Theme from "../../themes";
import ViewConstants from "./ViewConstants";

export const useUsersListStyles = makeStyles(() => ({
  list: {
    maxWidth: "500px",
    maxHeight: `calc(100% - ${ViewConstants.HEADER_SIZE})`,
    overflow: "auto",
    backgroundColor: Theme.colors.userBackground,
    margin: "0px auto",
    padding: `0px 0px 0px ${Theme.spacing.space16}`,
    boxShadow: Theme.colors.listShadow,
  },
}));

export default useUsersListStyles;
