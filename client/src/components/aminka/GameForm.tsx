import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { usedTypedSelector } from "../../hooks/useTypedSelector";
import { gamesUpload } from "../../store/action-creator/games";
import { persFetch } from "../../store/action-creator/pers";
import { IGameForm } from "../../types/data";

interface InputFieldProps {
  handler(e: React.ChangeEvent<HTMLInputElement>): void;
  name: string;
  placeholder: string;
}
interface SelectFieldProps {
  pers: any[];
  handler(e: React.FormEvent<HTMLSelectElement>): void;
}

export const GameForm: React.FC = () => {
  const dispatch = useDispatch();
  const { pers } = usedTypedSelector((state) => state.pers);

  const [form, setForm] = useState<IGameForm>({
    name: "",
    category: "",
    icon: "",
    girl: "",
    weburl: "",
    apkurl: "",
  });

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const selectHandler = (event: React.FormEvent<HTMLSelectElement>) => {
    setForm({ ...form, [event.currentTarget.name]: event.currentTarget.value });
  };

  const addHandler = () => {
    dispatch(gamesUpload(form));
  };
  useEffect(() => {
    if (pers.length === 0) {
      dispatch(persFetch());
    }
  }, [dispatch, pers.length]);
  return (
    <div className="container">
      <h2 className="text-light">Game upload</h2>
      <InputField
        handler={changeHandler}
        placeholder="App name.."
        name="name"
      />
      <InputField
        handler={changeHandler}
        placeholder="Category.."
        name="category"
      />
      <InputField
        handler={changeHandler}
        placeholder="Icon url.."
        name="icon"
      />
      <InputField
        handler={changeHandler}
        placeholder="Web url.."
        name="weburl"
      />
      <InputField
        handler={changeHandler}
        placeholder="Apk url.."
        name="apkurl"
      />
      <SelectField pers={pers} handler={selectHandler} />

      <div className="row">
        <div className="col-1 ">
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

const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  name,
  handler,
}) => {
  return (
    <div className="row" style={{ marginBottom: "1rem" }}>
      <div className="col-6">
        <input
          onSelect={handler}
          name={name}
          placeholder={placeholder}
          className="form-control"
        />
      </div>
    </div>
  );
};

const SelectField: React.FC<SelectFieldProps> = ({ pers, handler }) => {
  return (
    <div className="row" style={{ marginBottom: "1rem" }}>
      <div className="col-6">
        <select
          className="form-control"
          name="girl"
          id="exampleFormControlSelect1"
          onChange={handler}
        >
          <option value={""}>Choose girl...</option>
          {pers.map((el, i) => {
            return (
              <option key={i} value={el._id}>
                {el.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};
