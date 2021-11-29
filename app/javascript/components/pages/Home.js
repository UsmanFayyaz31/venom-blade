import React, { useEffect, useState } from "react";

import Slider from "../home/Slider";
import CategoryDisplayForHome from "../home/CategoryDisplayForHome";
import { getRequest, postRequest } from "../../services/server";
import { HOMEPAGE_API } from "../../services/constants";
import Loader from "../../loader/Loader";

const Home = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getRequest(HOMEPAGE_API)
      .then((res) => {
        console.log("result", res);
        if (res.status === 200) {
          setData(res.data);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  return (
    <div className="page-content home">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Slider />
          <h1 className="category-label">Browse our popular categories</h1>

          {data &&
            data.map((val, idx) => {
              return <CategoryDisplayForHome data={val} key={idx} />;
            })}
        </>
      )}
    </div>
  );
};

export default Home;
