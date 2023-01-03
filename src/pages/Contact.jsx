import ContactForm from "../components/contact form/ContactForm";
import Container from "../components/UI/Container";
import man from '../assets/concact.svg'

const Contact = () => {
    return (
      <div className="bg-transparent md:bg-inlightBlue mt-10 ">
       <Container>
        <div className=" drop-shadow-none md:drop-shadow-xl grid grid-cols-1 md:grid-cols-2  gap-6 pt-12 md:p-20">
         <div className="grid justify-items-center md:justify-items-start">
          <h1 className="text-darkBlue text-center md:text-left text-5xl font-bold mb-5">
            Get in Touch
          </h1>
          <p className="text-center md:text-left text-darkGrey text-m mb-8">
          We would love to hear from you.
          </p>
         <div className="grid justify-items-start md:justify-items-center w-full md:w-2/3">
         <ContactForm/>
         </div>
         </div>
         <div className="flex justify-center items-center row-end-1 md:col-end-3">
          <img src={man} alt="Bannerimage"/>
         </div>
         </div>
       
       </Container>
       </div>
  
  
      
    );
  };
  
  export default Contact;