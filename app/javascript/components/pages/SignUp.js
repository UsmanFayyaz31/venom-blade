import React, { useEffect, useState } from "react";
import { SIGN_UP_API } from "../../services/constants";
import { getRequest } from "../../services/server";

const SignUp = () => {
  const [form, setForm] = useState(null);

  useEffect(() => {
    getRequest(SIGN_UP_API).then((res) => {
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
