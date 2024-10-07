import React from "react";
import FilteredAllNotesButton from "./FilteredAllNotesButton";
import FilteredActiveNotesButton from "./FilteredActiveNotesButton";
import FilteredArchivedNotesButton from "./FilteredArchivedNotesButton";
import SearchInput from "./SearchInput";

function FilteredListAction({ onFilteredAll, onFilteredActive, onFilteredArchive, onSearch }) {
  return (
    <div className="filtered_list-action">
      <div className="filtered_list-buttons">
        <div className="filtered_all-notes-button">
          <FilteredAllNotesButton onFilteredAll={onFilteredAll} />
        </div>
        <div className="filtered_active-notes-button">
          <FilteredActiveNotesButton onFilteredActive={onFilteredActive} />
        </div>
        <div className="filtered_archived-notes-button">
          <FilteredArchivedNotesButton onFilteredArchive={onFilteredArchive} />
        </div>
      </div>
      <div className="filtered_search-bar">
        <SearchInput onSearch={onSearch} />
      </div>
    </div>
  );
}

export default FilteredListAction;
