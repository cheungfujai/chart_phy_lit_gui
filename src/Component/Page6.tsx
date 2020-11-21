import React, { Component, useState } from 'react';
import Box from '@material-ui/core/Box';
import { useHistory } from 'react-router-dom';
import { Button,  } from '@material-ui/core';

import Ipla from '../media/Ipla.jpg';
import RadioQuestionnaireTemplate from './RadioQuestionnaireList/RadioButtonRow';

const columnAttributeList:string[] = [
    "Not at all like me",
    "Not really like me",
    "Neutral",
    "Quite like me",
    "Very much like me"
];


const rowQuestionList:string[]=[
    "I am confident that I will enjoy taking part in physical activity.",
    "I work very hard when engaging in sustain my regular physical activity.",
    "I work hard when taking part in physical activity.",
    "I generally apply myself during physical activity.",
    "I can analyse all aspects of movement that I am involved in, describing stengths and weaknessess and acting on strategies for improvement.",
    "I am motivated to be physically active most days.",
    "I am becoming more aware of and able to adapt to the damands presented by varied physical activity environemnts.",
    "I am certain that engaging in physical acctivity will be rewarding and enhance my self-confidence.",
    "I can work individually and with others, in a range of settings, creating and refining movement sequences in varied physical activities",
    "I seek out opportunities to challenge myself in a range of physical activity environments individually and/or with others",
    "I can evaluate my own and others movements, identifying what is successful and how to make progress towards future targets.",
    "I can identify movements that I am working on and can suggest what I need to improve.",
];


export default function Page6() {


    const history = useHistory();
    const toPage3OnClick = () => {
        history.push('/Page7');
    }
    const [value, setValue] = React.useState<any []>([null,null,null,null,null,null,null,null,null,null,null,null,] as any);
    return (
        <Box color="text.primary" style={{ padding: "20px", }}>
            <img src={Ipla} alt="Ipla" style={{ paddingBottom: "50px", height:"80px", margin: "auto", display: "block", alignItems: "center"}} />
            <RadioQuestionnaireTemplate 
                rowQuestionList={rowQuestionList} 
                columnAttributeList={columnAttributeList}
                value={value}
                setValue={setValue} />
            <Button variant="contained" color="primary" size="large" style={{ margin: "auto", display: "block", alignItems: "center"}}
                onClick = {toPage3OnClick} > Next </Button>
        </Box>

        
    );
}