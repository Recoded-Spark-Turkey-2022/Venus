import {render, screen } from "@testing-library/react";
import Spinner from './Spinner'

test('renders container component correctly', ()=>{
    render(
        <Spinner />
    );
    const spinnerc = screen.getByTestId('spinner')
    expect(spinnerc).toBeInTheDocument()
})