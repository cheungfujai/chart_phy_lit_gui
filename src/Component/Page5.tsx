import React, { Children, Component, useState } from 'react';
import Box from '@material-ui/core/Box';
import env from 'react-dotenv';

import RadioQuestionnaireTemplate from './RadioQuestionnaireList/RadioQuestionnaireTemplate';
import ChartPhyButton from './ChartPhyButton';
import RadioQuestionnairePage from './RadioQuestionnaireList/RadioQuestionnairePage';

export default function Page5() {
    return(
        <RadioQuestionnairePage />
    )
}