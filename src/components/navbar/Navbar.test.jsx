import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";

 jest.mock('react-i18next', () => ({
    useTranslation: () => ({t: key => key})
  }));  

  jest.mock('react-redux', () => ({
    useSelector: () => ({
      user: {
        name: 'test',
      },
    }),
    useDispatch: () => jest.fn(),
  }));
  
  describe('Navbar', () => {
    it('renders correctly', () => {
      const tree = renderer.create(
      <Router>
        <Navbar />
        </Router>).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });