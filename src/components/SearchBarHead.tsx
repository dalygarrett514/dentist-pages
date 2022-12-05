import * as React from "react";
import { SearchBar } from "@yext/search-ui-react";
import { useEffect, useState } from "react";
import {
  HeadlessConfig,
  provideHeadless,
  SandboxEndpoints,
  SearchHeadlessProvider,
  useSearchActions,
} from "@yext/search-headless-react";
const SearchBarHead = () => {
  const headlessConfig: HeadlessConfig = {
    apiKey: "122ed3e710c9cc889a71ce0918071899",
    experienceKey: "dentist-search",
    locale: "en",
    verticalKey: "locations",
    endpoints: SandboxEndpoints,
  };

  const searcher = provideHeadless(headlessConfig);

  const searchActions = useSearchActions();
  const [qTerm, setQTerm] = useState<string | null>(null);

  useEffect(() => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    setQTerm(params.get("query"));
  }, []);
  useEffect(() => {
    if (qTerm) {
      searchActions.setVertical("locations");
      searchActions.setQuery(qTerm);
      searchActions.executeVerticalQuery();
    }
  }, [qTerm]);
  return (
    <>
      <SearchHeadlessProvider searcher={searcher}>
        <div className="w-full">
          <SearchBar hideRecentSearches={true} />
        </div>
      </SearchHeadlessProvider>
    </>
  );
};

export default SearchBarHead;
