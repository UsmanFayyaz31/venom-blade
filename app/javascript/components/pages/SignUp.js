import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Col, Row } from "reactstrap";

import { SIGN_IN_PAGE, SIGN_UP_API } from "../../services/constants";
import { getRequest } from "../../services/server";
import Loader from "../../loader/Loader";

const SignUp = () => {
  const history = useHistory();
  const [form, setForm] = useState(null);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    getRequest(SIGN_UP_API).then((res) => {
      var temp = res.data;

      if (res.data.toString().includes("<form")) {
        temp = temp
          .toString()
          .replace('<a href="/users/sign_in">Log in</a><br />', "");

        setForm(temp);
        setLoader(false);
      } else history.push("/");
    });
  }, []);

  return (
    <div className="page-content">
      {loader ? (
        <Loader />
      ) : (
        <Row className="sign-up-form">
          <Col xs={10} sm={4}>
            {form && <div dangerouslySetInnerHTML={{ __html: form }} />}
            <div className="sign-in-container">
              Already have an account <Link to={SIGN_IN_PAGE}>Sign In</Link>
            </div>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default SignUp;
