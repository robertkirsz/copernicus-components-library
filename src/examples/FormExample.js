import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Div from '../demo-components/Div';

import Input from '../library/components/Input';
import Checkbox from '../library/components/Checkbox';
import Button from '../library/components/Button';

import ExampleWrapper from './ExampleWrapper';

const sleep = time => new Promise(resolve => setTimeout(resolve, time));

const isRequired = value => (value ? undefined : 'Value required');

const mustBeChecked = value => (value !== true ? 'Only humans allowed!' : undefined);

const hasMinimumLength = numberOfCharacters => value =>
  value === undefined || value === null || value.length < numberOfCharacters
    ? `Password must be at least ${numberOfCharacters} characters long`
    : undefined;

const mustBeAdult = value => (value < 18 ? 'You must be at least 18 years old' : undefined);

const validationRules = {
  name: isRequired,
  password: hasMinimumLength(6),
  age: mustBeAdult,
  isHuman: mustBeChecked
};

export default class FormExample extends Component {
  static propTypes = {
    validateOnSubmit: PropTypes.bool,
    validateOnBlur: PropTypes.bool
  };

  state = {
    name: '',
    password: '',
    age: '',
    isHuman: false,
    errors: {},
    isSubmitting: false
  };

  handleChange = field => event => {
    const { type, checked, value } = event.target;
    const isSwitchType = ['checkbox', 'radio'].includes(type);

    this.setState({ [field]: isSwitchType ? checked : value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ isSubmitting: true });

    sleep(1500).then(() => {
      if (this.props.validateOnSubmit) this.validate();
      this.setState({ isSubmitting: false });
    });
  };

  validate = field => {
    // Single field validation
    if (field) {
      const validationStatus = validationRules[field](this.state[field]);
      const errors = { ...this.state.errors, [field]: validationStatus };
      return this.setState({ errors });
    }

    // All fields validation
    const errors = {};
    const fieldsToValidate = Object.keys(validationRules);

    fieldsToValidate.forEach(field => (errors[field] = validationRules[field](this.state[field])));

    this.setState({ errors });
  };

  clearError = field => this.setState(({ errors }) => ({ errors: { ...errors, [field]: undefined } }));

  render() {
    const { validateOnSubmit, validateOnBlur } = this.props;
    const { name, password, age, isHuman, errors, isSubmitting } = this.state;

    let label = 'Form example';
    if (validateOnSubmit) label += ' (validate on submit)';
    if (validateOnBlur) label += ' (validate on blur)';

    return (
      <ExampleWrapper label={label} {...this.props}>
        <Form column listTop={16} onSubmit={this.handleSubmit}>
          <Input
            label="Name"
            value={name}
            onFocus={() => validateOnSubmit && this.clearError('name')}
            onBlur={() => validateOnBlur && this.validate('name')}
            onChange={this.handleChange('name')}
            validationStatus={errors.name && 'error'}
            validationMessage={errors.name}
          />

          <Input
            label="Password"
            type="password"
            value={password}
            onFocus={() => validateOnSubmit && this.clearError('password')}
            onBlur={() => validateOnBlur && this.validate('password')}
            onChange={this.handleChange('password')}
            validationStatus={errors.password && 'error'}
            validationMessage={errors.password}
          />

          <Input
            label="Age"
            type="number"
            value={age}
            onFocus={() => validateOnSubmit && this.clearError('age')}
            onBlur={() => validateOnBlur && this.validate('age')}
            onChange={this.handleChange('age')}
            validationStatus={errors.age && 'error'}
            validationMessage={errors.age}
          />

          <Checkbox
            id={validateOnBlur ? 'isHumanCheckbox1' : 'isHumanCheckbox2'}
            value={isHuman}
            onFocus={() => validateOnSubmit && this.clearError('isHuman')}
            onBlur={() => validateOnBlur && this.validate('isHuman')}
            onChange={this.handleChange('isHuman')}
            validationStatus={errors.isHuman && 'error'}
            validationMessage={errors.isHuman}
          >
            Are you human?
          </Checkbox>

          <Button loading={isSubmitting} style={{ alignSelf: 'flex-start' }}>
            Submit
          </Button>
        </Form>
      </ExampleWrapper>
    );
  }
}

const Form = Div.withComponent('form');
