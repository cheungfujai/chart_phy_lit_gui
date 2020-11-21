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
    "I am usually at ease engaging in physcial activity in some indoor and outdoor physical activities.",
    "I can appreciate options and respond cratively and imaginatively in challenging physcial activity enviroments.",
    "I comfortable applying movement patterns and more complex skills and techniques to a range of physical activities.",
    "I can describe movements I that I am working on , suggesting where I am being successful, and targets that I coulld work towards in the future.",
    "I am determined to challenge myslef in a range of physcial activity enviroments.",
    "I am confident exploring a range of activities in different settings, with the confidence that I can respond to the demands they make on me.",
    "I want to be physically active because I enjoy it.",
    "I am rarely able to move effectively in different physical activity enviroments.",
    "I want to be physically active regularly because it is important to me.",
    "Physical activity is a secure part of my life pattern.",
    "I take steps to avoid physcial activity.",
    "I can effectively apply complex movement patterns, skills and techniques within challenging physcial activity envrioments.",
];


export default function Page8() {


    const history = useHistory();
    const toPage3OnClick = () => {
        history.push('/Page9');
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