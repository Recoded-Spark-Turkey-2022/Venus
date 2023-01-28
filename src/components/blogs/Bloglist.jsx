/* eslint-disable react/jsx-boolean-value */
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Pagination, Navigation, Autoplay, EffectFlip } from 'swiper';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate, useParams } from 'react-router-dom';
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
  const [reset, setReset] = useState(false);
  // const [query, setQuery] = useState('');
  const searchQuery = useRef();
  const dispatch = useDispatch();
  const loading = useSelector(loadingState);
  const navigate = useNavigate();
  const params = useParams();
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
  useEffect(() => {
    const arrayForStort = [...data];
    const filteredByDate = arrayForStort?.sort(
      (a, b) => b.timeStamp.seconds - a.timeStamp.seconds
    );
    setData(filteredByDate);
  }, [params.blogId]);
  const scroll = () => {
    const section = document.querySelector('#sorting');
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleSortbyQuery = (e) => {
    e.preventDefault();
    const { value } = searchQuery.current;

    const re = /^[A-Za-z]+$/;
    if (re.test(value) || !value === '') {
      const newData = data.map((obj) =>
        obj.title.toLowerCase().includes(value.toLowerCase()) ? obj : ''
      );
      setReset(true);
      const filteredArr = newData.filter((a) => a !== '');

      setData(filteredArr);
      if (filteredArr.length === 0) {
        setReset(true);
        toast.warn("We couldn't find related match 😔", {
          position: 'top-left',

          autoClose: 1200,

          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          hideProgressBar: true,
          theme: 'light',
          className: 'thanks-tooltip mt-12',
        });
        return;
      }
    }

    if (!re.test(value) && value !== '') {
      toast.warning('Please write a  valid query', {
        position: 'top-left',

        autoClose: 200,

        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        hideProgressBar: true,
        theme: 'light',
        className: 'thanks-tooltip mt-12',
      });
    }
  };

  if (loading) {
    return <Spinner />;
  }
  return (
    <motion.div>
      <div className=" filter flex  flex-col md:flex-row justify-between px-5 pt2 mb-5">
        <h2 className="block text-center md:text-left">{filter} </h2>
        <div className="form-filter flex  justify-center ">
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

          <form className=" inline" onSubmit={(e) => handleSortbyQuery(e)}>
            <input
              type="search"
              className="py-1 px-2"
              placeholder="Search by Title..."
              ref={searchQuery}
              name=""
              required
              id=""
              min={5}
              max={20}
            />
          </form>
        </div>
      </div>
      <div>
        {' '}
        {reset && (
          <button
            type="button"
            className="rounded-full px-3 w-full md:w-fit mr-0 md:mr-7 py-1   mb-5 float-right"
            id="mediumBlue-button"
            onClick={() => {
              setData(data);
              setReset(false);
              searchQuery.current.value = '';
            }}
          >
            Reset Filter{' '}
          </button>
        )}{' '}
      </div>
      <div className="w-full blogs-swipper">
        <Swiper
          effect="flip"
          modules={[Pagination, Navigation, Autoplay, EffectFlip]}
          className="mySwiper cursor-pointer  pb-16 mb-5"
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          autoHeight={true}
        >
          {(allData.length === 0 ? data : allData)?.map((singlePost) => (
            <SwiperSlide
              className="w-full"
              key={`${singlePost.userRef}`}
              onClick={() => navigate(`/blogs/${singlePost.userRef}`)}
            >
              <div className="flex  flex-wrap justify-center w-[100%] ">
                <BlogItem
                  key={`${singlePost.userRef}`}
                  data={singlePost}
                  id={`${singlePost.userRef}`}
                  // eslint-disable-next-line react/jsx-boolean-value
                  fullWidth={true}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        whileInView={{ opacity: 1 }}
        id="sorting"
        className="flex flex-wrap justify-center w-full gap-3"
      >
        {(allData.length === 0 ? data : allData)?.map((singlePost, index) => {
          if (index < 4) {
            return (
              <BlogItem
                key={`${singlePost.userRef}`}
                data={singlePost}
                id={`${singlePost.userRef}`}
                // eslint-disable-next-line react/jsx-boolean-value
                fullWidth={false}
              />
            );
            // eslint-disable-next-line no-else-return
          } else {
            return null;
          }
        })}
      </motion.div>
      <ToastContainer transition={Flip} limit={3} />
    </motion.div>
  );
};

export default Bloglist;
