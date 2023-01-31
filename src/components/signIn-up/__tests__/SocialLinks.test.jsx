import React from 'react';
import renderer from "react-test-renderer";
import { Provider } from 'react-redux';
import { store } from '../../../app/store';
import { BrowserRouter as Router } from "react-router-dom";
import SocialLinks from "../SocialLinks";



  it(`renders correctly` , () => {
    const tree = renderer.create(
    <Router>
      <Provider store={store}>
        <SocialLinks />
        </Provider>
    </Router>);
    expect(tree).toMatchSnapshot();
});