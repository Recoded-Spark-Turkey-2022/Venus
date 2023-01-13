import './form.css';
import man from '../../assets/man.png';
import img from '../../assets/signup-vector.svg';

const Form = () => {
  return (
    <section className="h-[130vh] section-form overflow-hidden w-screen md:h-screen relative ">
      <img
        src={img}
        className="2xl:mt-16 absolute image-hero z-0 left-[-500px] md:left-[-200px] lg:left-[-300px] xl:left-[-400px] 2xl:left-[-600px] top-[0px]  w-[100%] h-[110%] "
        alt="circle-logo"
      />
      <div className="BigContainer">
        <div className="Container1">
          <img src={man} alt="p" className="manImg" />

          <button className="cam-btn" type="button">
            <ion-icon size="large" name="camera-outline" />
          </button>
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
          <button type="submit" className="cancel-btn">
            CANCEL
          </button>
        </div>
      </div>
    </section>
  );
};

export default Form;
