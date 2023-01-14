import { useEffect, useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
 import { storage } from "../../firebase/firebase.config";
import './form.css';
import img from '../../assets/signup-vector.svg';

const Form = ({setOpen}) => {

  const [file, setFile] = useState("");
 const [data, setData] = useState({});
  

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;
      console.log(name);
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  console.log(data);



  const handleCancel=()=>{
    setOpen(false);
    
  }

  return (
    <section className="h-[130vh] section-form overflow-hidden w-screen md:h-screen relative ">
      <img
        src={img}
        className="2xl:mt-16 absolute image-hero z-0 left-[-500px] md:left-[-200px] lg:left-[-300px] xl:left-[-400px] 2xl:left-[-600px] top-[0px]  w-[100%] h-[110%] "
        alt="circle-logo"
      />
      <div className="BigContainer">
        <div className="Container1">
          <img src={
                file ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              } alt="profile" className="manImg" />

          <label htmlFor="file" className="cam-btn" >
            <ion-icon size="large" name="camera-outline" />
          </label>
          <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
          <h1 className="name">Hi I am Here</h1>
        </div>
        <div className="Container2">
          <form>
            <div className="name-sur">
              <div className="name-div">
                <h1>Name:</h1>
                <input type="text" name="name" className="nameform" />
              </div>
              <div className="sur-div">
                <h1>Surname:</h1>
                <input type="text" name="surname" className="surname" />
              </div>
            </div>
            <div className="Bio">
              <div className="Bio-div">
                <h1>Biography:</h1>
                <input type="text" name="Biography" className="Biography" />
              </div>
              <div className="Loc-div">
                <h1>Location:</h1>
                <input type="text" name="Location" className="Location" />
              </div>
            </div>
          </form>
        </div>
        <div className="Container4">
          <button type="submit" className="save-btn">
            SAVE
          </button>
          <button type="submit" className="cancel-btn" onClick={handleCancel}>
            CANCEL
          </button>
        </div>
      </div>
    </section>
  );
};

export default Form;
