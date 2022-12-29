import {render, screen } from "@testing-library/react";
import Container from '../Container'

test('renders container component correctly', ()=>{
    render(
        <Container />
    );
    const container = screen.getByTestId('container')
    expect(container).toBeInTheDocument()
})