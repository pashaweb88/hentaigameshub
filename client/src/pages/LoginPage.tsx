import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { fetchAuth } from "../store/action-creator/auth";
import { ILoginForm } from "../types/data";

export const LoginPage: React.FC = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState<ILoginForm>({ login: "", password: "" });

  const changHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const loginHandler = () => {
    dispatch(fetchAuth(form));
  };
  return (
    <div>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-6">
            <div>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label text-light"
                >
                  Login
                </label>
                <input
                  onChange={changHandler}
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  name="login"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputPassword1"
                  className="form-label text-light"
                >
                  Password
                </label>
                <input
                  onChange={changHandler}
                  name="password"
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <button className="btn btn-primary" onClick={loginHandler}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
