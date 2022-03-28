import React from 'react';
import { Picture, Spinner, LockBody, ReleaseBody } from './styles/loading';

export default function Loading({ src, ...restProps }) {
  return (
    <Spinner {...restProps}>
      <LockBody />
      <Picture src={`/images/users/${src}.png`} data-testid='loading-picture' />
    </Spinner>
  );
}

Loading.ReleaseBody = function LoadingRealeaseBody({ src, ...restProps }) {
  return <ReleaseBody />;
};
