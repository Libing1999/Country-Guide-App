import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
// import DenseAppBar from "../headsection/DenseAppBar";
import SearchInput from "../Search/SearchInput";
import { apiURL } from "../utility/Api";

const AllCountries = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

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
      const res = await fetch(`${apiURL}/name/${countryName}?fullText=true`);

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
    // getCountryByName();
    getAllCountries();
  }, []);

  return (
    <div>
      <Container
        sx={{
          height: "700px",
          width: "600px",
          backgroundColor: "gray",
          borderRadius: "50px",
          border: "5px solid rgba(255, 255, 255, 0.18)",
          boxShadow: "5px 18px 32px 10px rgba(255,255,255, 0.5)",
        }}
      >
        {/* <DenseAppBar /> */}

        <SearchInput onSearch={getCountryByName} />

        {isLoading && !error && (
          <h2
            style={{
              color: "black",
              fontSize: "20px",
              marginLeft: "10em",
              marginTop: "-.235em",
            }}
          >
            Loading...
          </h2>
        )}
        {error && !isLoading && (
          <h4
            style={{
              color: "red",
              fontSize: "22px",
              marginLeft: "7em",
              marginTop: "0em",
            }}
          >
            {error}
          </h4>
        )}

        {countries.map((country) => (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              margin: "auto",
              marginTop: "-40px",
            }}
          >
            <div>
              <h2
                style={{
                  textAlign: "center",
                  fontSize: "35px",
                  // letterSpacing: "2px",
                  marginLeft: "3em",
                  textDecoration: "underline",
                }}
              >
                {country.name.common}
              </h2>
              <img
                src={country.flags.png}
                alt=""
                style={{ marginLeft: "6em", height: "180px", width: "330px" }}
              />
              <div style={{ lineHeight: "2vh", paddingLeft: "6em" }}>
                <h4
                  style={{
                    fontSize: "25px",
                    color: "black",
                  }}
                >
                  Capital &nbsp; &nbsp; &nbsp; &nbsp;:
                  <span style={{ color: "white" }}> {country.capital}</span>
                </h4>
                <h4
                  style={{
                    fontSize: "25px",
                    color: "black",
                  }}
                >
                  Population :
                  <span style={{ color: "white" }}> {country.population}</span>
                </h4>
                <h4
                  style={{
                    fontSize: "25px",
                    color: "black",
                  }}
                >
                  Continent &nbsp;&nbsp;:
                  <span style={{ color: "white" }}> {country.continents} </span>
                </h4>
                <h4
                  style={{
                    fontSize: "25px",
                    color: "black",
                  }}
                >
                  Area &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;:
                  <span style={{ color: "white" }}>
                    {" "}
                    {country.area} km<sup>2</sup>
                  </span>
                </h4>

                <h4
                  style={{
                    fontSize: "25px",
                    color: "black",
                  }}
                >
                  Subregion&nbsp; &nbsp;:
                  <span style={{ color: "white" }}> {country.subregion}</span>
                </h4>
              </div>
              {/* <h4>currency:{country.currencies.name}</h4> */}
              {/* <h4>languages:{country.languages}</h4> */}
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default AllCountries;
