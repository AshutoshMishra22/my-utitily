import { ChangeEvent, FC, useEffect, useState } from "react";
import "./AddLink.scss";
import {
  FORM_ADD_AUTHOR_INPUT,
  FORM_ADD_LINK_INPUT_NAME,
  FORM_ADD_TAG_INPUT,
} from "../../constant";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../feature/store";
import { postDataApi } from "../../feature/slices/HomepageSlice";

interface InitialStateInterface {
  [FORM_ADD_LINK_INPUT_NAME]: string;
  [FORM_ADD_TAG_INPUT]: string;
  [FORM_ADD_AUTHOR_INPUT]: boolean;
}
const initialState: InitialStateInterface = {
  [FORM_ADD_LINK_INPUT_NAME]: "",
  [FORM_ADD_TAG_INPUT]: "",
  [FORM_ADD_AUTHOR_INPUT]: true,
};
const AddLink: FC = () => {
  const [state, setState] = useState<InitialStateInterface>(initialState);
  const dispatch = useDispatch<AppDispatch>();

  const getClipboard = async () => {
    try {
      if (!navigator.clipboard) {
        throw new Error("Clipboard API not supported");
      }
      const text = await navigator.clipboard.readText();
      text &&
        setState((prevState) => ({
          ...prevState,
          [FORM_ADD_LINK_INPUT_NAME]: text,
        }));
    } catch (error) {
      console.error("Failed to read clipboard contents:", error);
    }
  };
  useEffect(() => {
    getClipboard();
  }, []);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setState((prevState) => ({
      ...prevState,
      [e.target.name]:
        e.target[e.target.name === FORM_ADD_AUTHOR_INPUT ? "checked" : "value"],
    }));

  const handleSubmit = () => {
    const body = JSON.stringify({
      author: "anonymous",
      url: state[FORM_ADD_LINK_INPUT_NAME],
      id: Math.random(),
      tags: state[FORM_ADD_TAG_INPUT].split(",").map((tag) =>
        tag.trim().toLowerCase()
      ),
    });
    dispatch(postDataApi(body));
    setState(initialState);
  };
  return (
    <section className="form-container">
      <label htmlFor={FORM_ADD_LINK_INPUT_NAME}>URL/Link</label>
      <input
        name={FORM_ADD_LINK_INPUT_NAME}
        id={FORM_ADD_LINK_INPUT_NAME}
        value={state[FORM_ADD_LINK_INPUT_NAME]}
        onChange={handleChange}
        className="form-input"
        autoComplete="off"
        spellCheck="false"
        autoFocus
      />
      <label htmlFor={FORM_ADD_TAG_INPUT}>Tags/Keywords</label>
      <input
        name={FORM_ADD_TAG_INPUT}
        value={state[FORM_ADD_TAG_INPUT]}
        onChange={handleChange}
        className="form-input"
        autoComplete="off"
        spellCheck="false"
      />
      <section>
        <input
          type="checkbox"
          name={FORM_ADD_AUTHOR_INPUT}
          checked={state[FORM_ADD_AUTHOR_INPUT]}
          onChange={handleChange}
          disabled
        />
        <label htmlFor={FORM_ADD_AUTHOR_INPUT}>be anonymous</label>
      </section>
      <button
        className="form-submit-btn"
        disabled={!state[FORM_ADD_LINK_INPUT_NAME].length}
        onClick={handleSubmit}
      >
        Submit
      </button>
    </section>
  );
};

export default AddLink;
