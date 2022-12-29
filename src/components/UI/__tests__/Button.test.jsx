import {render, screen } from "@testing-library/react";

import Button from '../Button'

test('renders button component correctly', ()=>{
    render(
        <Button/>
    );
    const buttonComp = screen.getByRole('button')
    expect(buttonComp).toBeInTheDocument()
})