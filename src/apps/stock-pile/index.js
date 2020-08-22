import React, { useState } from "react";

const FETCH_HEADERS = {
  GET: {
    method: "GET",
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

const URLS = {
  STOCKS: "https://xxcfgsjs9b.execute-api.us-west-2.amazonaws.com/v1/stocks",
};

const getStocks = async () => {
  try {
    let response = await fetch(URLS.STOCKS, FETCH_HEADERS.GET);
    let data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

const StockPile = () => {
  const [state, setState] = useState();

  const onClick = async () => {
    const data = await getStocks();
    setState(data);
  };

  return (
    <>
      <h1>Stock Pile page</h1>
      <input type="text" placeholder="Search a stock symbol" />
      <button onClick={onClick} type="button">
        Search
      </button>
      {state?.stocks?.map((item) => {
        return (
          <div key={item.symbol}>
            <div>{`${item.name} - ${item.symbol}`}</div>
          </div>
        );
      })}
    </>
  );
};

export default StockPile;
