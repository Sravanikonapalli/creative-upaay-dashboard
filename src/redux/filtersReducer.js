const SET_FILTERS = "SET_FILTERS";

export const setFilters = (filters) => ({ type: SET_FILTERS, payload: filters });

const initial = {
  search: "",
  category: "All",
  priority: "All"
};

export default function filtersReducer(state = initial, action) {
  switch (action.type) {
    case SET_FILTERS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
