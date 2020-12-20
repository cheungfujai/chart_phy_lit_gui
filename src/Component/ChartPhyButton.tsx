import React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import {route} from '../App';
import Grid from '@material-ui/core/Grid';


interface IChartPhyButton{
    type?: "next"|"previous"|"both",
    onClick:()=>void
    page: number,
}

function ChartPhyButton ({page,type, onClick}:IChartPhyButton) {
    const history = useHistory();

    const onPageChange = () =>{
        onClick();        
        const nextPageIndex =  (type==="next") ?  Math.min(page+1,route.length-1) : Math.max(page-1,0);
        history.push(route[nextPageIndex]);
    }
    return (
        <Button variant="contained" color="primary" size="large" style={{ margin: "auto", display: "block", alignItems: "center"}}
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
        {(type==="next")&&<ChartPhyButton type="next"  page={page} onClick={onClick} />}
        {(type==="previous")&&<ChartPhyButton type="previous"  page={page}onClick={onClick} />}
        {(type==="both")&&      
            <div style={{flexGrow: 1,display:"flex"}}>
            <Grid item xs={6}>
                <ChartPhyButton type="previous"page={page} onClick={onClick} />
            </Grid>
            <Grid item xs={6}>
                <ChartPhyButton type="next" page={page} onClick={onClick} />
             </Grid>
            </div>
        }
        </>
    )
}