import { toBeInTheDocument } from "@testing-library/jest-dom/dist/matchers";
import { fireEvent, render, screen, within } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import HeroSection from './HeroSection'

test('renders hero heading correctly', ()=>{
    render(<Router>
        <HeroSection/>
    </Router>);
    const hHeading = screen.getByTestId('banner')
    expect(hHeading).toBeInTheDocument()
})
test('renders sign up button correctly', ()=>{
    render(<Router>
        <HeroSection/>
    </Router>);
    const suButton = screen.getByRole('button')
    expect(suButton).toBeInTheDocument()
})

test('renders images of hero correctly', ()=>{
    render(<Router>
        <HeroSection/>
    </Router>);
    const heroImg = screen.getByTestId('hero-img')
    expect(heroImg).toBeInTheDocument()
})
