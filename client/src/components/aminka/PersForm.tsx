import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { persUpload } from "../../store/action-creator/pers";

export const PersForm: React.FC = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    bannerPath: "",
    posterPath: "",
  });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const addHandler = () => {
    dispatch(persUpload(form));
  };
  return (
    <div className="container">
      <InputField placeholder="Name" name="name" handler={changeHandler} />
      <InputField
        placeholder="Banner url"
        name="bannerPath"
        handler={changeHandler}
      />
      <InputField
        placeholder="Poster url"
        name="posterPath"
        handler={changeHandler}
      />

      <div className="row">
        <div className="col-1 offset-md-3">
          <button
            type="submit"
            onClick={addHandler}
            className="btn btn-primary"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

interface InputFieldProps {
  handler(e: React.ChangeEvent<HTMLInputElement>): void;
  name: string;
  placeholder: string;
}
const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  name,
  handler,
}) => {
  return (
    <div
      className="row justify-content-md-center"
      style={{ marginBottom: "1rem" }}
    >
      <div className="col-6">
        <input
          onChange={handler}
          name={name}
          placeholder={placeholder}
          className="form-control"
        />
      </div>
    </div>
  );
};
