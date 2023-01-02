import React from "react";
import Cover from "../components/aboutPage/Cover";
import Share from "../components/aboutPage/Share";

import Container from "../components/UI/Container";

const About = () => {
    return (
        <Container>
            <h1 className="text-darkOrange bg-lightBlue">Hello</h1>
            <h1 className="text-darkOrange bg-lightBlue">Hello</h1>
            <h1 className="text-darkOrange bg-lightBlue">Hello</h1>
            <Cover />
            <Share />
        </Container>
    );
};

export default About;