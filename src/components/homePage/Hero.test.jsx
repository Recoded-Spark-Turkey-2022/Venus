import renderer from "react-test-renderer";
import { Provider } from 'react-redux';
import {store} from '../../app/store';
import { BrowserRouter as Router } from "react-router-dom";
import HeroSection from './HeroSection'

jest.mock('react-i18next', () => ({
    useTranslation: () => {
      return {
        t: (str) => str
      };
    },
  }));
  
  it(`renders correctly` , () => {
    const tree = renderer.create(
    <Router>
      <Provider store={store}>
        <HeroSection />
        </Provider>
    </Router>);
    expect(tree).toMatchSnapshot();
});
