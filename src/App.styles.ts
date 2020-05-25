import { makeStyles } from "@material-ui/styles";

export const useAppStyles = makeStyles(() => ({
  body: {
    position: "absolute",
    left: "0px",
    top: "0px",
    width: "100%",
    height: "100%",
    zIndex: 999,
  },
  hide: {
    opacity: 0.0,
    transition: "opacity 1.5s",
  },
  show: {
    opacity: 1.0,
    transition: "opacity 3s",
  },
}));

export default useAppStyles;
