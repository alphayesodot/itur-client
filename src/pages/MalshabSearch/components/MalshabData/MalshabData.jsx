import React from 'react';
import { useTranslation } from 'react-i18next';
import UserStore from '../../../../stores/User.store';
import { Role } from '../../../../services/user.service';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import NoObjectsToShow from '../../../../common/NoObjectsToShow/NoObjectsToShow';
import MalshabInfo from '../../../../common/MalshabInfo/MalshabInfo';
import EventsSection from '../EventsSection/EventsSection';
import CustomBackDrop from '../../../../common/CustomBackDrop/CustomBackDrop';
import Attachments from '../../../../common/Attachments/Attachments';
import useStyles from './MalshabData.styles';

const MalshabData = ({ malshab, isLoading }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const currentUser = UserStore.userProfile;

  return (
    <DashboardCard className={classes.root}>
      {isLoading ? <CustomBackDrop />
        : (
          <>
            {malshab
              ? (
                <div className={classes.content}>
                  <MalshabInfo malshab={malshab} />
                  <div className={classes.bottomSection}>
                    {![Role.Itur, Role.Mada].includes(currentUser.role) && (
                    <EventsSection malshabId={malshab.identityNumber} />
                    )}
                    <Attachments
                      rootClassName={classes.rootAttachments}
                      canUpload={[Role.Itur, Role.Mada].includes(currentUser.role)}
                      malshabId={malshab.identityNumber}
                      attachments={malshab.attachments}
                    />
                  </div>
                </div>
              )
              : <NoObjectsToShow title={t('message.noMalshab')} />}
          </>
        )}
    </DashboardCard>
  );
};

export default MalshabData;
