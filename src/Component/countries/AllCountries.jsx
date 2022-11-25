import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import SearchInput from "../Search/SearchInput";
import { apiURL } from "../utility/Api";

const AllCountries = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

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
    getCountryByName();
  }, []);

  return (
    <div>
      <Container
        sx={{
          marginTop: ".5em",
          height: "715px",
          width: "600px",
          backgroundColor: "gray",
          borderRadius: "50px",
          border: "5px solid rgba(255, 255, 255, 0.18)",
          boxShadow: "5px 18px 32px 10px rgba(255,255,255, 0.5)",
        }}
      >
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
        {/* {error && !isLoading && (
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
        )} */}

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

                <h4
                  style={{
                    fontSize: "25px",
                    color: "black",
                  }}
                >
                  Currency&nbsp; &nbsp; &nbsp;:{" "}
                  <span style={{ color: "white" }}>
                    {Object.keys(country.currencies)}
                  </span>
                </h4>
                <a href={country.maps.googleMaps} target="_blank">
                  {/* View {country.name.common} map */}
                  <button
                    style={{
                      width: "140px",
                      height: "40px",
                      marginLeft: "100px",
                      marginTop: "-20px",
                      backgroundColor: "#0e55b1",
                      border: "none",
                      color: "white",
                      borderRadius: "10px ",
                      marginBottom: "50px",
                      fontSize: "17px",
                    }}
                  >
                    View Location
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};
export default AllCountries;
