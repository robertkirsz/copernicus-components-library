import { white, black, greyAluminium, greyMischka, blueEndeavour } from '../../library/palette';

export default {
  name: 'defaultLight',
  primaryColor: blueEndeavour,
  Main: {
    background: white,
    fontFamily: 'Open Sans, sans-serif',
    color: '#1F1A15',
    fontWeight: 300
  },
  Button: {
    primary: {
      color: white,
      backgroundColor: blueEndeavour,
      borderColor: blueEndeavour,
      boxShadow: '0 2px 4px 0 rgba(32, 28, 23, 0.1), 0 2px 4px 0 rgba(5, 80, 164, 0.2)',
      hover: { color: white, backgroundColor: blueEndeavour, borderColor: blueEndeavour },
      focus: { color: white, backgroundColor: '#0664B0', borderColor: '#0664B0' },
      disabled: { color: white, backgroundColor: greyAluminium, borderColor: greyAluminium }
    },
    secondary: {
      color: blueEndeavour,
      backgroundColor: white,
      borderColor: blueEndeavour,
      boxShadow: 'none',
      hover: { color: white, backgroundColor: blueEndeavour, borderColor: blueEndeavour },
      focus: { color: white, backgroundColor: '#0664B0', borderColor: '#0664B0' },
      disabled: { color: greyAluminium, backgroundColor: white, borderColor: greyAluminium }
    },
    tertiary: {
      color: blueEndeavour,
      backgroundColor: white,
      borderColor: white,
      boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.1), 0 1px 4px 0 rgba(5, 80, 164, 0.1)',
      hover: { color: white, backgroundColor: blueEndeavour, borderColor: blueEndeavour },
      focus: { color: white, backgroundColor: '#0664B0', borderColor: '#0664B0' },
      disabled: { color: greyAluminium, backgroundColor: white, borderColor: 'transparent' }
    }
  },
  Checkbox: {
    borderColor: blueEndeavour,
    disabled: { backgroundColor: greyAluminium, borderColor: greyAluminium, color: greyAluminium },
    checked: { backgroundColor: blueEndeavour, borderColor: blueEndeavour },
    focus: { borderColor: blueEndeavour }
  },
  Radio: {
    borderColor: blueEndeavour,
    disabled: { backgroundColor: greyAluminium, borderColor: greyAluminium, color: greyAluminium },
    checked: { backgroundColor: blueEndeavour, borderColor: blueEndeavour },
    focus: { borderColor: blueEndeavour }
  },
  Input: {
    borderColor: greyMischka,
    backgroundColor: white,
    color: black,
    fontSize: 16,
    fontWeight: 400,
    hover: {},
    focus: { backgroundColor: blueEndeavour, borderColor: blueEndeavour, color: white },
    disabled: { backgroundColor: greyMischka, borderColor: greyMischka, color: '#80838B' },
    placeholder: { color: white, opacity: 0.7 }
  },
  InputLabel: {
    color: '#1f1a15',
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 26,
    top: 20,
    active: {
      color: white,
      fontSize: 12,
      lineHeight: 26,
      top: 8,
      opacity: 0.7
    }
  },
  Hyperlink: {
    color: blueEndeavour
  },
  ValidationMessage: {
    fontSize: 14,
    fontWeight: 300
  }
};
