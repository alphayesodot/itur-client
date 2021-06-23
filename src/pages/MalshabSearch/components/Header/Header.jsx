import React, { useState } from 'react';
import { Button as MuiButton, TextField, Tooltip } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/core/styles';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import useStyles from './Header.styles';

const Button = withStyles({
  root: {
    '&.Mui-disabled': {
      pointerEvents: 'auto',
    },
  },
})(MuiButton);

const Header = ({ malshab, setMalshab }) => {
  const classes = useStyles();
  const [input, setInput] = useState('');
  const identityNumberLength = 9;
  const { t } = useTranslation();

  const handleOnClick = () => {
    setInput('');
  };

  const isButtonDisabled = () => (
    input?.length !== identityNumberLength || !input?.match(/^[0-9]+$/)
  );

  return (
    <DashboardCard className={classes.root}>
      <Tooltip title={isButtonDisabled() ? t('toolTip.invalidId') : ''}>
        <Button
          disabled={isButtonDisabled()}
          onClick={handleOnClick}
          className={classes.button}
        >
          {t('button.searchMalshab')}
        </Button>
      </Tooltip>
      <TextField
        className={classes.input}
        type='text'
        onChange={(e) => setInput(e.target.value)}
        value={input}
        placeholder={t('placeholders.searchMalshab')}
        InputProps={{
          disableUnderline: true,
        }}
      />
    </DashboardCard>
  );
};

export default Header;
