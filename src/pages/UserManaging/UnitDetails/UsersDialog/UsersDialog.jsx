/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-indent */
/* eslint-disable arrow-body-style */
/* eslint-disable indent */
import { Typography, Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import useStyles from './UsersDialog.styles.js';

const UsersDialog = ({ setOpenUsersDialog }) => {
    const classes = useStyles();
    const { t } = useTranslation();

    return (
        <div className={classes.root}>
            <div className={classes.titleDiv}>
                <Typography className={classes.usersTitle}>{t('text.users')}</Typography>
                <Button className={classes.closeButton} onClick={() => { setOpenUsersDialog(false); }}>
                    <img src='add-icon.svg' alt='close' className={classes.closeIcon} />
                </Button>
            </div>
           <button type='button' onClick={() => setOpenUsersDialog(false)}>11111111</button>
        </div>
    );
};

export default UsersDialog;
