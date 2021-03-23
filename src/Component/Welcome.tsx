import React, { Component, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from 'react-redux';
import {  Question } from '../types/store/QuestionStore'
import { initQuestionAndAnswer } from '../store/actions/QuestionActions';
import ChartPhyButtonGroup from './ChartPhyButton';

import { getAllQuestion } from '../functions/api/question';
import { routes, route } from '../App';

export default function Welcome() {

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        /// [GET] /api/question
        const fetchData = async () =>{
            try{
                const question:Question[] = await getAllQuestion();
                // const question:Question[] = exampleQuestion;
                console.log("Received Question as below: ");
                console.log(question);
                dispatch(initQuestionAndAnswer(question));       
            }catch(err){
                console.log("fetching issue");
                console.log(err);
            }
        }
        fetchData();
    },[dispatch]);
    
    const nextPage = () => {
        history.push(route[routes['/Starter']]);
    }

    return (
            <Box >
                <Typography variant="h6" align="center" gutterBottom style={{ padding: "10px", paddingTop: "20px" }}>Charting Physical Literacy Questionnaire</Typography>
                <Typography variant="body1" gutterBottom style={{ padding: "10px" }}> First of all, we appreciate you taking the time to complete this survey. The aim of this survey is to chart your physical literacy status. The questions and statements relate to your demographic information and physical activity experiences. This survey could be finished in approximately 15 minutes.</Typography>
                <Typography variant="body1" gutterBottom style={{ padding: "10px" }}> The survey is conducted anonymously and your responses will only be used for academic purposes. Please be assured that the answers you provide will be treated in strict confidence. In addition, there are no “right” or “wrong” answers. We would like to know how far these statements match your personal view. Please do not leave out any questions. Once again, thank you for all your help and contribution to our research!</Typography>
                <Typography variant="body2" style={{ padding: "10px" }}> Research and Innovation Committee </Typography>
                <Typography variant="body2" style={{ padding: "10px", paddingBottom: "30px" }}> International Physical Literacy Association </Typography>
                <ChartPhyButtonGroup type="next" page={routes['/']} onClick={nextPage}/>
            </Box>
    );
}