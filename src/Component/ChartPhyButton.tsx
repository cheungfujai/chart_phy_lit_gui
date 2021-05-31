import React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import {route} from '../App';
import Grid from '@material-ui/core/Grid';
import { Box, Typography } from '@material-ui/core';


interface IChartPhyButton{
    type?: "next"|"previous"|"both",
    onClick:()=>void
    page: number,
    style?: {}
}

function ChartPhyButton ({page,type, onClick, style={}}:IChartPhyButton) {
    const history = useHistory();

    const onPageChange = () =>{
        onClick();        
        const nextPageIndex =  (type==="next") ?  Math.min(page+1,route.length-1) : Math.max(page-1,0);
        history.push(route[nextPageIndex]);
    }
    return (
        <Button variant="outlined" color="primary" size="small" style={{ ...style, marginTop: "32px", marginBottom: "64px", minWidth: "160px", display: "block", alignItems: "center"}}
            onClick = {()=>onPageChange()} > {type} 
        </Button>
    )
}

//// default show both previous and next button
/// next => show next button only
/// previous => show previous button only
export default function ChartPhyButtonGroup  ({ page, onClick ,type="both"}:IChartPhyButton) {

    return (
        <>
        {(type==="next")&&<ChartPhyButton style={{float:"right"}} type="next"  page={page} onClick={onClick} />}
        {(type==="previous")&&<ChartPhyButton type="previous"  page={page}onClick={onClick} />}
        {(type==="both")&&      
            <div style={{width:"100%"}}>
                <ChartPhyButton style={{float:"left"}} type="previous"page={page} onClick={onClick} />
                <ChartPhyButton style={{float:"right"}} type="next" page={page} onClick={onClick} />
            </div>
        }
        <Typography variant="caption" display="block" style={{marginTop: "-48px", float:"left", clear:"both", textAlign:"center",width:"100%"}} >
            Powered by The Chinese University of Hong Kong 2021 
        </Typography>
        </>
    )
}