import React, { Children, Component, useState ,useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@material-ui/core/Box';

import RadioQuestionnaireTemplate from './RadioQuestionnaireTemplate';
import ChartPhyButton from '../ChartPhyButton';


import { setAnswer } from '../../store/actions/QuestionActions';
import { useHistory } from 'react-router-dom';
import { RootState } from '../../store/reducer';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import {route} from  '../../App';


const columnAttributeList:string[] = [
    "Not at all like me",
    "Not really like me",
    "Neutral",
    "Quite like me",
    "Very much like me"
];

/// page5
const globalPage = 5;

const RadioQuestionnairePage  = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const {question,answer,questionPerPage} = useSelector((state: RootState) => state.question);

    const [page , setPage] = useState(0);

    const getBeginIndex = (p:number) => p * questionPerPage;
    const getEndIndex = (p:number) => Math.min((p + 1) * questionPerPage,question.length);

    let begin:number = getBeginIndex(page);
    let end:number = getEndIndex(page);
    const rowQuestionList:string[] = question.slice(begin,end).map((item)=>item.title);
    const [value, setValue] = React.useState<any []>(answer.slice(begin,end));


    const onPageStateChange = (pageNumber:number) =>{
        /// assign page number
        setPage(pageNumber); 

        /// get paged answer for init state
        let begin:number = getBeginIndex(pageNumber)
        let end:number = getEndIndex(pageNumber)
        setValue(answer.slice(begin,end)); 
    }

    const onPageChange = (type:"next"|"previous") => {
        /// arr.splice(startIndex, length, ...replacedArray)
        answer.splice(begin,value.length , ...value);
        /// redux save answer to store
        dispatch(setAnswer(answer)); 

        const nextPage = (type==="next") ? page+1:page-1;
        onPageStateChange(nextPage);
        console.log(nextPage);
        if( type==="previous" && page === 0  ){
            history.push(route[Math.max(globalPage-1,0)]);
        }
        if( type==="next" && end === question.length){
            ///TODO add alert for user for final checking 
            history.push(route[Math.min(globalPage+1,route.length)]);
        }

    }

    return (
        <Box color="text.primary" style={{ padding: "20px", }}>
            <RadioQuestionnaireTemplate 
                rowQuestionList={rowQuestionList} 
                columnAttributeList={columnAttributeList}
                value={value}
                setValue={setValue} />

            <h1>Page : {page}</h1>
            <h1>Begin: {begin}   End:{end}</h1>
            <h3>{answer}</h3>

            <div style={{flexGrow: 1,display:"flex"}}>
            <Grid item xs={6}>
            <Button variant="contained" color="primary" size="large" style={{ margin: "auto", display: "block", alignItems: "center"}}
            onClick = {()=>onPageChange("previous")} > Previous 
            </Button>
            </Grid>
            <Grid item xs={6}>
            <Button variant="contained" color="primary" size="large" style={{ margin: "auto", display: "block", alignItems: "center"}}
            onClick = {()=>onPageChange("next")} > Next 
            </Button>
             </Grid>
            </div>

        </Box>
 
    ) ;

} 

export default RadioQuestionnairePage;