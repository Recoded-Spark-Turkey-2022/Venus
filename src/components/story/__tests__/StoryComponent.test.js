// eslint-disable-next-line no-unused-vars
import * as react from 'react';
import renderer from 'react-test-renderer';
import StoryComponent from '../StoryComponent';

it(`renders correctly`, () => {
  const tree = renderer.create(<StoryComponent />);
  expect(tree).toMatchSnapshot();
});
