import React, { useEffect, useState } from "react";
import { getRequest } from "../../services/server";

const SignIn = () => {
  const [form, setForm] = useState(null);

  useEffect(() => {
    getRequest("http://127.0.0.1:3000/users/sign_in").then((res) => {
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
      {form && <div dangerouslySetInnerHTML={{ __html: form }} />}
    </div>
  );
};

export default SignIn;
