import { Button as MuiButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const TooltipButton = withStyles({
  root: {
    '&.Mui-disabled': {
      pointerEvents: 'auto',
    },
  },
})(MuiButton);

export default TooltipButton;
