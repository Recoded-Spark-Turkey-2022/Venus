
import './form.css';
import img from '../../assets/signup-vector.svg';

const Form = ({setOpen, onChange, upload, file}) => {

 

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
          { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
          <label htmlFor="file" className="cam-btn text-center" >
            <ion-icon size="large" name="camera-outline" />
          </label>
          <input
                  type="file"
                  id="file"
                  onChange={onChange}
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
          <button onClick={upload} type="submit" className="save-btn">
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
