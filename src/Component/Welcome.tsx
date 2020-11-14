import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import Starter from './Starter';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Ipla from '../media/Ipla.jpg';

export default function Welcome() {

    const history = useHistory();
    const toQuestionOnClick = () => {
        history.push('/Starter');
    }

    return (
        <Box color="text.primary">
            <img src={Ipla} alt="Ipla" style={{height:"80px", margin: "auto", display: "block", alignItems: "center"}} />
            <Typography variant="h6" align="center" gutterBottom style={{padding: "10px", paddingTop: "20px"}}>Charting Physical Literacy Questionnaire</Typography>
            <Typography variant="body1" gutterBottom style={{padding: "10px"}}> First of all, we appreciate you taking the time to complete this survey. The aim of this survey is to chart your physical literacy status. The questions and statements relate to your demographic information and physical activity experiences. This survey could be finished in approximately 15 minutes.</Typography>
            <Typography variant="body1" gutterBottom style={{padding: "10px"}}> The survey is conducted anonymously and your responses will only be used for academic purposes. Please be assured that the answers you provide will be treated in strict confidence. In addition, there are no “right” or “wrong” answers. We would like to know how far these statements match your personal view. Please do not leave out any questions. Once again, thank you for all your help and contribution to our research!</Typography>
            <Typography variant="body2" style={{padding: "10px"}}> Research and Innovation Committee </Typography>
            <Typography variant="body2" style={{padding: "10px", paddingBottom: "30px"}}> International Physical Literacy Association </Typography>
            <Button variant="contained" color="primary" style={{margin: "auto", display: "block", alignItems: "center"}}
                onClick = {toQuestionOnClick} > I would like to join this survey </Button>
            <p style={{paddingBottom: "30px"}}> </p>
        </Box>
    );
}