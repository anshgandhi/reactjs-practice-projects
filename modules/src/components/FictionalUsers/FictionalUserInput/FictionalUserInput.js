import React from "react";

const FictionalUserInput = (props) => {
    const formSubmitHandler = event => {
        event.preventDefault();
        const enteredValue = {
            name: event.target.name.value,
            age: event.target.age.value,
            key: Math.random().toString(),
        }
        if (event.target.age.value === "" || event.target.name.value === "") {
            alert("Name/Age cannot be empty !!!");
            return
        }
        else if (event.target.age.value <= 0) {
            alert("Age cannot be < 0 !!!");
            return
        }
        else{
            props.addUserHandler(enteredValue)
        }
    }

    return <form onSubmit={formSubmitHandler}>
        <label >User Name</label>
        <input type="text" name="name"/>
        <label >Age</label>
        <input type="number" name="age"/>
        <button type="submit" >Add Character</button>
    </form>
}

export default FictionalUserInput;