import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from '../Navbar'

it(`renders correctly` , () => {
    const tree = renderer.create(
    <Router>
        <Navbar />
    </Router>);
    expect(tree).toMatchSnapshot();
});