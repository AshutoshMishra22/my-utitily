import { ChangeEvent, FC, useState } from "react";
import "./Homepage.scss";
import { getAllLink } from "../../feature/slices/HomepageSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../feature/store";

const Homepage: FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();
  const { urlList: searchResult } = useSelector(
    (state: RootState) => state.Homepage
  );
  const handleSearchInput = async (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  dispatch(getAllLink());
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
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Homepage;
