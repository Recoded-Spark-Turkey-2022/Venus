import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from '../../app/store';
import SingleBlog from './SingleBlog';


const props = {
    avatars: 'test',
    title: 'test',
    userName: 'test',
    text: 'test',
    content: 'test',
    ImageUrl: 'test',
    timeStamp: 'test',
    userRef:"test",
    upVote: 'test'
  };

describe('SingleBlog', () => {
    it('renders correctly', () => {
      const tree = renderer
        .create(
          <Router>
            <Provider store={store}>
              <SingleBlog data={props} />
            </Provider>
          </Router>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });