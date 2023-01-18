import { onAuthStateChanged } from 'firebase/auth';
import {
  addDoc,
  collection,
  doc,
  getDoc,
  serverTimestamp,
  updateDoc,
} from 'firebase/firestore';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';

import { useRef, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { Flip, toast, ToastContainer } from 'react-toastify';
import { fetchListsing } from '../../features/listings/listingSlice';

import { authentication, db } from '../../firebase/firebase.config';
import Spinner from '../spinner/Spinner';

const WriteBlogC = () => {
  const imageRef = useRef();
  const [data, setData] = useState({
    content: '',
    title: '',
    text: '',

    upVote: 0,

    avatars:
      'https://firebasestorage.googleapis.com/v0/b/capstoneprojectrefubook.appspot.com/o/Avatar%2Ffemale-avatar.svg?alt=media&token=de54c1a8-8970-4b23-b9be-a5d875b9b12e',
  });
  const { content, title, text } = data;
  const [loading, setLoading] = useState(false);
  const [docId, setDocId] = useState('');
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const isMounted = useRef(true);
  useEffect(() => {
    if (isMounted) {
      onAuthStateChanged(authentication, (user) => {
        if (user) {
          //   const userInfo = {
          //     userName: user.displayName,
          //     userRef: user.uid,
          //   };
          setData({ ...data, userId: user.uid, userName: user.displayName });
        } else {
          navigate('/');
        }
      });
    }
    return () => {
      isMounted.current = false;
    };
  }, []);
  const submitBlog = async (e) => {
    e.preventDefault();

    // Validation of form
    if (data && title && text && content) {
      if (title.length < 5 || text.length < 5) {
        toast.warn('Your Header texts should be min 5 character', {
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
        return;
      }
      if (content.length < 20) {
        toast.warn('Your Blog content  should be min 20 character', {
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
        return;
      }

      if (imageRef.current.files.length === 0) {
        toast.warning('You must upload a cover photo for your blog', {
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
        return;
      }
      setLoading(true);

      const storeImage = async (imageData) => {
        return new Promise((resolve, reject) => {
          const storage = getStorage();
          const fileName = `${authentication.currentUser.uid}-${
            imageData.name
          }-${Math.random()}`;
          const storageRef = ref(storage, `BlogBanner/${fileName}`);
          const uploadedTask = uploadBytesResumable(storageRef, imageData);

          uploadedTask.on(
            'state_changed',
            (snapshot) => {
              // const progress =
              //   (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              // console.log(`Upload is ${progress}% done`);
              // eslint-disable-next-line default-case
              switch (snapshot.state) {
                case 'paused':
                  // console.log('Upload is paused');
                  break;
                case 'running':
                  // console.log('Upload is running');
                  break;
              }
            },
            (error) => {
              reject(error);
            },
            () => {
              getDownloadURL(uploadedTask.snapshot.ref).then((downloadUrl) => {
                resolve(downloadUrl);
              });
            }
          );
        });
      };
      const updatedImageUrl = await Promise.all(
        [...data.ImageUrl].map((imageUrl) => storeImage(imageUrl))
      ).catch(() => {
        setLoading(false);
        toast.error('images not uploaded', {
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
      });
      const dataUpdated = {
        ...data,
        ImageUrl: updatedImageUrl[0],
        timeStamp: serverTimestamp(),
      };

      const docRef = await addDoc(collection(db, 'listings'), dataUpdated);

      dispatch(fetchListsing());
      if (docRef.id) {
        setDocId(docRef.id);

        // updating current id with collection id

        await updateDoc(docRef, { userRef: docRef.id });

        const currentDocRef = doc(db, 'listings', docRef.id);
        await getDoc(currentDocRef);

        setLoading(false);
        toast.success('Listing saved', {
          position: 'top-left',
          autoClose: 3000,
          className: 'mt-20',
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
        navigate(`/blogs/`);
      }
    } else {
      toast.warn('You should fill empty areas', {
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
    }
  };
  const handleChange = (e) => {
    let boolean = null;
    if (e.target.value === 'true') {
      boolean = true;
    }
    if (e.target.value === 'false') {
      boolean = false;
    }

    // files
    if (e.target.files) {
      setData((prevState) => ({
        ...prevState,
        ImageUrl: e.target.files,
      }));
    }

    // text//booleans/Numbers
    if (!e.target.files) {
      setData((prevState) => ({
        ...prevState,
        [e.target.id]: boolean ?? e.target.value,
      }));
    }
  };
  useEffect(() => {
    const updateLike = async () => {
      try {
        if (docId) {
          // dispatch(addToListing({}));
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    updateLike();
  }, [docId]);

  if (loading) return <Spinner />;
  return (
    <div className="w-full">
      <form
        name="contact"
        className="flex flex-col justify-center md:justify-start "
        onSubmit={submitBlog}
      >
        <div className="image-div flex flex-col  gap-2 my-2 text-darkGrey">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label className="" htmlFor="imageUrl">
            Choose a banner image:
          </label>
          <input
            className="bg-white w-full px-3 py-2.5"
            type="file"
            id="ImageUrl"
            ref={imageRef}
            onChange={handleChange}
            max="1"
            accept="image/png, image/jpeg"
            required
          />
        </div>
        <div className="input-div flex flex-col  mt-5 gap-2 my-2 ">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label className="text-darkGrey">Title:</label>
          <input
            type={text}
            placeholder="Write Title"
            required
            onChange={handleChange}
            id="title"
            className="border-1  w-full border border-darkGrey"
          />
        </div>
        <div className="input-div flex flex-col  mt-5 gap-2 my-2 ">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label className="text-darkGrey">Article Preview</label>
          <input
            placeholder="You write your blog preview.."
            required
            type={text}
            onChange={handleChange}
            id="text"
            className="border-1 border w-full border-darkGrey"
          />
        </div>
        <div className="blog-div flex flex-col  mt-5 gap-2 my-2">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label className="text-darkGrey">Blog:</label>
          <textarea
            placeholder="Write Blog"
            required
            onChange={handleChange}
            id="content"
            className="rounded-full border max-h-[300px] border-1 border-darkGrey"
          />
        </div>
        <div className="flex justify-center md:justify-start items-center mt-2">
          <button
            // eslint-disable-next-line react/jsx-boolean-value

            onClick={submitBlog}
            id="mediumBlue-button"
            className="w-32 rounded-full mt-2 whitespace-nowrap py-2"
            type="submit"
          >
            Submit Blog
          </button>
        </div>
      </form>
      <ToastContainer transition={Flip} limit={3} />
    </div>
  );
};
export default WriteBlogC;
