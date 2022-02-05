import FictionalUserItem from "../FictionalUserItem/FictionalUserItem";

const FictionalUserList = (props) => {
    return <ul>
        {props.userList.map((user) => (
            <FictionalUserItem key={user.key} dataPoint={user}></FictionalUserItem>
        ))}
    </ul>
}

export default FictionalUserList;