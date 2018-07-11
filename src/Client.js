const makeRequest = (url, type = 'get') => {
  return fetch(url, {
    method: type,
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(checkStatus)
    .then(parseJson)
}

export const getProducts = async (page = 1) => {
  const url = (
    'https://assignment-appstreet.herokuapp.com/api/v1/products?page=' + page
  );
  return await makeRequest(url);
}

export const getProductDetails = async (id) => {
  console.log(id);
  const url = (
    'https://assignment-appstreet.herokuapp.com/api/v1/products/' + id
  );
  console.log(url);
  return await makeRequest(url);
}

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error);
    throw error;
  }
}

const parseJson = (response) => {
  return response.json();
}


