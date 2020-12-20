import { Question } from '../../types/store/QuestionStore';
import baseRequest from './base';



const getAllQuestion = async ():Promise<Question[]> => {
    try{
        const result = await baseRequest.get('/question/')
        return result.data;
    }catch(err){
        throw err;
    }
}

export {
    getAllQuestion
}
