import React, { useEffect, useState } from "react";

import Slider from "../home/Slider";
import CategoryDisplayForHome from "../home/CategoryDisplayForHome";
import { getRequest, postRequest } from "../../services/server";
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
