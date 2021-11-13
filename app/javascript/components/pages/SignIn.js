import React, { useEffect, useState } from "react";
import { SIGN_IN_API } from "../../services/constants";
import { getRequest } from "../../services/server";

const SignIn = () => {
  const [form, setForm] = useState(null);

  useEffect(() => {
    getRequest(SIGN_IN_API).then((res) => {
      var temp = res.data;

      console.log("debugging", res.data);

      temp = temp.toString().replace("/users/sign_up", "/signup");
      temp = temp.replace(
        '<a href="/users/password/new">Forgot your password?</a><br />',
        ""
      );

      setForm(temp);
    });
  }, []);

  return (
    <div className="page-content">
      {console.log("testing", form)}
      {form && <div dangerouslySetInnerHTML={{ __html: form }} />}
    </div>
  );
};

export default SignIn;
