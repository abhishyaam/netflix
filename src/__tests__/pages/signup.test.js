import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Signup } from '../../pages';
import { act } from 'react-dom/test-utils';

import { FirebaseContext } from '../../context/firebase';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({}),
}));

const firebase = {
  auth: jest.fn(() => ({
    createUserWithEmailAndPassword: {
      user: {
        updateProfile: jest.fn(() => Promise.resolve('I am signed up!')),
      },
    },
  })),
};

describe('<Signup /> ', () => {
  it('renders signup page with a form submission', async () => {
    const { getByTestId, getByPlaceholderText, queryByTestId } = render(
      <Router>
        <FirebaseContext.Provider value={{ firebase }}>
          <Signup />
        </FirebaseContext.Provider>
      </Router>
    );
    console.log(firebase.auth());
    await act(async () => {
      await fireEvent.change(getByPlaceholderText('First Name'), {
        target: { value: 'Abhi' },
      });

      await fireEvent.change(getByPlaceholderText('Email Address'), {
        target: { value: 'abhi@gmail.com' },
      });

      await fireEvent.change(getByPlaceholderText('Password'), {
        target: { value: 'test@123' },
      });

      fireEvent.click(getByTestId('signup'));

      expect(getByPlaceholderText('Email Address').value).toBe(
        'abhi@gmail.com'
      );
      expect(getByPlaceholderText('Password').value).toBe('test@123');
    });
  });
});
