import React, { Children, Component, useState ,useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import env from 'react-dotenv';
import Box from '@material-ui/core/Box';

import RadioQuestionnaireTemplate from './RadioQuestionnaireTemplate';
import ChartPhyButton from '../ChartPhyButton';

import { setAnswer } from '../../store/actions/QuestionActions';
import { useHistory } from 'react-router-dom';
import { RootState } from '../../store/reducer';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Button, Typography } from '@material-ui/core';
import { route, routes } from '../../App';
import ProgressBar from '../ProgressBar';

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
    const mode = env.MODE

    const {question,answer,questionPerPage} = useSelector((state: RootState) => state.question);

    const [page , setPage] = useState(0);

    const getBeginIndex = (p:number) => p * questionPerPage;
    const getEndIndex = (p:number) => Math.min((p + 1) * questionPerPage,question.length);

    let begin:number = getBeginIndex(page);
    let end:number = getEndIndex(page);
    const rowQuestionList:string[] = question.slice(begin,end).map((item)=>item.title);
    const [value, setValue] = React.useState<any []>(answer.slice(begin,end));
    const [progress, setProgress] = React.useState<number>(50);


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
        setProgress(progress + ((type==="next") ? 10:-10))
        if( type==="previous" && page === 0  ){
            history.push(route[Math.max(routes['/Page4'],0)]);
        }
        if( type==="next" && end === question.length){
            history.push(route[Math.min(globalPage+1,routes['/PageEnd'])]);
        }

    }

    const DEBUG_FillAllAnswer = () => {
        const a  = [...Array(60)].map((value, index)=>{ return 1 });
        dispatch(setAnswer(a)); 
        console.log(a);
        setValue(a.slice(begin,end)); 
    }
   
    return (
        <Container maxWidth="lg">
            <ProgressBar value={progress}/>

            <Box display={mode === "staging" ? "block" : "none"}>
                <Button onClick={DEBUG_FillAllAnswer} variant="outlined" color="primary" size="small" > Fill </Button>
                <h3>{answer}</h3>
            </Box>

            <RadioQuestionnaireTemplate 
                rowQuestionList={rowQuestionList} 
                columnAttributeList={columnAttributeList}
                value={value}
                setValue={setValue} />

            {/* <h1>Page : {page}</h1>
            <h1>Begin: {begin}   End:{end}</h1>
            <h3>{answer}</h3> */}

            <div style={{width:"100%"}}>
                <Button 
                    variant="outlined" color="primary" size="small" 
                    style={{float:"left", marginTop: "32px", marginBottom: "64px", minWidth: "160px", display: "block", alignItems: "center"}}
                    onClick = {()=>onPageChange("previous")} > 
                    Previous 
                </Button>
                <Button 
                    variant="outlined" color="primary" size="small" 
                    style={{float:"right", marginTop: "32px", marginBottom: "64px", minWidth: "160px", display: "block", alignItems: "center"}}
                    onClick = {()=>onPageChange("next")} > 
                    Next 
                </Button>
            </div>

            <Typography variant="caption" display="block" style={{marginTop: "-48px", float:"left", clear:"both", textAlign:"center",width:"100%"}} >
                Powered by The Chinese University of Hong Kong 2021 
			</Typography>
        </Container>
 
    ) ;

} 

export default RadioQuestionnairePage;