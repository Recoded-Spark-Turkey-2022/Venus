import { render, screen} from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";

test('renders nav correctly', ()=>{
  render(
  <Router> 
       <Navbar/> 
   </Router> 
   );
  const Navbars = screen.getByTestId('nav')
  expect(Navbars).toBeInTheDocument();
});