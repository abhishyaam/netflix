import React from 'react';
import { render } from '@testing-library/react';

import { OptForm } from '../../components';

describe('<OtpForm />', () => {
  it('renders <OtpForm /> with populated data', () => {
    const { container, getByText, getAllByPlaceholderText } = render(
      <OptForm>
        <OptForm.Input placeholder='Email Address' />
        <OptForm.Button>Try it now</OptForm.Button>
        <OptForm.Break></OptForm.Break>
        <OptForm.Text>Ready to watch?</OptForm.Text>
      </OptForm>
    );
    expect(getByText('Try it now')).toBeTruthy();
    expect(getAllByPlaceholderText('Email Address')).toBeTruthy();
    expect(getByText('Ready to watch?')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
