import { fireEvent, render, screen, within } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './Navbar'

test('renders navbar logo correctly', ()=>{
    render(<Router>
        <Navbar/>
    </Router>);
    const navbarLogo = screen.getByRole('img')
    expect(navbarLogo).toBeInTheDocument()
})

test('renders navbar links correctly', ()=>{
    render(<Router>
        <Navbar/>
    </Router>);
    const nLinks = screen.getByTestId('n-links')
    expect(nLinks).toBeInTheDocument()
})

test('renders sign in button correctly', ()=>{
    render(<Router>
        <Navbar/>
    </Router>);
    const siButton = screen.getByTestId('si-button')
    expect(siButton).toBeInTheDocument()
})

test('renders sign in button correctly', ()=>{
    render(<Router>
        <Navbar/>
    </Router>);
    const hButton = screen.getByTestId('h-menu')
    expect(hButton).toBeInTheDocument()
})