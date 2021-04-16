import { SET_INIT_QUESTION, SET_CANDIDATE, SET_ANSWER, SET_PROFILE, QuestionAction } from '../../types/store/QuestionAction';
import { QuestionState } from "../../types/store/QuestionStore"


const initialState: QuestionState = {
    question:[],
    answer:[],
    candidate:{
        gender:"",
        age:null,
        measureUnit: 0,
        height:null,
        weight:null,
        nationality:"",
        ethnicity:"",
        maritalStatus:"",
        education:"",
        activity:"",
        otherActivity:"",
        daysActivity:3,
        durationDaysActivity:"",
        sportLevel:"",
        employment:"",
        yearlyFamilyIncome:""
    },
    questionPerPage:12,
    profile:{
        motivation:0,
        confidence:0,
        competence:0,
        knowledge:0,
    }
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
        case SET_PROFILE:
            return {
                ...state,
                profile: action.payload
            }

        default:
            return state;
    }
}

