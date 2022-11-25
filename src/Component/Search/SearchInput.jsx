import React, { useState } from "react";
const SearchInput = ({ onSearch }) => {
  const [input, setInput] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    onSearch(input);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={input}
          placeholder=" &nbsp;  Enter a country Name..."
          onChange={(e) => setInput(e.target.value)}
          style={{
            width: "280px",
            height: "50px",
            display: "flex",
            flexWrap: "wrap",
            margin: "auto",
            borderRadius: "20px",
            fontSize: "22px",

            border: "none",
            outline: "none",
            marginTop: "30px",
            backgroundColor: "gray",
            color: "white",
          }}
        />
      </form>
    </div>
  );
};

export default SearchInput;
