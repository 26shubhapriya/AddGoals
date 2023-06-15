import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
const [enteredValue, setEnteredValue] = useState('');
const [isValid,setIsValid] = useState(true);
const [isTouched, setIsTouched] = useState(false);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length>0){
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
    setIsTouched(true);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    
    if(enteredValue.trim().length === 0){
       setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    
    setEnteredValue('');
    setIsTouched(false);
  };

  

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid':''}`}>
        <label>Course Goal</label>
        <input type="text" value={enteredValue} onChange={goalInputChangeHandler} onBlur={() => setIsTouched(true)}/>
      </div>
      <Button type="submit"  className={!isValid && isTouched ? 'invalid-button' : ''}>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
