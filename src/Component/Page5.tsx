import React, { Children, Component, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import { Button,  } from '@material-ui/core';

import Ipla from '../media/Ipla.jpg';
import RadioQuestionnaireTemplate from './RadioQuestionnaireList/RadioButtonRow';

/// richard 2020-11-19

const columnAttributeList:string[] = [
    "Not at all like me",
    "Not really like me",
    "Neutral",
    "Quite like me",
    "Very much like me"
];


const rowQuestionList:string[]=[
    "I know I can have rewarding experiences in physical activities and this enhances my self-esteem.",
    "I am starting to develop my awareness of the movement requirements of varied physical activity environments.",
    "I rarely want to engage in physical activity.",
    "I am aware that I can make progress in some activities and confident that I am capable of making further progress.",
    "I am quite confident that I can make some progress in physical activities.",
    "I am starting to understand that physical activity helps me to keep well so that I can enjoy life.",
    "I work effectively and creatively, individually and with others, in challenging competitive and co-operative physical activity environments.",
    "I usually look forward to taking part in physical activity.",
    "I am starting to engage with a wider variety of physical activities both individually and with others.",
    "I relish engaging in new and challenging physical activity environments and set myself ambitious goals.",
    "I am generally not at ease in different physical activity environments.",
    "I am developing my movement patterns and I am able to link them into sequences associated with a variety of physical activities.",
];




const NextPageButton = () => (
    <div>
        <Button variant="contained" color="primary" size="large" 
            style={{ margin: "auto", display: "block", alignItems: "center",marginBottom:'20px',marginTop:'10px' }}
            onClick={()=>{}} > Next 
        </Button>
    </div>
);

export default function Page5() {
    const nextPage = () => {
    }

    const history = useHistory();
    const toPage3OnClick = () => {
        history.push('/Page6');
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