import { white, blueEndeavour } from 'library/palette';
import { defaultLight } from 'library/themes';

export default {
  ...defaultLight,
  name: 'defaultDark',
  Main: {
    ...defaultLight.Main,
    background: blueEndeavour,
    color: white
  }
};
