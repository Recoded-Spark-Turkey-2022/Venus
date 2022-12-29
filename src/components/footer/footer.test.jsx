import { toBeInTheDocument } from "@testing-library/jest-dom/dist/matchers";
import { fireEvent, render, screen, within } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import user from '@testing-library/user-event';
import Footer from "./Footer";


test('renders logo correctly', ()=>{
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
})