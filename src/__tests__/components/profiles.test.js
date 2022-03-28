import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Profiles } from '../../components';

describe('<Profiles />', () => {
  it('renders <Profiles /> with populated data', () => {
    const { container, getByText, getByTestId } = render(
      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>

        <Profiles.List>
          <Profiles.User onClick={() => {}}>
            <Profiles.Picture
              src='/images/test.png'
              data-testid='profile-picture'
            />
            <Profiles.Name>Abhishyam</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    );

    expect(getByText("Who's watching?"));
    expect(getByTestId('profile-picture')).toBeTruthy();
    expect(getByText('Abhishyam')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders a misc profile image', () => {
    const { container, getByText, getByTestId } = render(
      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>

        <Profiles.List>
          <Profiles.User onClick={() => {}}>
            <Profiles.Picture
              src='/images/test.png'
              data-testid='profile-picture-misc'
            />
            <Profiles.Name>Abhishyam</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    );

    expect(getByText("Who's watching?"));
    expect(getByTestId('profile-picture-misc')).toBeTruthy();
    expect(getByText('Abhishyam')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
