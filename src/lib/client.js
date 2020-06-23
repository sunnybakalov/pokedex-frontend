const POKE_API_HOST = "http://localhost:4241";

const get = async (endpoint) => {
  try {
    const response = await fetch(`${POKE_API_HOST}/api${endpoint}`, {
      method: 'GET',
      'Content-Type': 'application/json'
    });
    return response.json();
  } catch (err) {
    return err;
  }
};

const post = async (endpoint, payload) => {
  try {
    const response = await fetch(`${endpoint}`, {
      method: 'POST',
      body: JSON.stringify(payload)
    });
    return response.json();
  } catch (err) {
    return err;
  };
};

export const searchPokemon = async (name) => {
  try {
    const response = await get(`/search-pokemon?name=${name}`);
    console.log("RES", response);
    return response;
  } catch (err) {
    return { error: err };
  };
};

export const fetchAll = async () => {
  try {
    const response = await get(`/fetch-all`);
    // console.log("RES", response);
    return response;  
  } catch (err) {
    return { error: err };
  };
};