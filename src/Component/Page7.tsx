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
    "I understand that participating in a range of physical activities opens opportunities for challenging myself in worthwhile experiences that will contribute to my holistic health and wellbeing.",
    "I am confident that I can enhance my expertise in physical activities and learn from future challenging experienes.",
    "I am aware of movement options and can adapt my actions when interacting in varied physical activity environments.",
    "I find it diffuclt to adapt my movements in different physical activity enviroments.",
    "I continue to engage effectively and effciently in a variety of physical activity environments both individually and with others.",
    "I understand that participating in physical activities will have a positive effect on my holistic health and wellbeing.",
    "I do not apply myself fully when engagged in physical activity.",
    "I can take on different roles when working individually and with others, reflecting on, creating and refining movement in a range of physical activities.",
    "Some physical activity is included in my life pattern.",
    "I do not really understand the importance of physical activity for my health and well-being.",
    "I am successfully engaging in physcial activity in an increasing range of varied enviroments both individually and with others.",
    "I continually seek ways to include physical activitiy in my life pattern.",
];


export default function Page7() {


    const history = useHistory();
    const toPage3OnClick = () => {
        history.push('/Page8');
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