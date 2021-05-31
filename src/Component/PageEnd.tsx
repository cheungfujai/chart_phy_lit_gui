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
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';

import baseRequest from '../functions/api/base';
import ProgressBar from './ProgressBar';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement<any, any> },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const PageEnd = () => {
    const questionState = useSelector((state: RootState) => state.question);
    const dispatch = useDispatch();
    const history = useHistory();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    const onSubmit = async () => {
        ///TODO after user ok for submit then router push to result page
        // alert("Are your sure ? After Submit you cannot change any answer.")
        const titleList:ITitle[] = mapQuestionAnswerToTitle(questionState.question,questionState.answer);
        
        const candidate:ICreateCandidateRequest = {
            ...questionState.candidate,
            title: titleList
        }

        const sendCandidate: ICreateCandidateRequest = candidate;
        let result: any;

        console.log(JSON.stringify(sendCandidate));

        // try{
        //     result = await baseRequest.post<Profile>('/profile', candidate);
        // } catch (err){
        //     throw err;
        // }
        
        const profile:Profile = await createProfile(candidate);
        // console.log(result);

        await dispatch(setProfile(profile));

        history.push(route[routes['/Result']]);
    }

    const previousPage = () => {
        history.push(route[routes['/Page5']])
    }

    return (
        <Container maxWidth="sm">
            <ProgressBar value="100"/>

            <Typography variant="h6" align="center" gutterBottom style={{ padding: "10px", paddingTop: "20px" }}>You are nearly finished!</Typography>
            <Typography variant="body1" align="center" gutterBottom style={{ padding: "10px" }}> Please Submit your result</Typography>
            
            <div style={{width: "100%"}}>
                <Button 
                    variant="outlined" color="primary" size="small" 
                    style={{float:"left", marginTop: "32px", marginBottom: "64px", minWidth: "160px", display: "block", alignItems: "center"}}
                    onClick = {()=>previousPage()} > Previous
                </Button>
                <Button 
                    variant="outlined" color="primary" size="small" 
                    style={{float:"right", marginTop: "32px", marginBottom: "64px", minWidth: "160px", display: "block", alignItems: "center"}}
                    onClick={handleClickOpen} > Submit
                </Button>
            </div>

            <Typography variant="caption" display="block" style={{marginTop: "-48px", float:"left", clear:"both", textAlign:"center",width:"100%"}} >
                Powered by The Chinese University of Hong Kong 2021 
			</Typography>

            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{"Are your sure ? "}</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    After Submit you cannot change any answer.
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={onSubmit} color="secondary">
                    Yes
                </Button>
                <Button onClick={handleClose} color="secondary">
                    No
                </Button>
                </DialogActions>
            </Dialog>
        </Container>
    )
}

export default PageEnd;