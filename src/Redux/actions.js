export const POST_FORM_QUESTIONS='POST_FORM_QUESTIONS';

export const postFormQuestions= (payload)=>{
    return {
        type:POST_FORM_QUESTIONS,
        payload
    }
}