import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { SIGN_IN_API, SIGN_UP_PAGE } from "../../services/constants";
import { getRequest } from "../../services/server";

const SignIn = () => {
  const [form, setForm] = useState(null);

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

      console.log("debugging", temp);

      setForm(temp);
    });
  }, []);

  return (
    <div className="page-content">
      <Row className="sign-in-form">
        <Col xs={4}>
          {form && <div dangerouslySetInnerHTML={{ __html: form }} />}
          <div className="sign-in-container">
            Do not have an account <Link to={SIGN_UP_PAGE}>Sign Up</Link>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SignIn;
