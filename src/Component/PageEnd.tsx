import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/reducer';
import { ICreateCandidateRequest, ITitle } from '../types/api/candidate';
import { mapQuestionAnswerToTitle } from '../functions/questions/mapQuestionAnswerToTitle';
import { createProfile } from '../functions/api/candidate';
import { setProfile } from '../store/actions/QuestionActions';
import { Profile } from '../types/store/QuestionStore';
import { Button, Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { route, routes } from '../App';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const PageEnd = () => {
    const questionState = useSelector((state: RootState) => state.question);
    const dispatch = useDispatch();
    const history = useHistory();
    
    const onSubmit = async () => {
        ///TODO after user ok for submit then router push to result page
        alert("Are your sure ? After Submit you cannot change any answer.")
        const titleList:ITitle[] = mapQuestionAnswerToTitle(questionState.question,questionState.answer);
        
        const candidate:ICreateCandidateRequest = {
            ...questionState.candidate,
            title:titleList
        }
        const profile:Profile = await createProfile(candidate);
        console.log(profile);

        dispatch(setProfile(profile))

        history.push(route[routes['/Result']]);
    }

    const previousPage = () => {
        history.push(route[routes['/Page5']])
    }

    return (
        <>
        <Box>
        <Typography variant="h6" align="center" gutterBottom style={{ padding: "10px", paddingTop: "20px" }}>You are nearly finished!</Typography>
        <Typography variant="body1" align="center" gutterBottom style={{ padding: "10px" }}> Please Submit your result</Typography>
        
        <div style={{flexGrow: 1,display:"flex"}}>
        <Grid item xs={6}>
        <Button variant="contained" color="primary" size="large" style={{ margin: "auto", display: "block", alignItems: "center"}}
            onClick = {()=>previousPage()} > Previous
        </Button>
        </Grid>
        <Grid item xs={6}>
        <Button variant="contained" color="primary" size="large" style={{ margin: "auto", display: "block", alignItems: "center"}}
            onClick = {()=>onSubmit()} > Submit
        </Button>
        </Grid>
        </div>
        </Box>
        </>
    )
}

export default PageEnd;