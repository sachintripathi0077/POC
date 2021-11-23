import { POST_FORM_QUESTIONS } from "./actions";

const initialState = { questionsList:[] };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_FORM_QUESTIONS:
      return {
        ...state,
        questionsList: action.payload,
      };

    default:
      return state;
  }
};
export default reducer;