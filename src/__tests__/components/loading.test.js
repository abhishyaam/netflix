import React from 'react';
import { render } from '@testing-library/react';

import { Loading } from '../../components';

describe('<Loading />', () => {
  it('renders <Loading/>', () => {
    const { container, getByTestId } = render(
      <Loading src='/images/abhi.jpg' data-testid='loading' />
    );
    expect(getByTestId('loading')).toBeTruthy();
    expect(getByTestId('loading-picture')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders <Loading.ReleaseBody/>', () => {
    const { container, getByTestId } = render(
      <Loading.ReleaseBody data-testid='loading' />
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
