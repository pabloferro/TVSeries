import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import {mockedNavigate} from '../../../../jest/setup';
import {EXAMPLE_SHOW} from './__test__/exampleShow';

import ShowThumbnail from '.';

jest.mock(
  '../../../favorites/components/FavoriteIndicator',
  () => 'MockedFavoriteIndicator',
);

test('renders correctly with rating', () => {
  const {toJSON} = render(<ShowThumbnail show={EXAMPLE_SHOW} />);
  expect(toJSON()).toMatchSnapshot();
});

test('renders correctly without rating', () => {
  const {toJSON} = render(
    <ShowThumbnail show={{...EXAMPLE_SHOW, rating: undefined}} />,
  );
  expect(toJSON()).toMatchSnapshot();
});

test('displays the name of the show', () => {
  const {getByText} = render(<ShowThumbnail show={EXAMPLE_SHOW} />);

  expect(getByText(EXAMPLE_SHOW.name)).toBeTruthy();
});

test('displays the poster of the show', () => {
  const {getByA11yLabel} = render(<ShowThumbnail show={EXAMPLE_SHOW} />);

  const poster = getByA11yLabel(`Poster of ${EXAMPLE_SHOW.name}`);

  expect(poster.props.source).toEqual({uri: EXAMPLE_SHOW.image?.medium});
});

test('navigates to ShowDetailScreen on press', () => {
  const {getByA11yRole} = render(<ShowThumbnail show={EXAMPLE_SHOW} />);

  const thumbnail = getByA11yRole('button');
  fireEvent.press(thumbnail);

  expect(mockedNavigate).toHaveBeenCalledWith('ShowDetail', {
    show: EXAMPLE_SHOW,
  });
});
