import getButtonStyles from '../getButtonStyles';
import theme from '../../themes/defaultLight';

const props = {
  theme,
  buttonType: 'primary',
  disabled: false
};

test('adds 1 + 2 to equal 3', () => {
  expect(getButtonStyles('minWidth')(props)).toBe(216);
});