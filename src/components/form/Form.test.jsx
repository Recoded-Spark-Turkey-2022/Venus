import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import Form from './Form';

const props = {
    setOpen: 'test',
    onChange: 'test',
    file: 'test',
    image: 'test',
    setImage: 'test',
    setName: 'test',
    name: 'test'
  };

describe('Form', () => {
    it('renders correctly', () => {
      const tree = renderer
        .create(
            <Provider store={store}>
              <Form data={props} />
            </Provider>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });