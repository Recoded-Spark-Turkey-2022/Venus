import Container from '../components/UI/Container';

import writeBlog from '../assets/writeBlog.png';
import EditBlog from '../components/editBlog/EditBlog';

const EditBlogPage = () => {
  return (
    <div className=" mt-10 bg-inlightBlue">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-12 pb-5 w-full justify-items-center md:justify-items-start">
          <div className="grid min-w-full">
            <h1 className="text-darkBlue text-center md:text-left text-5xl  mt-0 md:mt-20 font-bold w-full">
              Edit Your blog
            </h1>
            <div className="component-write w-full">
              <EditBlog />
            </div>
          </div>
          <div className="flex justify-center items-center row-end-1 md:col-end-3">
            <img src={writeBlog} alt="Bannerimage" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default EditBlogPage;
