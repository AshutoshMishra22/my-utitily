import { ChangeEvent, FC, useEffect, useState } from "react";
import "./Homepage.scss";

type LinkResponseType = Record<string, string | string[]>[];

const Homepage: FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [searchResult, setSearchResult] = useState<LinkResponseType>();
  const baseUrl = process.env.REACT_APP_API_BASE_URL;
  const handleSearchInput = async (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const getAllLink = async () => {
    fetch(`${baseUrl}/getLink`)
      .then((response) => response.json())
      .then((response) => {
        setSearchResult(response);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    inputValue && getAllLink();
  }, [inputValue]);

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
              <a href={result.url as string} target="_blank">
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
