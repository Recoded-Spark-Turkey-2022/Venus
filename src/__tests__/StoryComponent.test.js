import * as react from 'react';
import StoryComponent from '../components/StoryComponent';
import renderer from "react-test-renderer";

it(`renders correctly` , () => {
    const tree = renderer.create(<StoryComponent />);
    expect(tree).toMatchSnapshot();
});

