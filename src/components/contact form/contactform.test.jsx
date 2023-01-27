import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import ContactForm from './ContactForm';

jest.mock('react-i18next', () => ({
    // this mock makes sure any components using the translate hook can use it without a warning being shown
    useTranslation: () => {
      return {
        t: (str) => str
      };
    },
  }));

describe('Contact Form', () => {
    it('renders correctly', () => {
      const tree = renderer
        .create(
            <Provider store={store}>
              <ContactForm />
            </Provider>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });