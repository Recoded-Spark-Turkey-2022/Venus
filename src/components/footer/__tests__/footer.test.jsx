import React from 'react';
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "../Footer";

jest.mock('react-i18next', () => ({
    useTranslation: () => ({t: key => key})
  }));
  
it(`renders correctly` , () => {
    const tree = renderer.create(
    <Router>
        <Footer />
    </Router>);
    expect(tree).toMatchSnapshot();
});

