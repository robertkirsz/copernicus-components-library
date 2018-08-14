import { css } from 'styled-components';

const queries = [
  { name: 'mediumUp', value: '(min-width: 768px)' },
  { name: 'largeUp', value: '(min-width: 1024px)' },
  { name: 'extraLargeUp', value: '(min-width: 1332px)' }
];

// Iterate through all the sizes and create a media template for each one
export const screenSize = queries.reduce(
  (result, query) => ({
    ...result,
    [query.name]: (...args) => css`
      @media only screen and ${query.value} {
        ${css(...args)};
      }
    `
  }),
  {}
);
