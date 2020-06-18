const get = async (endpoint) => {
  try {
    const response = await fetch(`${endpoint}`, {
      method: 'GET'
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
  }
};

export const getPokemon = async (name) => {
  try {
    const response = await get(`/get-pokemon?name=${name}`)
    return response;
  } catch (err) {
    return { error: err };
  }
}