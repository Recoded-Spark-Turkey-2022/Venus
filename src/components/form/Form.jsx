import './form.css';
import { useEffect, useState, useRef } from 'react';
import { Flip, toast, ToastContainer } from 'react-toastify';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { onAuthStateChanged } from 'firebase/auth';
import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { authentication, db, storage } from '../../firebase/firebase.config';

import img from '../../assets/signup-vector.svg';

const Form = ({ setOpen, onChange, file }) => {
  const [image, setImage] = useState();
  const nameInput = useRef();
  const surNameInput = useRef();
  const biographyInput = useRef();
  const locationInput = useRef();
  const handleCancel = () => {
    setOpen(false);
  };

  const uploadFile = async (e) => {
    e.preventDefault();

    const storeImage = async (imageData) => {
      return new Promise((resolve, reject) => {
        const name = new Date().getTime() + imageData.name;
        const storageRef = ref(storage, `Avatar/${name}`);

        const uploadTask = uploadBytesResumable(storageRef, imageData);

        uploadTask.on(
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
            reject(error, 'error');
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              resolve(downloadURL);
            });
          }
        );
      });
    };

    const updateImageUrl = await Promise.all(
      [...file.ImageUrl].map((avatar) => storeImage(avatar))
    ).catch(() => {
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

    onAuthStateChanged(authentication, async (user) => {
      if (user) {
        try {
          const listingRef = collection(db, 'listings');
          const queryRef = query(
            listingRef,
            where('userId', '==', authentication?.currentUser.uid)
          );

          const querySnap = await getDocs(queryRef);

          // Updating avatar image
          querySnap.docs.forEach(async (singleDoc) => {
            const reference = singleDoc.ref;
            console.log(updateImageUrl, 'line 93');
            await updateDoc(reference, { avatars: updateImageUrl });
          });
        } catch (error) {
          console.log(error);
        }
      }
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const enteredName = nameInput.current.value;
    const enteredSurName = surNameInput.current.value;
    const enteredbiographyInput = biographyInput.current.value;
    const enteredlocationInput = locationInput.current.value;

    onAuthStateChanged(authentication, async (user) => {
      try {
        if (user) {
          // updating user Information
          const docRef = doc(db, 'users', user.uid);

          const obj = {
            name: enteredName,
            surName: enteredSurName,
            biography: enteredbiographyInput,
            location: enteredlocationInput,
          };
          await updateDoc(docRef, obj);

          // updating listing name info
          const listingRef = collection(db, 'listings');
          const queryRef = query(
            listingRef,
            where('userId', '==', authentication?.currentUser.uid)
          );

          const querySnap = await getDocs(queryRef);

          // Updating avatar image
          querySnap.docs.forEach(async (singleDoc) => {
            const reference = singleDoc.ref;

            await updateDoc(reference, { userName: enteredName });
          });
        }
      } catch (error) {
        console.log(error);
      }
    });
    e.target.reset();
  };

  useEffect(() => {
    onAuthStateChanged(authentication, async (user) => {
      try {
        if (user) {
          const listingRef = collection(db, 'listings');
          const queryRef = query(
            listingRef,
            where('userId', '==', authentication?.currentUser.uid)
          );
          const listing = [];
          const querySnap = await getDocs(queryRef);
          querySnap.forEach((document) => {
            return listing.push(document.data());
          });
          setImage(listing[0].avatars);
        }
      } catch (error) {
        console.log(error);
      }
    });
  }, []);

  return (
    <section className="h-[130vh] section-form overflow-hidden w-screen md:h-[120vh] relative ">
      <img
        src={img}
        className="2xl:mt-16 absolute image-hero z-0 left-[-500px] md:left-[-200px] lg:left-[-300px] xl:left-[-400px] 2xl:left-[-600px] top-[0px]  w-[100%] h-[110%] "
        alt="circle-logo"
      />
      <div className="BigContainer">
        <div className="Container1">
          <form
            onSubmit={uploadFile}
            className=" flex flex-col items-center justify-center mb-5"
          >
            <div className="image-wrapper">
              <img
                src={
                  image ||
                  'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
                }
                alt="profile"
                className="manImg"
              />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="file" className="cam-btn">
                <ion-icon size="large" name="camera-outline" />
              </label>
            </div>
            <input
              type="file"
              id="file"
              onChange={onChange}
              style={{ display: 'none' }}
            />
            <button
              type="submit"
              className="rounded-2xl py-1 px-2 "
              id="mediumBlue-button"
            >
              Upload Avatar
            </button>
          </form>

          <h1 className="name">Hi I am Here</h1>
        </div>
        <div className="Container2">
          <form onSubmit={handleSubmit}>
            <div className="name-sur">
              <div className="name-div">
                <h1>Name:</h1>
                <input
                  type="text"
                  name="name"
                  required
                  ref={nameInput}
                  className="nameform"
                />
              </div>
              <div className="sur-div">
                <h1>Surname:</h1>
                <input
                  type="text"
                  name="surname"
                  ref={surNameInput}
                  className="surname"
                />
              </div>
            </div>
            <div className="Bio">
              <div className="Bio-div">
                <h1>Biography:</h1>
                <input
                  type="text"
                  ref={biographyInput}
                  name="Biography"
                  className="Biography"
                />
              </div>
              <div className="Loc-div">
                <h1>Location:</h1>
                <input
                  type="text"
                  name="Location"
                  ref={locationInput}
                  required
                  className="Location"
                />
              </div>
            </div>
            <button type="submit" className="save-btn">
              SAVE
            </button>
          </form>
        </div>
        <div className="Container4">
          <button type="submit" className="save-btn">
            SAVE
          </button>
          <button type="button" className="cancel-btn" onClick={handleCancel}>
            CANCEL
          </button>
        </div>
      </div>
      <ToastContainer transition={Flip} limit={3} />
    </section>
  );
};

export default Form;
