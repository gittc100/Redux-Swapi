import {FETCH_CHARACTERS_START, FETCH_CHARACTERS_SUCCESS, FETCH_CHARACTERS_FAILURE} from "../actions";
const initialState = {
  // Array characters, Boolean fetching, null error.
  characters: [],
  error: null,
  fetching: false
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH_CHARACTERS_START:
      return{
        ...state,
        fetching: true
      };
    case FETCH_CHARACTERS_SUCCESS:
      return{
        ...state,
        error: null,
        fetching: false,
        characters: action.payload
      };
    case FETCH_CHARACTERS_FAILURE:
      return{
        ...state,
        fetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};
