import React, { useEffect, useState } from "react";
import { getRequest } from "../../services/server";

const SignUp = () => {
  const [form, setForm] = useState(null);

  useEffect(() => {
    getRequest("http://127.0.0.1:3000/users/sign_up").then((res) => {
      var temp = res.data;

      temp = temp.toString().replace("/users/sign_in", "/signin");

      setForm(temp);
    });
  }, []);

  return (
    <div className="page-content">
      {form && <div dangerouslySetInnerHTML={{ __html: form }} />}
    </div>
  );
};

export default SignUp;
