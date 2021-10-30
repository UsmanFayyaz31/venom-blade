import axios from "axios";

export const getRequest = (URL) =>
  new Promise((resolve, reject) => {
    axios
      .get(URL)
      .then(function (response) {
        return resolve({ data: response.data, status: response.status });
      })
      .catch(function (error) {
        return reject(error);
      });
  });
