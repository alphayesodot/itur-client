import { Check } from '@material-ui/icons';
import clsx from 'clsx';
import { useQontoStepIconStyles } from './Qonto.styles';

const QontoStepIcon = (props) => {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
    </div>
  );
};

export default QontoStepIcon;
