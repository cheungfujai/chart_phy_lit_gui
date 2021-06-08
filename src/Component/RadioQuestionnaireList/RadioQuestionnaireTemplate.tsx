import { Radio, Typography } from '@material-ui/core';
import React from 'react';
import { IRadioButtonRow, IRadioQuestionnaireTemplate } from '../../types/RadioQuestionnaireList';

const RadioButtonRow = ({columnAttributeList,rowQuestion,rowIndex,value,setValue}:IRadioButtonRow)=>{

    const questionStyle:React.CSSProperties = {
        lineHeight: "1.6rem",
        marginRight: "32px"
    }

    return (
        <tr>
            <td>
                <Typography variant="body1" display="block" style={questionStyle} >{rowQuestion}</Typography>
            </td>
            {columnAttributeList.map((item,colIndex)=>(
                <td key={`row-${rowIndex}-${colIndex}`}>
                    <Radio 
                        color="primary"
                        checked={+value[rowIndex] === colIndex+1}
                        onChange={(e)=>{
                            setValue(value.map((it,idx)=>idx===rowIndex?+e.target.value:it));
                        }}
                        value={colIndex+1}
                    />
                </td> 
            )
            )}
        </tr>
    )
}


const RadioQuestionnaireTemplate = ({rowQuestionList,columnAttributeList,value,setValue}:IRadioQuestionnaireTemplate) =>{
    const tableStyle:React.CSSProperties = {
        borderCollapse: "separate",
        borderSpacing: "0 32px",
        width: "100%"
    }

    return (
        <>
        <table style={tableStyle}>
            <thead>
                <tr>
                <td width="150"></td>
                { 
                    columnAttributeList.map( (item,colIndex)=> {
                        return (
                            <td width="100" key={`col-title-${colIndex}`}>
                                <Typography variant="h6" display="block" style={{fontSize:"0.85rem", marginLeft:"-84px", marginBottom:"-12px", textAlign: "center"}} >{item}</Typography>
                            </td>
                        )
                    })
                }
                </tr>
            </thead>
            <tbody>
                {
                    rowQuestionList.map((item,rowIndex)=>(
                        <RadioButtonRow 
                            key={`row-${rowIndex}`} 
                            columnAttributeList={columnAttributeList}
                            rowQuestion={item} 
                            rowIndex={rowIndex}
                            value={value}
                            setValue={setValue}/>
                    ))
                }
            </tbody>
        </table>

        </>
    )
};

export default RadioQuestionnaireTemplate;