import React from "react";
// import { Box } from "@mui/system";
import SearchInput from "../Search/SearchInput";
import Heading from "../Text/Heading";
import { apiURL } from "../utility/Api";
// import ClickButton from "../access/ClickButton";
const Card = () => {
  // const getCountryByName = async (countryName) => {
  //   try {
  //     const res = await fetch("${apiURL}/name/${countryName}");

  //     if (!res.ok) throw new Error("Not found any country");
  //     const data = await res.json();
  //     setCountries(data);
  //     setIsLoading(false);
  //   } catch (error) {
  //     setIsLoading(false);
  //     setError(error.message);
  //   }
  // };
  return (
    <div>
      {/* <Box
        opacity={0.2}
        margin={"auto"}
        mt={10}
        maxWidth={500}
        height={500}
        borderRadius={5}
        boxShadow={"5px 5px 10px 5px gray"}
      > */}
      <Heading />
      <SearchInput />
      {/* <ClickButton /> */}
      {/* </Box> */}
    </div>
  );
};

export default Card;
