import React, { useState } from "react";
import FormStyle from "./Form.module.css";
import Button from "../UI/Button/Button";
const Form = ({ dataHandler, setIfNoList }) => {
  const [userInput, setUserInput] = useState("");
  const inputHandler = (e) => {
    setUserInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const userData = {
      userInput,
      id: Math.random().toString(),
    };
    dataHandler(userData);
    setIfNoList(true);
    //
    setUserInput("");
  };
  return (
    <>
      <div className={FormStyle.HERO}>
        <form className={FormStyle.form} onSubmit={submitHandler}>
          <div className={FormStyle.inputs}>
            <input
              type="text"
              placeholder="What's on your mind?"
              onChange={inputHandler}
              value={userInput}
            />
          </div>
          <div className={FormStyle.button}>
            <Button>Submit</Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
