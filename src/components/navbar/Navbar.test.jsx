import React from "react";
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (str) => str
    };
  },
}));

  
  describe('Navbar', () => {
    it('renders correctly', () => {
      const tree = renderer
        .create(
          <Router>
            <Provider store={store}>
              <Navbar />
            </Provider>
          </Router>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });