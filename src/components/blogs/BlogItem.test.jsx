import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import BlogItem from './BlogItem';

const user = {
  avatars: '1',
  Imageurl: '1',
  text: '1',
  title: '1',
  userName: '1',
  userRef: '1',
  upVote: '1',
};

test('renders 1 blog item correctly', ()=>{
 const tree= renderer.create(
 <Router>
    <BlogItem data={user}/>
 </Router>).toJSON();
 expect(tree).toMatchSnapshot();
})

