import Container from "../components/UI/Container";
import BlogsCard from "../components/userProfile/BlogsCard";
import article from '../data/Article'
import circleLogo from '../assets/signup-vector.svg';

const UserProfile = () => {


    return (
        <div className="mt-20">
        <Container>
       
           <h1>Hello This is your Profile</h1>
           <div id="blog-div" className="flex flex-wrap flex-col-3 justify-center gap-6">
           <BlogsCard name={article.userName} image={article.ImageUrl} title={article.title} text={article.text}/>
           <BlogsCard name={article.userName} image={article.ImageUrl} title={article.title} text={article.text}/>
           <BlogsCard name={article.userName} image={article.ImageUrl} title={article.title} text={article.text}/>
           <BlogsCard name={article.userName} image={article.ImageUrl} title={article.title} text={article.text}/>
           <BlogsCard name={article.userName} image={article.ImageUrl} title={article.title} text={article.text}/>
           </div>
           <img id="circle-img" src={circleLogo}
        className="absolute mt-0 lg:mt-20 image-hero z-0 left-[-500px] md:left-[-200px] lg:left-[-300px] xl:left-[-400px] 2xl:left-[-500px] top-[0px]  w-[100%] h-[70vh]"
        alt="circle-logo"
      />
        </Container>
        
        </div>
    );
};

export default UserProfile;