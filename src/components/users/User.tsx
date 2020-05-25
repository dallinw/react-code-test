import React from "react";
import useUserStyles from "./User.styles";
import { IUser } from "../../redux/Interfaces";

const User: React.FunctionComponent<IUser> = ({
  first_name,
  last_name,
  avatar,
}: IUser) => {
  const classes = useUserStyles();
  return (
    <span className={classes.userParent} data-testid="#user">
      <img className={classes.avatar} src={avatar} alt={"avatar"} />
      <span className={classes.name}>
        {first_name} {last_name}
      </span>
    </span>
  );
};

export default User;
