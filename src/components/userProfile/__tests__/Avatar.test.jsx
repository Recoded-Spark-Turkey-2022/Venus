import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from '../../../app/store';
import Avatar from '../Avatar';


describe('Avatar', () => {
    it('renders correctly', () => {
      const tree = renderer
        .create(
          <Router>
            <Provider store={store}>
              <Avatar />
            </Provider>
          </Router>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });