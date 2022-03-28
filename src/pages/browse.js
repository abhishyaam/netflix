import React from 'react';
import { useContent } from '../hooks';
import selectionFilter from '../utils/selection-filter';
import BrowseContainer from '../containers/browse';

export default function Browse() {
  //we need films and series
  // we need slides
  //pass it to browser container
  const { series } = useContent('series');
  const { films } = useContent('films');

  const slides = selectionFilter({ series, films });
  return <BrowseContainer slides={slides} />;
}
