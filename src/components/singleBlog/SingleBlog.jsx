import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  AiOutlineShareAlt,
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillHeart,
  AiTwotoneDelete,
} from 'react-icons/ai';
import { CiEdit } from 'react-icons/ci';
import { TfiCommentsSmiley } from 'react-icons/tfi';
import { FaCalendarAlt } from 'react-icons/fa';
import { Flip, toast, ToastContainer } from 'react-toastify';
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { useParams, useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import Container from '../UI/Container';
import {
  fetchListsing,
  getAllListings,
} from '../../features/listings/listingSlice';
import BlogItem from '../blogs/BlogItem';
import './singleBlog.css';

import { authentication, db } from '../../firebase/firebase.config';

const SingleBlog = ({ data }) => {
 console.log(data,"singleBlog")
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const dataStore = useSelector(getAllListings);
  const [tooltip, setTooltip] = useState(false);
  const [docId, setDocId] = useState('');
  const [userToken, setUserToken] = useState('');
  const [userAuth, setUserAuth] = useState('');
  const [upVoteLike, setVote] = useState(data[0]?.upVote);
  const [date, setDate] = useState('');
  const randomNumber = Math.floor(Math.random() * dataStore.length) - 1;
  const randomNum1 = randomNumber > 0 ? randomNumber : 0;
  const randomNum2 = randomNumber > 0 ? randomNumber + 1 : 4;
  const randomArr = [];
  randomArr.push(dataStore[randomNum1]);
  randomArr.push(dataStore[randomNum2]);

  const secondsValue = data[0]?.timeStamp?.seconds;

  useEffect(() => {
    const output = new Date(secondsValue * 1000).toLocaleDateString();
    setDate(output);
    setVote(data[0]?.upVote);
    setTooltip(false);
  }, [secondsValue]);
  useEffect(() => {
    const fetchListingData = async () => {
      try {
        const listingRef = collection(db, 'listings');

        const queryOflist = query(
          listingRef,
          where('userRef', '==', params.blogId)
        );

        const querySnap = await getDocs(queryOflist);

        querySnap.forEach((document) => {
          setDocId(document.id);
          setUserToken(document.data().userId);
        });

        if (!querySnap) {
          console.log('Could not fetch the data');
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    onAuthStateChanged(authentication, async (user) => {
      if (user) {
        setUserAuth(user.uid);
      }
    });
    fetchListingData();
  }, [params.blogId]);
  useEffect(() => {}, []);

  const currentUrl = window.location.href;
  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);

    toast.success('Link Coppied!', {
      position: 'top-left',
      autoClose: 1200,
      className: 'mt-20',
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };
  const shareOnFacebook = () => {
    const facebookShare = 'https://www.facebook.com/sharer/sharer.php?u=';
    const navUrl = facebookShare + currentUrl;

    window.open(navUrl, '_blank');
  };
  const shareOnTwitter = () => {
    const twitterShare = 'https://twitter.com/intent/tweet?text=';
    const navUrl = twitterShare + currentUrl;

    window.open(navUrl, '_blank');
  };
  const isAuthenticated = true;

  const handleLike = () => {
    if (isAuthenticated) {
      toast('Thank You!', {
        position: 'top-left',
        icon: <TfiCommentsSmiley className=" text-rose text-3xl " />,
        autoClose: 1200,

        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        hideProgressBar: true,
        theme: 'light',
        className: 'thanks-tooltip mt-20',
      });
    }

    setVote(upVoteLike + 1);

    setTooltip(true);
  };
  useEffect(() => {
    const updateLike = async () => {
      try {
        if (docId) {
          const docRef = doc(db, 'listings', docId);

          await updateDoc(docRef, { upVoteLike });
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    updateLike();
  }, [upVoteLike]);

  const handleDelete = async () => {
    const documentRef = doc(db, 'listings', params.blogId);
    await deleteDoc(documentRef);
    dispatch(fetchListsing());
    navigate('/userProfile');
  };
  const handleEdit = async () => {
    navigate(`/editblog/${params.blogId}`);
  };

  return (
    <Container>
      <div className="flex mt-[100px] flex-col gap-10 pb-0  md:pb-24 md:flex-row main-container">
        <article className="flex flex-col w-full md:w-[60%] relative">
          <h1 className="text-3xl uppercase font-medium text-center mb-4">
            {data[0]?.title}{' '}
          </h1>
          <div>
            <img
              className="w-[100%] object-cover rounded-xl"
              src={data[0]?.ImageUrl}
              alt={data[0]?.title}
            />
          </div>
          <div className="flex flex-col sm:flex-row  gap-5 sm:gap-1 items-center justify-around my-2">
            <p className="flex  align-middle self-center justify-center items-end ">
              <span>by</span>{' '}
              <img
                className="w-[35px] h-[35px] rounded-full"
                src={data[0]?.avatars[0]}
                alt="avatar"
              />{' '}
              <span> {data[0]?.userName} </span>
            </p>
            <div className="flex gap-3 sm:gap-1 items-end">
              <div className=" flex  gap-5  mr-2">
                <AiOutlineShareAlt
                  onClick={handleCopy}
                  className="text-darkBlue textShadow  text-3xl font-bold duration-300 brightness-110 hover:brightness-50 cursor-pointer"
                />
                <AiFillFacebook
                  onClick={shareOnFacebook}
                  className="text-darkBlue text-3xl font-bold duration-300 brightness-110 hover:brightness-50 cursor-pointer"
                />
                <AiOutlineTwitter
                  onClick={shareOnTwitter}
                  className="text-darkBlue text-3xl font-bold duration-300 brightness-110 hover:brightness-50 cursor-pointer"
                />
              </div>
              <div className="date flex gap-3 items-end">
                <FaCalendarAlt className="text-darkBlue textShadow  self-end text-3xl font-bold duration-300 brightness-110 hover:brightness-50" />
                <span className="self-end">{date} </span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-medium my-3">{data[0]?.text} </h2>
            <p>{data[0]?.content} </p>
          </div>
          <button
            type="button"
            disabled={tooltip}
            onClick={handleLike}
            className="heart-container shadow-md flex items-center h-[43px] justify-center absolute bottom-[-60px] right-5"
          >
            <AiFillHeart className="text-rose text-2xl mr-1 duration-500 brightness-125 hover:brightness-75" />
            <span className="text-lg font-medium">{upVoteLike}</span>
          </button>
          {userAuth === userToken && (
            <button
              type="button"
              onClick={handleLike}
              className="heart-container shadow-md flex items-center  h-[43px] justify-center absolute bottom-[-60px] right-[6rem]"
            >
              <AiTwotoneDelete
                onClick={handleDelete}
                className="text-[#ff3000] text-2xl mr-1 duration-500 brightness-125 hover:brightness-75"
              />
            </button>
          )}
          {userAuth === userToken && (
            <button
              type="button"
              onClick={handleEdit}
              className="heart-container shadow-md flex items-center   h-[43px] justify-center absolute bottom-[-60px] right-[10.3rem]"
            >
              <CiEdit className="text-[#ff8239] font-bolder text-2xl mr-1 duration-500 " />
            </button>
          )}
        </article>
        <aside className="w-full md:w-[40%] h-fit mt-20 md:mt-0 ">
          <h2 className="text-2xl font-medium text-center mb-4">Read Also</h2>
          <div className="flex blog-aside flex-wrap justify-center gap-10 w-full blog-wrapper">
            {randomArr?.map((singlePost) => (
              <BlogItem
                key={singlePost?.userRef}
                data={singlePost}
                // eslint-disable-next-line react/jsx-boolean-value
                fullWidth={true}
              />
            ))}
          </div>
        </aside>
      </div>
      <ToastContainer transition={Flip} limit={3} />
    </Container>
  );
};

export default SingleBlog;
