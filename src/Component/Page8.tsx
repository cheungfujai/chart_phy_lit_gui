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
    /* 37 */ "I am usually at ease engaging in physcial activity in some indoor and outdoor physical activities.",
    /* 38 */ "I can appreciate options and respond cratively and imaginatively in challenging physcial activity enviroments.",
    /* 39 */ "I comfortable applying movement patterns and more complex skills and techniques to a range of physical activities.",
    /* 40 */ "I can describe movements I that I am working on , suggesting where I am being successful, and targets that I coulld work towards in the future.",
    /* 41 */ "I am determined to challenge myslef in a range of physcial activity enviroments.",
    /* 42 */ "I am confident exploring a range of activities in different settings, with the confidence that I can respond to the demands they make on me.",
    /* 43 */ "I want to be physically active because I enjoy it.",
    /* 44 */ "I am rarely able to move effectively in different physical activity enviroments.",
    /* 45 */ "I want to be physically active regularly because it is important to me.",
    /* 46 */ "Physical activity is a secure part of my life pattern.",
    /* 47 */ "I take steps to avoid physcial activity.",
    /* 48 */ "I can effectively apply complex movement patterns, skills and techniques within challenging physcial activity envrioments.",
];


export default function Page8() {

    const [value, setValue] = React.useState<any []>([null,null,null,null,null,null,null,null,null,null,null,null,] as any);
    return (
        <Box color="text.primary" style={{ padding: "20px", }}>
            <RadioQuestionnaireTemplate 
                rowQuestionList={rowQuestionList} 
                columnAttributeList={columnAttributeList}
                value={value}
                setValue={setValue} />
            <ButtonNext pageNumber={"/Page9"} />
        </Box>

        
    );
}