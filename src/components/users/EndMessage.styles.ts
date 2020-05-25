import { makeStyles } from "@material-ui/styles";
import Theme from "../../themes";

export const useEndMessageStyles = makeStyles(() => ({
  parent: {
    backgroundColor: Theme.colors.lightGray,
    marginLeft: "-16px", // negate parent padding
    width: "fill-available",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: `${Theme.spacing.space24} 0px`,
    borderBottom: `1px solid ${Theme.colors.lightGray}`,
  },
  text: {
    font: Theme.type.heading,
  },
}));

export default useEndMessageStyles;
