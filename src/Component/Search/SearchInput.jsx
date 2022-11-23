import React, { useState } from "react";
// import { TextField } from "@mui/material";

const SearchInput = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        {/* <TextField
          label="Enter a country Name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            display: "flex",
            flexWrap: "wrap",

            marginLeft: "150px",
            marginTop: "100px",
            width: "250px",
            height: "50px",
            borderRadius: "20",

            backgroundColor: "red",
          }}
        ></TextField> */}

        <input
          type="text"
          value={input}
          placeholder=" &nbsp;  Enter a country Name"
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
            backgroundColor: "#a5887a",
            color: "black",
          }}
        />
      </form>
    </div>
  );
};

export default SearchInput;
