import { ChangeEvent, FC, useCallback, useEffect, useState } from "react";
import "./Homepage.scss";
import {
  deleteDataApi,
  getAllLinkApi,
  getLinkApi,
} from "../../feature/slices/globalSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../feature/store";
import { debounce } from "../../utils";

const Homepage: FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();
  const { urlList: searchResult } = useSelector(
    (state: RootState) => state.global
  );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const dispatchSearch = useCallback(debounce(dispatch), []);

  const handleSearchInput = async (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    dispatchSearch(getLinkApi(JSON.stringify({ filter: e.target.value })));
  };
  useEffect(() => {
    dispatch(getAllLinkApi());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="container">
      <section className="search-container">
        <input
          value={inputValue}
          id="search-input"
          name="search-input"
          onChange={handleSearchInput}
          autoComplete="off"
          spellCheck="false"
          placeholder="Search by tags or name"
          autoFocus
        />
      </section>
      <section className="result-container">
        <ul className="result-list">
          {searchResult?.map((result) => (
            <li className="result-item" key={`key${result.id}`}>
              <a href={result.url as string} target="_blank" rel="noreferrer">
                <span className="title">{result.author}</span>
                <span className="tag-list">
                  {(result.tags as string[]).join(", ")}
                </span>
              </a>
              <button
                className="result-delete-btn"
                onClick={() => dispatch(deleteDataApi(JSON.stringify(result)))}
                disabled
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Homepage;
