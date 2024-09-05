import { ChangeEvent, FC, FormEvent, useState } from "react";
import { FORM_SIGN_IN_EMAIL, FORM_SIGN_IN_PASSWORD } from "../../constant";
import "./SignIn.scss";
import { postSignInUser } from "../../feature/asyncThunk";
import { useAppDispatch } from "../../feature/store";

type formInputFieldProp = {
  value: string | number | readonly string[];
  isError: boolean;
};
interface InitialStateInterface {
  [FORM_SIGN_IN_EMAIL]: formInputFieldProp;
  [FORM_SIGN_IN_PASSWORD]: formInputFieldProp;
}
const initialState: InitialStateInterface = {
  [FORM_SIGN_IN_EMAIL]: { value: "", isError: false },
  [FORM_SIGN_IN_PASSWORD]: { value: "", isError: false },
};

const SignIn: FC = () => {
  const [state, setState] = useState<InitialStateInterface>(initialState);
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
    // if (data[FORM_SIGN_UP_PASSWORD] === data[FORM_SIGN_UP_RE_TYPE_PASSWORD]) {
    const payload = {
      email: data[FORM_SIGN_IN_EMAIL],
      password: data[FORM_SIGN_IN_PASSWORD],
    };
    dispatch(postSignInUser(payload));
  };
  return (
    <form className="signin-form-container" onSubmit={handleSubmit}>
      <label>Email</label>
      <input
        className={`sign-in-form-input${
          state[FORM_SIGN_IN_EMAIL].isError ? " error" : ""
        }`}
        type="text"
        name={FORM_SIGN_IN_EMAIL}
        onChange={handleChange}
        value={state[FORM_SIGN_IN_EMAIL].value}
        placeholder="Enter email"
        required
      />
      <label>Password</label>
      <input
        className={`sign-in-form-input${
          state[FORM_SIGN_IN_PASSWORD].isError ? " error" : ""
        }`}
        type="password"
        name={FORM_SIGN_IN_PASSWORD}
        placeholder="Enter password"
        onChange={handleChange}
        value={state[FORM_SIGN_IN_PASSWORD].value}
        required
      />
      <button type="submit" className="form-signin-submit-btn">
        SignIn
      </button>
    </form>
  );
};
export default SignIn;
