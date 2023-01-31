import React from 'react';
import renderer from "react-test-renderer";
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { BrowserRouter as Router } from "react-router-dom";
import SigninForm from "./SigninForm";

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
        <SigninForm />
        </Provider>
    </Router>);
    expect(tree).toMatchSnapshot();
});
