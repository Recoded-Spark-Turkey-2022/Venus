import React from 'react';
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "../Footer";

it(`renders correctly` , () => {
    const tree = renderer.create(
    <Router>
        <Footer />
    </Router>);
    expect(tree).toMatchSnapshot();
});

/* test('renders logo correctly', ()=>{
    render(<Router>
        <Footer/>
    </Router>);
    const websiteLogo = screen.getByRole('img')
    expect(websiteLogo).toBeInTheDocument()
})

test('renders footer Links correctly', ()=>{
    render(<Router>
        <Footer/>
    </Router>);
    const fLinks = screen.getByTestId('f-links')
    expect(fLinks).toBeInTheDocument()
})

test('renders sign up button correctly', ()=>{
    render(<Router>
        <Footer/>
    </Router>);
    const suButton = screen.getByRole('button')
    expect(suButton).toBeInTheDocument()
})

test('onChange is called when user change the option', ()=>{
    render(<Router>
             <Footer/>
           </Router>);
    const selectLang = screen.getByRole('combobox')
    fireEvent.change(selectLang, {target: {value: 'English'}})
    expect(selectLang.value).toBe('English')
}) */