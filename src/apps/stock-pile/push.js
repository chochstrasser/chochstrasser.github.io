import { useEffect, useRef, useState } from 'react';

const FETCH_HEADERS = {
  GET: {
    method: 'GET',
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  POST: {
    method: 'POST',
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

const URLS = {
  STOCKS: 'https://xxcfgsjs9b.execute-api.us-west-2.amazonaws.com/v1/alphavantage',
};

const fetchAndPushStock = async (ticker) => {
  try {
    let response = await fetch(URLS.STOCKS, {
      ...FETCH_HEADERS.POST,
      body: JSON.stringify({
        ticker,
        passphrase: sessionStorage.getItem('hotkey'),
      }),
    });
    let data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const isAllowedToSearch = () => {
  return sessionStorage.getItem('hotkey');
};

const PushPage = () => {
  const [state, setState] = useState({ allowed: false });

  const inputEl = useRef(null);

  useEffect(() => {
    const allowed = isAllowedToSearch();
    setState({ allowed });
  }, []);

  const onClick = async () => {
    if (!isAllowedToSearch()) return;
    const data = await fetchAndPushStock(inputEl.current.value);
    setState((prevState) => ({ ...prevState, ...data }));
  };

  const onSubmit = () => {
    sessionStorage.setItem('hotkey', state.inputValue);
    setState((prevState) => ({ ...prevState, allowed: true }));
    inputEl.current.value = '';
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setState((prevState) => ({ ...prevState, inputValue: value }));
  };

  return (
    <>
      <input ref={inputEl} type="text" onChange={handleChange} placeholder={state.allowed ? 'Enter ticker' : 'Enter passphrase'} />
      <button onClick={state.allowed ? onClick : onSubmit} type="button">
        {state.allowed ? 'Fetch & Push' : 'Submit'}
      </button>
    </>
  );
};

export default PushPage;
