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
import { Container } from '@material-ui/core';

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
        <Container maxWidth="sm">
            <Typography variant="h5" align="left" gutterBottom style={{ padding: "8px"}}>Charting Physical Literacy Questionnaire</Typography>
            <Typography variant="body1" gutterBottom style={{ color:"#4a4a4a", textAlign:"justify", padding: "8px" }}> Dear participant, </Typography>
            <Typography variant="body1" gutterBottom style={{ color:"#4a4a4a", textAlign:"justify", padding: "8px" }}> First of all, we appreciate you taking the time to complete this survey. The aim of this survey is to chart your physical literacy status. The questions and statements relate to your demographic information and physical activity experiences. This survey could be finished in approximately 15 minutes.</Typography>
            <Typography variant="body1" gutterBottom style={{ color:"#4a4a4a", textAlign:"justify", padding: "8px" }}> The survey is conducted anonymously and your responses will only be used for academic purposes. Please be assured that the answers you provide will be treated in strict confidential. In addition, there are no “right” or “wrong” answers. We would like to know how far these statements match your personal view. Please do not leave out any questions. Once again, thank you for all your help and contribution to our research!</Typography>
            <Typography variant="body1" style={{ color:"#4a4a4a", padding: "8px", }}>Kind Regards,</Typography>
            <Typography variant="body1" style={{ color:"#4a4a4a", padding: "8px", }}> 
                Research and Innovation Committee <br/>
                International Physical Literacy Association
            </Typography>

            <ChartPhyButtonGroup type="next" page={routes['/']} onClick={nextPage}/>
        </Container>
    );
}