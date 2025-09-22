import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilters } from "../redux/filtersReducer";

export default function FilterBar() {
  const filters = useSelector(s => s.filters);
  const dispatch = useDispatch();

  return (
    <div className="filter-bar">
      <input
        placeholder="Search..."
        value={filters.search}
        onChange={e => dispatch(setFilters({ search: e.target.value }))}
      />
      <select value={filters.category} onChange={e => dispatch(setFilters({ category: e.target.value }))}>
        <option>All</option>
        <option>General</option>
        <option>Work</option>
        <option>Personal</option>
        <option>Urgent</option>
      </select>
      <select value={filters.priority} onChange={e => dispatch(setFilters({ priority: e.target.value }))}>
        <option>All</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>
  );
}
