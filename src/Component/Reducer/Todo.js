import React, { useReducer } from "react";

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "changed_name":
      return {
        ...state,
        form: { ...state.form, name: action.nextname }
      };

    case "INCREMENT":
      return {
        ...state,
        form: { ...state.form, age: state.form.age + 1 }
      };

    case "DECREMENT":
      return {
        ...state,
        form: { ...state.form, age: state.form.age - 1 }
      };

    case "ADDED":
      return {
        ...state,
        list: [
          ...state.list,
          { id: Date.now(), name: state.form.name, age: state.form.age }
        ]
      };

    case "DELETE":
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.payload)
      };

    default:
      return state;
  }
};

// Initial state
const initialState = {
  form: { name: "Taylor", age: 42 },
  list: []
};

const Todo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: "changed_name",
      nextname: e.target.value
    });
  };

  const handleDelete = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  return (
    <div>
      <input
        placeholder="Enter the name"
        value={state.form.name}
        onChange={handleChange}
      />
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "ADDED" })}>Add to List</button>

      <h2>
        {state.form.name}, {state.form.age}
      </h2>

      <h3>Added Names:</h3>
      <ul>
        {state.list.map((item) => (
          <li key={item.id}>
            {item.name}, Age: {item.age}
            <button
              onClick={() => handleDelete(item.id)}
              style={{ marginLeft: "10px", color: "red" }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
