import React, { useEffect, useState, useRef } from 'react';
import { Pagination, Navigation, Autoplay, EffectFade } from 'swiper';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';
import { Flip, toast, ToastContainer } from 'react-toastify';
import 'swiper/swiper-bundle.css';
import './blogs.css';
import {
  fetchListsing,
  getAllListings,
  loadingState,
} from '../../features/listings/listingSlice';
import BlogItem from './BlogItem';
import Spinner from '../spinner/Spinner';

const Bloglist = () => {
  const data = useSelector(getAllListings);
  const [filter, setFilter] = useState('');
  const [allData, setData] = useState(data);
  // const [query, setQuery] = useState('');
  const searchQuery = useRef(null);
  const dispatch = useDispatch();
  const loading = useSelector(loadingState);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchListsing());
  }, []);

  if (data.length > 0) {
    // console.log(data);
    // console.log(filteredByDate);
  }
  useEffect(() => {
    const arrayForStort = [...data];
    const arrayForStort2 = [...data];
    const filteredByDate = arrayForStort?.sort(
      (a, b) => b.timeStamp.seconds - a.timeStamp.seconds
    );
    const filteredByPopularity = arrayForStort2?.sort(
      (a, b) => b.upVote - a.upVote
    );

    if (filter === 'Popularity') {
      setData(filteredByPopularity);
    } else if (filter === 'Most Recent') {
      setData(filteredByDate);
    }
  }, [filter]);
  const scroll = () => {
    const section = document.querySelector('#sorting');
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleSortbyQuery = (e) => {
    e.preventDefault();
    const { value } = searchQuery.current;

    const re = /^[A-Za-z]+$/;
    if (value === '' || re.test(value)) {
      const newData = data.map((obj) =>
        obj.title.toLowerCase().includes(value.toLowerCase()) ? obj : ''
      );
      const filteredArr = newData.filter((a) => a !== '');
      setData(filteredArr);
    } else {
      toast.warning('Please write a  valid query', {
        position: 'top-left',

        autoClose: 200,

        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        hideProgressBar: true,
        theme: 'light',
        className: 'thanks-tooltip',
      });
    }
  };
  // const onSearchChange = (e) => {

  // };
  if (loading) {
    return <Spinner />;
  }
  return (
    <div>
      <div className=" filter flex justify-between px-5 pt2 mb-5">
        <h2>{filter} </h2>
        <div className="form-filter">
          <select
            className="py-1 px-2"
            onChange={(e) => {
              setFilter(e.currentTarget.value);
              scroll();
            }}
          >
            <option hidden value="Sort by">
              Sort by{' '}
            </option>
            <option className="py-1 px-2" value="Most Recent">
              Most Recent
            </option>
            <option value="Popularity">Popularity</option>
          </select>

          <form className="inline" onSubmit={(e) => handleSortbyQuery(e)}>
            <input
              type="search"
              required
              className="py-1 px-2"
              placeholder="Search by Title..."
              ref={searchQuery}
              name=""
              id=""
              min={5}
              max={20}
            />
          </form>
        </div>
      </div>

      <div className="w-full blogs-swipper">
        <Swiper
          fadeEffect="fade"
          modules={[Pagination, Navigation, Autoplay, EffectFade]}
          className="mySwiper cursor-pointer"
          autoplay={{
            delay: 15000,
            disableOnInteraction: true,
          }}
        >
          {(allData.length === 0 ? data : allData)?.map((singlePost) => (
            <SwiperSlide
              key={singlePost.userRef}
              onClick={() => navigate(`/blogs/${singlePost.userRef}`)}
            >
              <div className="flex flex-wrap justify-center w-full ">
                <BlogItem
                  key={singlePost.userRef}
                  {...singlePost}
                  // eslint-disable-next-line react/jsx-boolean-value
                  fullWidth={true}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div id="sorting" className="flex flex-wrap justify-center w-full gap-3">
        {(allData.length === 0 ? data : allData)?.map((singlePost, index) => {
          if (index < 4) {
            return (
              <BlogItem
                key={singlePost.userRef}
                {...singlePost}
                // eslint-disable-next-line react/jsx-boolean-value
                fullWidth={false}
              />
            );
            // eslint-disable-next-line no-else-return
          } else {
            return null;
          }
        })}
      </div>
      <ToastContainer transition={Flip} limit={3} />
    </div>
  );
};

export default Bloglist;
