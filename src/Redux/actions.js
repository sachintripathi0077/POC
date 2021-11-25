
export const POST_FORM_QUESTIONS='POST_FORM_QUESTIONS';
export const POST_FORM_HEADER='POST_FORM_HEADER';
export const INCREMENT_QUESTION_ID='INCREMENT_QUESTION_ID';

export const postFormQuestions= (payload)=>{
    return {
        type:POST_FORM_QUESTIONS,
        payload
    }
}

export const postFormHeader= (payload)=>{
    return {
        type:POST_FORM_HEADER,
        payload
    }
}
export const incrementQuestionId= ()=>{
    return {
        type:INCREMENT_QUESTION_ID,
    }
}