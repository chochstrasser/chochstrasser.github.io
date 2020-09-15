import React, { useEffect, useRef, useState } from "react";

const FETCH_HEADERS = {
  GET: {
    method: "GET",
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  POST: {
    method: "POST",
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

const URLS = {
  STOCKS:
    "https://xxcfgsjs9b.execute-api.us-west-2.amazonaws.com/v1/helloworld",
};

const getStocks = async (postData) => {
  try {
    let response = await fetch(URLS.STOCKS, {
      ...FETCH_HEADERS.POST,
      body: JSON.stringify({ postData }),
    });
    let data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

const isAllowedToSearch = () => {
  return sessionStorage.getItem("hotkey");
};

const StockPile = () => {
  const [state, setState] = useState({ allowed: false });

  const inputEl = useRef(null);

  useEffect(() => {
    const allowed = isAllowedToSearch();
    setState({ allowed });
  }, []);

  const onClick = async () => {
    if (!isAllowedToSearch()) return;
    const data = await getStocks({ key: state.inputValue });
    setState((prevState) => ({ ...prevState, ...data }));
  };

  const onSubmit = () => {
    sessionStorage.setItem("hotkey", state.inputValue);
    setState((prevState) => ({ ...prevState, allowed: true }));
    inputEl.current.value = "";
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setState((prevState) => ({ ...prevState, inputValue: value }));
  };

  return (
    <>
      <h1>Stock Pile page</h1>
      <input
        ref={inputEl}
        type="text"
        onChange={handleChange}
        placeholder={
          state.allowed ? "Search a stock symbol" : "Enter key value"
        }
      />
      <button onClick={state.allowed ? onClick : onSubmit} type="button">
        {state.allowed ? "Search" : "Submit"}
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
