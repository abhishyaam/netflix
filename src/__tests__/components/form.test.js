import React from 'react';
import { render } from '@testing-library/react';
import { Form } from '../../components';
jest.mock('react-router-dom');
describe('<Form />', () => {
  it('renders the <Form /> with populated data', () => {
    const { container, queryByText, getByPlaceholderText } = render(
      <Form>
        <Form.Title>Sign In Now</Form.Title>

        <Form.Base>
          <Form.Input placeholder='Email Address' onChange={() => {}} />
          <Form.Input
            type='password'
            placeholder='Password'
            onChange={() => {}}
          />
          <Form.Submit type='submit' disabled>
            Sign In
          </Form.Submit>
        </Form.Base>

        <Form.TextSmall>
          This page is protected by Google reCAPTCHA to ensure you're not a
          bot.Learn more.
        </Form.TextSmall>
      </Form>
    );
    expect(
      queryByText(
        "This page is protected by Google reCAPTCHA to ensure you're not a bot.Learn more."
      )
    ).toBeTruthy();
    expect(queryByText('Sign In')).toBeTruthy();
    expect(queryByText('Sign In').disabled).toBeTruthy();
    expect(getByPlaceholderText('Email Address')).toBeTruthy();
    expect(getByPlaceholderText('Password')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the <Form /> with populated data', () => {
    const { container, queryByText, getByPlaceholderText } = render(
      <Form>
        <Form.Error>Your Email address is already in use</Form.Error>
        <Form.Submit>Sign in</Form.Submit>
      </Form>
    );
    expect(queryByText('Your Email address is already in use')).toBeTruthy();
    expect(queryByText('Sign in').disabled).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
