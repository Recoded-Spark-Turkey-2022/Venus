import Container from "../components/UI/Container";
import WriteBlogC from "../components/writeBlog/WriteBlog";
import writeBlog from '../assets/writeBlog.png';



const WriteBlog=()=> {

   

    return(
        <div id='' className=" mt-10 bg-inlightBlue">
        <Container>
         <div className="grid grid-cols-1 md:grid-cols-2  gap-6 pt-12 md:p-20 pb-5">
          <div className="grid justify-items-center md:justify-items-start">
           <h1 className="text-darkBlue text-center md:text-left text-5xl font-bold mb-5">
             Write a Blog
           </h1>
          <div className="grid justify-items-start md:justify-items-center w-full md:w-2/3">
          <WriteBlogC/>
          </div>
          </div>
          <div className="flex justify-center items-center row-end-1 md:col-end-3">
           <img src={writeBlog} alt="Bannerimage"/>
          </div>
          </div>
        
        </Container>
        </div>
        
       

    )
}

export default WriteBlog;