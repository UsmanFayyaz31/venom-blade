import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";

import { SIGN_IN_PAGE, SIGN_UP_API } from "../../services/constants";
import { getRequest } from "../../services/server";

const SignUp = () => {
  const [form, setForm] = useState(null);

  useEffect(() => {
    getRequest(SIGN_UP_API).then((res) => {
      var temp = res.data;

      temp = temp
        .toString()
        .replace('<a href="/users/sign_in">Log in</a><br />', "");

      setForm(temp);
    });
  }, []);

  return (
    <div className="page-content">
      <Row className="sign-up-form">
        <Col xs={4}>
          {form && <div dangerouslySetInnerHTML={{ __html: form }} />}
          <div className="sign-in-container">
            Already have an account <Link to={SIGN_IN_PAGE}>Sign In</Link>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SignUp;
