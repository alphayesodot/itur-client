import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';

// Configure JSS
/* eslint-disable react/destructuring-assignment */
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const RTL = (props) => (
  <StylesProvider jss={jss}>
    {props.children}
  </StylesProvider>
);

export default RTL;
