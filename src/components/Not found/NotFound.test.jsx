import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import NotFound from './NotFound'


it(`renders correctly` , () => {
    const tree = renderer.create(
    <Router>
        <NotFound />
    </Router>);
    expect(tree).toMatchSnapshot();
});