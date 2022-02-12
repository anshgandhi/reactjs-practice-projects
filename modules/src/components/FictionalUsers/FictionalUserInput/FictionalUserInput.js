import React, { Fragment, useRef, useState } from "react";
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import classes from "./FictionalUserInput.module.css";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";

const FictionalUserInput = (props) => {

  // The ref would always have 'current' in props
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const enteredValue = {
      name: event.target.name.value,
      age: event.target.age.value,
      key: Math.random().toString(),
    };
    // gets access to actual DOM element.
    console.log(nameInputRef.current.value);
    if (
      event.target.age.value.trim().length === 0 ||
      event.target.name.value.trim().length === 0
    ) {
      setIsError(true);
      setErrorMessage("Input (Name/Age) cannot be empty !!!");
      return;
    }
    // '+' before variable type casts the variable as Integer.
    // by default, every value from form is returned as String.
    else if (+event.target.age.value <= 0) {
      setIsError(true);
      setErrorMessage("Age cannot be < 0 !!!");
      return;
    } else {
      props.addUserHandler(enteredValue);
      event.target.reset();
    }
  };

  const errorHandler = (event) => {
    setIsError(false);
  }

  return (
    <Fragment>
      {isError && (
        <ErrorModal
          title="An Error occured!"
          message={errorMessage}
          onClick={errorHandler}
          onConfirm={errorHandler}
        ></ErrorModal>
      )}
      <Card className={classes.input}>
        <form onSubmit={formSubmitHandler}>
          <label>User Name</label>
          <input type="text" name="name" ref={nameInputRef}/>
          <label>Age</label>
          <input type="number" name="age" ref={ageInputRef}/>
          {/* <button type="submit" >Add Character</button> */}
          <Button type="submit">Add Character</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default FictionalUserInput;
