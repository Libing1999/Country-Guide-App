import React, { useEffect, useState } from "react";
import SearchInput from "../Search/SearchInput";
import { apiURL } from "../utility/Api";
// import { Button } from "@mui/material";

const AllCountries = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const getAllCountries = async () => {
    try {
      const res = await fetch(`${apiURL}/all`);
      if (!res.ok) throw new Error("Something went wrong");
      const data = await res.json();

      setCountries(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  const getCountryByName = async (countryName) => {
    try {
      const res = await fetch(`${apiURL}/name/${countryName}`);

      if (!res.ok) throw new Error("Not found any country");
      const data = await res.json();

      setCountries(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  return (
    <div display="flex" flex-wrap="wrap">
      <SearchInput onSearch={getCountryByName} />
      {/* <Button onClick={getCountryByName} variant="contained">
        Search
      </Button> */}
      {isLoading && !error && <h4>Loading...</h4>}
      {error && !isLoading && <h4>{error}</h4>}

      {countries?.map((country) => (
        <div>
          <h2>{country.name.common}</h2>
          <img src={country.flags.png} alt="" />

          <h4>population:{country.population}</h4>
          <h4>capital:{country.capital}</h4>
          {/* <h4>currency:{country.currency}</h4> */}
          {/* <h4>languages:{country.languages}</h4> } */}

          <h4>region:{country.region}</h4>
          <h4>subregion:{country.subregion}</h4>
        </div>
      ))}
    </div>
  );
};

export default AllCountries;
