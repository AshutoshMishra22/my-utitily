"use client";

import { ChangeEvent, useState } from "react";
import { fetchSearchResults } from "@/lib/features/HomepageSlice";
import { useAppDispatch } from "@/lib/hooks";
function Homepage() {
  const [state, setState] = useState<Record<string, string>>({ search: "" });
  const dispatch = useAppDispatch();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState({ [`${e.target.name}`]: e.target.value });
  };
  return (
    <div className="flex justify-center gap-3 p-4 bg-red-100">
      <label htmlFor="link-search">search url</label>
      <input
        value={state.search}
        name="search"
        id="link-search"
        onChange={handleChange}
        spellCheck="false"
        autoComplete="off"
        autoCorrect="off"
      />
    </div>
  );
}

export default Homepage;
