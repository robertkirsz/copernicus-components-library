import React, { Fragment } from 'react';
import styled from 'styled-components';

const CheckedIcon = () => (
  <Fragment>
    <ShortLine />
    <LongLine />
  </Fragment>
);

export const ShortLine = styled.span`
  display: inline-block;
  height: 2px;
  width: 0px;
  background-color: #fff;
  position: absolute;
  top: 10px;
  left: 4px;
  border-radius: 10px;
  transform: rotate(45deg);
  transform-origin: left center;
  z-index: 2;
  transition: width 0.05s 0.1s;
`;

export const LongLine = styled.span`
  display: inline-block;
  height: 2px;
  width: 0px;
  background-color: #fff;
  position: absolute;
  border-radius: 10px;
  left: 8px;
  top: 15px;
  z-index: 1;
  transform: rotate(-48deg);
  transform-origin: left center;
  transition: width 0.15s;
`;

export default CheckedIcon;
