import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from '../../app/store';
import EditBlog from './EditBlog';



describe('EditBlog', () => {
    it('renders correctly', () => {
      const tree = renderer
        .create(
          <Router>
            <Provider store={store}>
              <EditBlog />
            </Provider>
          </Router>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });