import React, { useEffect, useState } from "react";

import Slider from "../home/Slider";
import CategoryDisplayForHome from "../home/CategoryDisplayForHome";
import { getRequest } from "../../services/server";
import { HOMEPAGE_API } from "../../services/constants";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getRequest(HOMEPAGE_API)
      .then((res) => {
        console.log("result", res);
        if (res.status === 200) setData(res.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  useEffect(() => {
    getRequest("http://127.0.0.1:3000/api/v1/current_user")
      .then((res) => {
        console.log("Res", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  return (
    <div className="page-content home">
      <Slider />

      <h1 className="category-label">Browse our popular categories</h1>

      {data &&
        data.map((val, idx) => {
          return <CategoryDisplayForHome data={val} key={idx} />;
        })}
    </div>
  );
};

export default Home;
