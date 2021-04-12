/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-spacing */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */
/* eslint-disable indent */
/* eslint-disable arrow-body-style */
import { useTranslation } from 'react-i18next';
import { Input } from '@material-ui/core';
import { useState } from 'react';

const AddUnit = ({ units }) => {
    const { t } = useTranslation();
    const [unitName, setUnitName] = useState('');
    return (
        <div>
            <h3 dir='rtl'>{t('headerTitles.addUnit')}</h3>
            <Input type='text' />
        </div>
    )
}

export default AddUnit
