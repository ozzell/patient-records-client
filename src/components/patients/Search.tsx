import { useState } from "react";
import { searchPatients } from "../../services/api";
import { Patient } from "./Patient.type";
import { SearchContainer, VisuallyHiddenLabel } from "./Patient.style";

interface SearchProps {
  applySearchResults: (patients: Patient[]) => void;
}

const Search = ({ applySearchResults }: SearchProps) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchedPatients = await searchPatients(query);
    applySearchResults(searchedPatients);
  };

  return (
    <SearchContainer onSubmit={handleSearch}>
      <VisuallyHiddenLabel id="search-label">
        Search patients
      </VisuallyHiddenLabel>
      <input
        id="search-input"
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search patients..."
        aria-labelledby="search-label"
      />
      <input type="submit" value="Search" aria-label="Search patients" />
    </SearchContainer>
  );
};

export default Search;
