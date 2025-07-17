import React, { useReducer } from "react";

const MultipleReducer = () => {
  const initialState = { age: 18 };

  const reducerAge = (age, action) => {
    switch (action.type) {
      case "AGE":
        return { age: age > 18 ? "This is childish" : "This is adult" };

      default:
        return age;
    }
  };

  const [age, dispatchAge] = useReducer(reducerAge, initialState);

  return (
    <div>
      <h2>{age}</h2>
      <button onClick={() => dispatchAge({ type: "AGE" })}>age</button>
    </div>
  );
};

export default MultipleReducer;
