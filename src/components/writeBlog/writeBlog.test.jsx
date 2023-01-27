import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from '../../app/store';
import WriteBlog from './WriteBlog';

jest.mock('react-i18next', () => ({
    useTranslation: () => {
      return {
        t: (str) => str
      };
    },
  }));

describe('WriteBlog', () => {
    it('renders correctly', () => {
      const tree = renderer
        .create(
          <Router>
            <Provider store={store}>
              <WriteBlog />
            </Provider>
          </Router>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });