import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from '../../../app/store';
import BlogsCard from '../BlogsCard';


describe('BlogsCard', () => {
    it('renders correctly', () => {
      const tree = renderer
        .create(
          <Router>
            <Provider store={store}>
              <BlogsCard />
            </Provider>
          </Router>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });