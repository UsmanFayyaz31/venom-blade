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

export const postRequest = (URL, data) =>
  new Promise((resolve, reject) => {
    // var token = "";

    // if (localStorage.getItem("isRememberMe") === "true") {
    //   token = "Bearer " + localStorage.getItem("t");
    // } else if (localStorage.getItem("isRememberMe") === "false") {
    //   token = "Bearer " + sessionStorage.getItem("t");
    // }

    axios
      .post(URL, data, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        return resolve({
          data: response.data,
          status: response.status,
          headers: response.headers,
        });
      })
      .catch((error) => {
        return reject(error.response);
      });
  });
