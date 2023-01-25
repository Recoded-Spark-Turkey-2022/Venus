// eslint-disable-next-line no-unused-vars
import * as react from 'react';
import renderer from 'react-test-renderer';
import StoryComponent from '../StoryComponent';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

it(`renders correctly`, () => {
  const tree = renderer.create(<StoryComponent />);
  expect(tree).toMatchSnapshot();
});
