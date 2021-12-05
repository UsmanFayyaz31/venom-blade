import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";

import { SIGN_IN_API, SIGN_UP_PAGE } from "../../services/constants";
import { getRequest } from "../../services/server";
import Loader from "../../loader/Loader";

const SignIn = () => {
  const [form, setForm] = useState(null);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    getRequest(SIGN_IN_API).then((res) => {
      var temp = res.data;

      temp = temp
        .toString()
        .replace(
          '<a href="/users/password/new">Forgot your password?</a><br />',
          ""
        );

      temp = temp.replace('<a href="/users/sign_up">Sign up</a><br />', "");

      setForm(temp);
      setLoader(false);
    });
  }, []);

  return (
    <div className="page-content">
      {loader ? (
        <Loader />
      ) : (
        <Row className="sign-in-form">
          <Col xs={10} sm={4}>
            {form && <div dangerouslySetInnerHTML={{ __html: form }} />}
            <div className="sign-in-container">
              Do not have an account <Link to={SIGN_UP_PAGE}>Sign Up</Link>
            </div>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default SignIn;
