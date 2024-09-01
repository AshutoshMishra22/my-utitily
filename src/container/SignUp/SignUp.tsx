import { FC, useState, ChangeEvent, FormEvent, useEffect } from "react";
import {
  FORM_SIGN_UP_EMAIL,
  FORM_SIGN_UP_FULL_NAME,
  FORM_SIGN_UP_PASSWORD,
  FORM_SIGN_UP_RE_TYPE_PASSWORD,
} from "../../constant";
import "./SignUp.scss";
import { useAppDispatch, useAppSelector } from "../../feature/store";
import { postSignUpUser } from "../../feature/asyncThunk";
import { Navigate } from "react-router-dom";

type formInputFieldProp = {
  value: string | number | readonly string[];
  isError: boolean;
};
interface InitialStateInterface {
  [FORM_SIGN_UP_FULL_NAME]: formInputFieldProp;
  [FORM_SIGN_UP_EMAIL]: formInputFieldProp;
  [FORM_SIGN_UP_PASSWORD]: formInputFieldProp;
  [FORM_SIGN_UP_RE_TYPE_PASSWORD]: formInputFieldProp;
}
const initialState: InitialStateInterface = {
  [FORM_SIGN_UP_FULL_NAME]: { value: "", isError: false },
  [FORM_SIGN_UP_EMAIL]: { value: "", isError: false },
  [FORM_SIGN_UP_PASSWORD]: { value: "", isError: false },
  [FORM_SIGN_UP_RE_TYPE_PASSWORD]: { value: "", isError: false },
};

const SignUp: FC = () => {
  const [state, setState] = useState<InitialStateInterface>(initialState);
  const { message } = useAppSelector((state) => state.global);
  const dispatch = useAppDispatch();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: {
        value: e.target.value,
        isError: false,
      } as formInputFieldProp,
    }));
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    if (data[FORM_SIGN_UP_PASSWORD] === data[FORM_SIGN_UP_RE_TYPE_PASSWORD]) {
      const payload = {
        username: data[FORM_SIGN_UP_FULL_NAME],
        email: data[FORM_SIGN_UP_EMAIL],
        password: data[FORM_SIGN_UP_PASSWORD],
      };
      dispatch(postSignUpUser(payload));
    } else {
      setState((prevState) => ({
        ...prevState,
        [FORM_SIGN_UP_PASSWORD]: { value: "", isError: true },
        [FORM_SIGN_UP_RE_TYPE_PASSWORD]: { value: "", isError: true },
      }));
    }
  };

  if (message.type === "SUCCESS") {
    return <Navigate to="/signin" replace />;
  }
  return (
    <form className="signup-form-container" onSubmit={handleSubmit}>
      <label>Full Name *</label>
      <input
        className={`sign-up-form-input${
          state[FORM_SIGN_UP_FULL_NAME].isError ? " error" : ""
        }`}
        type="text"
        name={FORM_SIGN_UP_FULL_NAME}
        onChange={handleChange}
        value={state[FORM_SIGN_UP_FULL_NAME].value}
        placeholder="Enter full name"
        required
      />
      <label>Email *</label>
      <input
        className={`sign-up-form-input${
          state[FORM_SIGN_UP_EMAIL].isError ? " error" : ""
        }`}
        type="email"
        name={FORM_SIGN_UP_EMAIL}
        onChange={handleChange}
        placeholder="Enter email address"
        value={state[FORM_SIGN_UP_EMAIL].value}
        required
      />
      <label>Password *</label>
      <input
        className={`sign-up-form-input${
          state[FORM_SIGN_UP_PASSWORD].isError ? " error" : ""
        }`}
        type="password"
        name={FORM_SIGN_UP_PASSWORD}
        placeholder="Enter password"
        onChange={handleChange}
        value={state[FORM_SIGN_UP_PASSWORD].value}
        required
      />
      <label>Re-Type Password *</label>
      <input
        className={`sign-up-form-input${
          state[FORM_SIGN_UP_RE_TYPE_PASSWORD].isError ? " error" : ""
        }`}
        type="text"
        name={FORM_SIGN_UP_RE_TYPE_PASSWORD}
        placeholder="Re-Enter password"
        onChange={handleChange}
        value={state[FORM_SIGN_UP_RE_TYPE_PASSWORD].value}
        required
      />
      <button type="submit" className="form-signup-submit-btn">
        SignUp
      </button>
    </form>
  );
};
export default SignUp;
