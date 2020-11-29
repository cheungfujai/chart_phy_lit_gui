import { Radio } from '@material-ui/core';
import React from 'react';
import { IRadioButtonRow, IRadioQuestionnaireTemplate } from '../../types/RadioQuestionnaireList';

const RadioButtonRow = ({columnAttributeList,rowQuestion,rowIndex,value,setValue}:IRadioButtonRow)=>{


    return (
        <tr>

       <td >{rowQuestion}</td>
        
        {columnAttributeList.map((item,colIndex)=>(
                <td key={`row-${rowIndex}-${colIndex}`}>
                <Radio
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

    return (
        <>
        <table>
            <thead>
                <tr>
                <td width="150"></td>
                {columnAttributeList.map((item,colIndex)=>(<td width="100" key={`col-title-${colIndex}`}>{item}</td>))}
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