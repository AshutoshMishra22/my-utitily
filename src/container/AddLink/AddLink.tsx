import { ChangeEvent, FC, useEffect, useState } from "react";
import "./AddLink.scss";
import { FORM_ADD_LINK_INPUT_NAME, FORM_ADD_TAG_INPUT } from "../../constant";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../feature/store";
import { postDataApi } from "../../feature/slices/HomepageSlice";

interface AddLinkProptype {}

const AddLink: FC = (props: AddLinkProptype) => {
  const [state, setState] = useState<Record<string, string>>({
    [FORM_ADD_LINK_INPUT_NAME]: "",
    [FORM_ADD_TAG_INPUT]: "",
  });
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
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
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
      <input
        name={FORM_ADD_TAG_INPUT}
        value={state[FORM_ADD_TAG_INPUT]}
        onChange={handleChange}
        className="form-input"
        autoComplete="off"
        spellCheck="false"
      />
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
