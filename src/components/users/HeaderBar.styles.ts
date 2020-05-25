import { makeStyles } from "@material-ui/styles";
import Theme from "../../themes";
import ViewConstants from "./ViewConstants";

export const useHeaderBarStyles = makeStyles(() => ({
  header: {
    width: "100%",
    height: ViewConstants.HEADER_SIZE,
    backgroundColor: Theme.colors.offWhite,
    font: Theme.type.heading,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: Theme.colors.headerShadow,
    position: "relative",
    zIndex: 1,
  },
}));

export default useHeaderBarStyles;
