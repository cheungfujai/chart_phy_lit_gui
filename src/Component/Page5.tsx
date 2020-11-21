import React, { Children, Component, useState } from 'react';
import Box from '@material-ui/core/Box';

import RadioQuestionnaireTemplate from './RadioQuestionnaireList/RadioButtonRow';
import ButtonNext from './ButtonNext';

/// richard 2020-11-19

const columnAttributeList:string[] = [
    "Not at all like me",
    "Not really like me",
    "Neutral",
    "Quite like me",
    "Very much like me"
];


const rowQuestionList:string[]=[
    /* 1 */ "I know I can have rewarding experiences in physical activities and this enhances my self-esteem.",
    /* 2 */ "I am starting to develop my awareness of the movement requirements of varied physical activity environments.",
    /* 3 */ "I rarely want to engage in physical activity.",
    /* 4 */ "I am aware that I can make progress in some activities and confident that I am capable of making further progress.",
    /* 5 */ "I am quite confident that I can make some progress in physical activities.",
    /* 6 */ "I am starting to understand that physical activity helps me to keep well so that I can enjoy life.",
    /* 7 */ "I work effectively and creatively, individually and with others, in challenging competitive and co-operative physical activity environments.",
    /* 8 */ "I usually look forward to taking part in physical activity.",
    /* 9 */ "I am starting to engage with a wider variety of physical activities both individually and with others.",
    /* 10 */ "I relish engaging in new and challenging physical activity environments and set myself ambitious goals.",
    /* 11 */ "I am generally not at ease in different physical activity environments.",
    /* 12 */ "I am developing my movement patterns and I am able to link them into sequences associated with a variety of physical activities.",
];


export default function Page5() {

    const [value, setValue] = React.useState<any []>([null,null,null,null,null,null,null,null,null,null,null,null,] as any);
    return (
        <Box color="text.primary" style={{ padding: "20px", }}>
            <RadioQuestionnaireTemplate 
                rowQuestionList={rowQuestionList} 
                columnAttributeList={columnAttributeList}
                value={value}
                setValue={setValue} />
            <ButtonNext pageNumber={"/Page6"} />
        </Box>

        
    );
}