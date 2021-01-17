import {ICreateCandidateRequest} from '../../types/api/candidate';
import { Profile } from '../../types/store/QuestionStore';
import baseRequest from './base';



const createProfile = async (candidate:ICreateCandidateRequest):Promise<Profile> => {
    try{
        console.log(candidate);
        const result = await baseRequest.post<Profile>('/profile', candidate);
        return result.data;
    }catch(err){
        throw err;
    }
}

export {
    createProfile
}
