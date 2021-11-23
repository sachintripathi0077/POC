
import { POST_FORM_QUESTIONS,POST_FORM_HEADER } from "./actions";

const initialState = { questionsList:[]};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_FORM_QUESTIONS:
      return {
        ...state,
        questionsList: action.payload,
      };
    case POST_FORM_HEADER:
      return {
        ...state,
        headerContent:action.payload,
      };
    default:
      return state;
  }
};
export default reducer;