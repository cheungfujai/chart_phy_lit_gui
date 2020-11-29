import { SET_INIT_QUESTION, SET_CANDIDATE, SET_ANSWER, QuestionAction } from '../../types/store/QuestionAction';
import { QuestionState } from "../../types/store/QuestionStore"


const initialState: QuestionState = {
    question:[],
    answer:[],
    candidate:{
        gender:"null",
        age:null,
        height:null,
        weight:null,
        nationality:"null",
        ethnicity:"null",
        maritalStatus:"null",
        education:"null",
        activity:"null",
        daysActivity:3,
        sportLevel:"null",
        employment:"null",
        yearlyFamilyIncome:"null"
    },
    questionPerPage:12,

}

export default (state = initialState,action :QuestionAction) => {
    switch (action.type) {
        case SET_INIT_QUESTION:
            return {
                ...state,
                question: action.payload
            }
        case SET_CANDIDATE:
            return {
                ...state,
                candidate:action.payload
            }
        case SET_ANSWER:
            return {
                ...state,
                answer: action.payload
            }

        default:
            return state;
    }
}

