// eslint-disable-next-line no-unused-vars
import * as react from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store} from '../../app/store'
import renderer from 'react-test-renderer';
import Navbar from "./Navbar"

jest.mock('react-i18next', () => ({
  useTranslation: () => ({t: key => key})
}));

it('renders correctly' , () => {
  const tree = renderer.create(
    <Router>
      <Provider store={store}>
        <Navbar />
      </Provider>
    </Router>
  );
  expect(tree).toMatchSnapshot();
});