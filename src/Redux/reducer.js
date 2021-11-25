import {
  POST_FORM_QUESTIONS,
  POST_FORM_HEADER,
  INCREMENT_QUESTION_ID,
} from "./actions";

const initialState = { questionsList: [], questionId: 0 };
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
        headerContent: action.payload,
      };
    case INCREMENT_QUESTION_ID:
      return {
        ...state,
        questionId: state.questionId + 1,
      };
    default:
      return state;
  }
};
export default reducer;