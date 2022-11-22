import React, { useState } from "react";
import { TextField } from "@mui/material";

const SearchInput = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <TextField
          id="outlined-basic"
          label="Enter a country Name"
          variant="outlined"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            textTransform: "none",
            marginLeft: "65px ",
            marginTop: "20px",
          }}
        ></TextField>
      </form>
    </div>
  );
};

export default SearchInput;
