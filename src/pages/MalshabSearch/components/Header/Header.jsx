import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { withStyles } from '@material-ui/core/styles';
import { Button as MuiButton, TextField, Tooltip } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import MalshabService from '../../../../services/malshab.service';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import useStyles from './Header.styles';

const Button = withStyles({
  root: {
    '&.Mui-disabled': {
      pointerEvents: 'auto',
    },
  },
})(MuiButton);

const Header = ({ setMalshab }) => {
  const classes = useStyles();
  const [input, setInput] = useState('');
  const identityNumberLength = 9;
  const enterCharCode = 13;
  const { t } = useTranslation();

  const canSearch = () => (
    input?.length === identityNumberLength && input?.match(/^[0-9]+$/)
  );

  const handleOnSearch = () => {
    if (canSearch()) {
      MalshabService.getMalshabById(input).then((res) => {
        setMalshab(res);
        setInput('');
      }).catch(() => {
        toast(t('error.server'));
      });
    }
  };

  return (
    <DashboardCard className={classes.root}>
      <Tooltip title={canSearch() ? '' : t('toolTip.invalidId')}>
        <Button
          disabled={!canSearch()}
          onClick={handleOnSearch}
          className={classes.button}
          component={canSearch() ? undefined : 'div'}
        >
          {t('button.searchMalshab')}
        </Button>
      </Tooltip>
      <TextField
        className={classes.input}
        type='text'
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.charCode === enterCharCode && handleOnSearch()}
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
