import { white, black, greyAluminium, greyMischka, blueEndeavour } from 'library/palette';

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
    minWidth: 216,
    height: 52,
    borderRadius: 100,
    padding: '13px 20px',
    fontSize: 18,
    fontFamily: 'Nunito, sans-serif',
    lineHeight: 26,
    fontWeight: 400,
    primary: {
      color: white,
      backgroundColor: blueEndeavour,
      borderColor: blueEndeavour,
      hover: {},
      focus: {},
      disabled: { color: white, backgroundColor: greyAluminium, borderColor: greyAluminium }
    },
    secondary: {
      color: blueEndeavour,
      backgroundColor: white,
      borderColor: blueEndeavour,
      hover: {},
      focus: { backgroundColor: '#F4F6FA' },
      disabled: { color: greyAluminium, backgroundColor: white, borderColor: white }
    },
    tertiary: {
      color: blueEndeavour,
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      hover: {},
      focus: { backgroundColor: '#F4F6FA' },
      disabled: { color: greyAluminium, backgroundColor: 'transparent', borderColor: 'transparent' }
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
