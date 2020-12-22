import React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import {route} from '../App';
import Grid from '@material-ui/core/Grid';


interface IChartPhyButton{
    type?: "next"|"previous"|"both",
    page: number,
}

const ChartPhyButton = ({content,onClick}) =>{

    return (
        <Button 
            variant="contained" 
            color="primary" 
            size="large" 
            style={{ margin: "auto", display: "block", alignItems: "center"}} 
            onClick = {onClick}
        > 
        {content}
        </Button>
    )
}

export default ChartPhyButton;
//// default show both previous and next button
/// next => show next button only
/// previous => show previous button only
// export default function ChartPhyButtonGroup  ({ page, onClick ,type="both"}) {

//     return (
//         <>
//         {(type==="next")&&<ChartPhyButton type="next"  page={page} onClick={onClick} />}
//         {(type==="previous")&&<ChartPhyButton type="previous"  page={page}onClick={onClick} />}
//         {(type==="both")&&      
//             <div style={{flexGrow: 1,display:"flex"}}>
//             <Grid item xs={6}>
//                 <ChartPhyButton type="previous"page={page} onClick={onClick} />
//             </Grid>
//             <Grid item xs={6}>
//                 <ChartPhyButton type="next" page={page} onClick={onClick} />
//              </Grid>
//             </div>
//         }
//         </>
//     )
// }