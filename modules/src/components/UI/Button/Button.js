import React from 'react';
import classes from './Button.module.css'

const Button = props => {
  // default type will 'button' just in case type is not defined.
  return (
    <button type={props.type || 'button'} className={classes.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
