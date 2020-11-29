import React, { Component, useEffect } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import Starter from './Starter';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Ipla from '../media/Ipla.jpg';
import ChartPhyButton from './ChartPhyButton';
import { useDispatch } from 'react-redux';
import {  Question } from '../types/store/QuestionStore'
import { initQuestionAndAnswer } from '../store/actions/QuestionActions';
import ChartPhyButtonGroup from './ChartPhyButton';

const exampleQuestion:Question[]  = 
[
    {"_id":"/* 1 */","title": "I know I can have rewarding experiences in physical activities and this enhances my self-esteem."},
    {"_id":"/* 2 */", "title": "I am starting to develop my awareness of the movement requirements of varied physical activity environments."},
    {"_id":"/* 3 */", "title": "I rarely want to engage in physical activity."},
    {"_id":"/* 4 */","title":  "I am aware that I can make progress in some activities and confident that I am capable of making further progress."},
    {"_id":"/* 5 */","title": "I am quite confident that I can make some progress in physical activities."},
    {"_id":"/* 6 */","title": "I am starting to understand that physical activity helps me to keep well so that I can enjoy life."},
    {"_id":"/* 7 */","title": "I work effectively and creatively, individually and with others, in challenging competitive and co-operative physical activity environments."},
    {"_id":"/* 8 */","title":  "I usually look forward to taking part in physical activity."},
    {"_id":"/* 9 */","title": "I am starting to engage with a wider variety of physical activities both individually and with others."},
    {"_id":"/* 10 */","title": "I relish engaging in new and challenging physical activity environments and set myself ambitious goals."},
    {"_id":"/* 11 */","title": "I am generally not at ease in different physical activity environments."},
    {"_id":"/* 12 */", "title": "I am developing my movement patterns and I am able to link them into sequences associated with a variety of physical activities."},
    {"_id":"/* 13 */", "title":  "I am confident that I will enjoy taking part in physical activity."},
    {"_id":"/* 14 */", "title":  "I work very hard when engaging in sustain my regular physical activity."},
    {"_id":"/* 15 */", "title":  "I work hard when taking part in physical activity."},
    {"_id":"/* 16 */", "title":  "I generally apply myself during physical activity."},
    {"_id":"/* 17 */", "title":  "I can analyse all aspects of movement that I am involved in, describing stengths and weaknessess and acting on strategies for improvement."},
    {"_id":"/* 18 */", "title":  "I am motivated to be physically active most days."},
    {"_id":"/* 19 */", "title":  "I am becoming more aware of and able to adapt to the damands presented by varied physical activity environemnts."},
    {"_id":"/* 20 */", "title":  "I am certain that engaging in physical acctivity will be rewarding and enhance my self-confidence."},
   {"_id": "/* 21 */ ", "title": "I can work individually and with others, in a range of settings, creating and refining movement sequences in varied physical activities"},
   {"_id": "/* 22 */ ", "title":"I seek out opportunities to challenge myself in a range of physical activity environments individually and/or with others"},
   {"_id": "/* 23 */ ", "title":"I can evaluate my own and others movements, identifying what is successful and how to make progress towards future targets."},
   {"_id": "/* 24 */ ", "title":"I can identify movements that I am working on and can suggest what I need to improve."},
   {"_id": "/* 25 */ ", "title":"I understand that participating in a range of physical activities opens opportunities for challenging myself in worthwhile experiences that will contribute to my holistic health and wellbeing."},
   {"_id": "/* 26 */ ", "title":"I am confident that I can enhance my expertise in physical activities and learn from future challenging experienes."},
   {"_id": "/* 27 */ ", "title":"I am aware of movement options and can adapt my actions when interacting in varied physical activity environments."},
   {"_id": "/* 28 */ ", "title":"I find it diffuclt to adapt my movements in different physical activity enviroments."},
   {"_id": "/* 29 */ ", "title":"I continue to engage effectively and effciently in a variety of physical activity environments both individually and with others."},
   {"_id": "/* 30 */ ", "title":"I understand that participating in physical activities will have a positive effect on my holistic health and wellbeing."},
   {"_id": "/* 31 */ ", "title":"I do not apply myself fully when engagged in physical activity."},
   {"_id": "/* 32 */ ", "title":"I can take on different roles when working individually and with others, reflecting on, creating and refining movement in a range of physical activities."},
   {"_id": "/* 33 */ ", "title":"Some physical activity is included in my life pattern."},
   {"_id": "/* 34 */ ", "title":"I do not really understand the importance of physical activity for my health and well-being."},
   {"_id": "/* 35 */ ", "title":"I am successfully engaging in physcial activity in an increasing range of varied enviroments both individually and with others."},
   {"_id": "/* 36 */ ", "title":"I continually seek ways to include physical activitiy in my life pattern."},
   {"_id": "/* 37 */ ", "title":"I am usually at ease engaging in physcial activity in some indoor and outdoor physical activities."},
   {"_id": "/* 38 */ ", "title":"I can appreciate options and respond cratively and imaginatively in challenging physcial activity enviroments."},
   {"_id": "/* 39 */ ", "title":"I comfortable applying movement patterns and more complex skills and techniques to a range of physical activities."},
   {"_id": "/* 40 */ ", "title":"I can describe movements I that I am working on , suggesting where I am being successful, and targets that I coulld work towards in the future."},
   {"_id": "/* 41 */ ", "title":"I am determined to challenge myslef in a range of physcial activity enviroments."},
   {"_id": "/* 42 */ ", "title":"I am confident exploring a range of activities in different settings, with the confidence that I can respond to the demands they make on me."},
   {"_id": "/* 43 */ ", "title":"I want to be physically active because I enjoy it."},
   {"_id": "/* 44 */ ", "title":"I am rarely able to move effectively in different physical activity enviroments."},
   {"_id": "/* 45 */ ", "title":"I want to be physically active regularly because it is important to me."},
   {"_id": "/* 46 */ ", "title":"Physical activity is a secure part of my life pattern."},
   {"_id": "/* 47 */ ", "title":"I take steps to avoid physcial activity."},
   {"_id": "/* 48 */ ", "title":"I can effectively apply complex movement patterns, skills and techniques within challenging physcial activity envrioments."},
]

export default function Welcome() {

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        /// [GET] /v1/question
        const question:Question[] = exampleQuestion;
        dispatch(initQuestionAndAnswer(question));
        
    },[dispatch]);
    
    const nextPage = () => {
        history.push("/starter");
    }

    return (
            <Box >
                <Typography variant="h6" align="center" gutterBottom style={{ padding: "10px", paddingTop: "20px" }}>Charting Physical Literacy Questionnaire</Typography>
                <Typography variant="body1" gutterBottom style={{ padding: "10px" }}> First of all, we appreciate you taking the time to complete this survey. The aim of this survey is to chart your physical literacy status. The questions and statements relate to your demographic information and physical activity experiences. This survey could be finished in approximately 15 minutes.</Typography>
                <Typography variant="body1" gutterBottom style={{ padding: "10px" }}> The survey is conducted anonymously and your responses will only be used for academic purposes. Please be assured that the answers you provide will be treated in strict confidence. In addition, there are no “right” or “wrong” answers. We would like to know how far these statements match your personal view. Please do not leave out any questions. Once again, thank you for all your help and contribution to our research!</Typography>
                <Typography variant="body2" style={{ padding: "10px" }}> Research and Innovation Committee </Typography>
                <Typography variant="body2" style={{ padding: "10px", paddingBottom: "30px" }}> International Physical Literacy Association </Typography>
                {/* <ChartPhyButton type="next" page={0} onClick={nextPage} /> */}
                <ChartPhyButtonGroup type="next" page={0} onClick={()=>{}}/>
            </Box>
    );
}