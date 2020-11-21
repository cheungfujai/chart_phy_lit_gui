import React, { Component, useState } from 'react';
import Box from '@material-ui/core/Box';
import RadioQuestionnaireTemplate from './RadioQuestionnaireList/RadioButtonRow';
import ButtonNext from './ButtonNext';

const columnAttributeList:string[] = [
    "Not at all like me",
    "Not really like me",
    "Neutral",
    "Quite like me",
    "Very much like me"
];


const rowQuestionList:string[]=[
    /* 25 */ "I understand that participating in a range of physical activities opens opportunities for challenging myself in worthwhile experiences that will contribute to my holistic health and wellbeing.",
    /* 26 */ "I am confident that I can enhance my expertise in physical activities and learn from future challenging experienes.",
    /* 27 */ "I am aware of movement options and can adapt my actions when interacting in varied physical activity environments.",
    /* 28 */ "I find it diffuclt to adapt my movements in different physical activity enviroments.",
    /* 29 */ "I continue to engage effectively and effciently in a variety of physical activity environments both individually and with others.",
    /* 30 */ "I understand that participating in physical activities will have a positive effect on my holistic health and wellbeing.",
    /* 31 */ "I do not apply myself fully when engagged in physical activity.",
    /* 32 */ "I can take on different roles when working individually and with others, reflecting on, creating and refining movement in a range of physical activities.",
    /* 33 */ "Some physical activity is included in my life pattern.",
    /* 34 */ "I do not really understand the importance of physical activity for my health and well-being.",
    /* 35 */ "I am successfully engaging in physcial activity in an increasing range of varied enviroments both individually and with others.",
    /* 36 */ "I continually seek ways to include physical activitiy in my life pattern.",
];


export default function Page7() {
    const [value, setValue] = React.useState<any []>([null,null,null,null,null,null,null,null,null,null,null,null,] as any);
    return (
        <Box color="text.primary" style={{ padding: "20px", }}>
            <RadioQuestionnaireTemplate 
                rowQuestionList={rowQuestionList} 
                columnAttributeList={columnAttributeList}
                value={value}
                setValue={setValue} />
            <ButtonNext pageNumber={"/Page8"} />
        </Box>

        
    );
}