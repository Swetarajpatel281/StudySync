
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa"; 
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { passValue } from "../../redux/courseDetail";
const SimpleSlider = ({heading,courses}) => {
  
  const dispatch=useDispatch();

   


  const settings = {
    dots: true,
    infinite: false,
 
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full mx-auto p-8">
    <h1 className='text-6xl text-yellow-200 p-2' >{heading}</h1> 
    <br />
      <Slider {...settings}>
        {courses.map((course, index) => (
          <div key={index} className="p-2 mt-20 flex justify-center">
            <div className="w-full max-w-md rounded-lg overflow-hidden shadow-lg">
              <img
                src={course.src}
                alt="Course"
                className="w-full h-80 object-cover rounded-xl"
              />
              <div className="text-start mt-6 pl-2" >
                <h3 className="text-2xl font-bold text-white">{course.title}</h3>
                <p className="text-2xl text-white mt-2">By {course.ownerName}</p>
                <div className="flex items-center text-yellow-500 mt-2">
                  {/* Using FaStar icon for the rating */}
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={` mr-3 text-xl ${i < course.rating ? "text-yellow-500" : "text-gray-400"}`}
                    />
                  ))}
                  <p className="ml-2 text-xl">{course.rating}</p>
                </div>
                <p className="text-2xl font-semibold text-green-400 mt-2">
                <span className="text-white"> Price:</span> {course.price}
                </p>
                <Link
                  onClick={()=>{  dispatch(passValue(course))}}
                  to='/courseDetails'
                  className="mt-4 inline-block w-full text-center bg-yellow-200 font-semibold text-black py-3 rounded-md text-xl"
                >
                  View Course
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
