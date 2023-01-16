import { onAuthStateChanged } from 'firebase/auth';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';

import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { authentication, db } from '../../firebase/firebase.config';
import Spinner from '../spinner/Spinner';

const WriteBlogC = () => {
  const [data, setData] = useState({
    image: {},
    content: '',
    title: '',
    text: 'Lorem Impus sit ',

    upVote: 0,

    avatars:
      'https://firebasestorage.googleapis.com/v0/b/capstoneprojectrefubook.appspot.com/o/Avatar%2Ffemale-avatar.svg?alt=media&token=de54c1a8-8970-4b23-b9be-a5d875b9b12e',
  });
  const [loading, setLoading] = useState(false);

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
          setData({ ...data, userRef: user.uid, userName: user.displayName });
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

    setLoading(true);
    if (data.ImageUrl?.length > 2) {
      alert('You cannot upload more than on');
    }

    const storeImage = async (image) => {
      return new Promise((resolve, reject) => {
        const storage = getStorage();
        const fileName = `${authentication.currentUser.uid}-${image.name}`;
        const storageRef = ref(storage, `BlogBanner/${fileName}`);
        const uploadedTask = uploadBytesResumable(storageRef, image);

        uploadedTask.on(
          'state_changed',
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(`Upload is ${progress}% done`);
            // eslint-disable-next-line default-case
            switch (snapshot.state) {
              case 'paused':
                console.log('Upload is paused');
                break;
              case 'running':
                console.log('Upload is running');
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
      [...data.ImageUrl].map((image) => storeImage(image))
    ).catch(() => {
      setLoading(false);
      toast.error('images not uploaded');
    });
    const dataUpdated = {
      ...data,
      ImageUrl: updatedImageUrl[0],
      timeStamp: serverTimestamp(),
    };
    delete data.image;

    console.log(dataUpdated);
    const docRef = await addDoc(collection(db, 'listings'), dataUpdated);
    if (docRef.id) {
      setLoading(false);
      toast.success('Listing saved');
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
            className="bg-white px-3 py-2.5"
            type="file"
            id="ImageUrl"
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
            placeholder="Write Title"
            required
            onChange={handleChange}
            id="title"
            className="border-1 border border-darkGrey"
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
            className="rounded-full border border-1 border-darkGrey"
          />
        </div>
        <div className="flex justify-center md:justify-start items-center mt-2">
          <button
            onClick={submitBlog}
            id="mediumBlue-button"
            className="w-32 rounded-full mt-2 whitespace-nowrap py-2"
            type="submit"
          >
            Submit Blog
          </button>
        </div>
      </form>
    </div>
  );
};
export default WriteBlogC;
