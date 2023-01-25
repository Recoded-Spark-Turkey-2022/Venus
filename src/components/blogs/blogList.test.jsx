import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from '../../app/store';
import Bloglist from './Bloglist';

jest.mock('swiper/react', () => ({
    Swiper: 'Swiper',
    SwiperSlide: 'SwiperSlide',
  }));
  
  jest.mock('swiper', () => ({
    Pagination: 'Pagination',
    Navigation: 'Navigation',
    Autoplay: 'Autoplay',
    EffectFlip: 'EffectFlip'
  }));

  const props = {
    filter: 'test',
    searchQuery: 'test',
    userRef: 'test'
  };

  describe('Bloglist', () => {
    it('renders correctly', () => {
      const tree = renderer
        .create(
          <Router>
            <Provider store={store}>
              <Bloglist item={props} />
            </Provider>
          </Router>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

