import Card from "../../UI/Card/Card";
import classes from "./FictionalUserList.module.css";

const FictionalUserList = (props) => {
  const deleteUser = (userId) => (event) => {
    props.deleteUserHandler(userId);
  };

  return (
    <Card className={classes.users}>
      <ul>
        {props.userList.map((user) => (
          <li key={user.key} onClick={(event) => deleteUser(user.key)(event)}>
            {user.name}, age: {user.age}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default FictionalUserList;
