import { useState } from 'react';
import { MdOutlineFileDownload } from "react-icons/md";
import { FiAward } from "react-icons/fi";
// import { FaLinkedin } from "react-icons/fa6";
import { BiRightArrowAlt } from "react-icons/bi";
import { FiShare2 } from "react-icons/fi";


export default function CourseCompletionPage() {
  const [showShareOptions, setShowShareOptions] = useState(false);
  
  const courseData = {
    title: "Advanced Web Development Masterclass",
    completionDate: "April 30, 2025",
    studentName: "Alex Johnson",
    instructorName: "Dr. Sarah Williams",
    certificateId: "WDM-2025-04-AJ758"
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header/Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white text-center">
          <div className="flex justify-center mb-4">
          <FiAward size={64} className="text-yellow-300" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Congratulations!</h1>
          <p className="text-xl">You've successfully completed the course</p>
        </div>
        
        {/* Certificate Information */}
        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">{courseData.title}</h2>
            <p className="text-gray-600 mt-2">Completed on {courseData.completionDate}</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-8 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Student Name</p>
                <p className="text-gray-800 font-medium">{courseData.studentName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Instructor</p>
                <p className="text-gray-800 font-medium">{courseData.instructorName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Certificate ID</p>
                <p className="text-gray-800 font-medium">{courseData.certificateId}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Status</p>
                <p className="text-green-600 font-medium flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Verified
                </p>
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button 
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
              onClick={() => window.open('https://www.linkedin.com/profile/add', '_blank')}
            >
             {/* <FaLinkedin size={30} /> */}
              Add to LinkedIn
            </button>
            <button 
              className="flex-1 hover:bg-[#5D3FD3] bg-[#7F00FF] text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
              onClick={() => window.open('#', '_blank')}
            >
             <MdOutlineFileDownload size={20} />
              View Certificate
            </button>
            <div className="relative flex-1">
              <button 
                className="w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
                onClick={() => setShowShareOptions(!showShareOptions)}
              >
                <FiShare2  size={20} />
                Share
              </button>
              
              {showShareOptions && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white shadow-lg rounded-lg p-3 z-10 border border-gray-200">
                  <button className="w-full text-left p-2 hover:bg-gray-100 rounded flex items-center gap-2">
                    <div className="w-6 h-6 flex items-center justify-center bg-blue-100 rounded text-blue-600">f</div>
                    Facebook
                  </button>
                  <button className="w-full text-left p-2 hover:bg-gray-100 rounded flex items-center gap-2">
                    <div className="w-6 h-6 flex items-center justify-center bg-blue-100 rounded text-blue-600">t</div>
                    Twitter
                  </button>
                  <button className="w-full text-left p-2 hover:bg-gray-100 rounded flex items-center gap-2">
                    <div className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded text-gray-600">@</div>
                    Email
                  </button>
                </div>
              )}
            </div>
          </div>
          
          {/* Next Steps */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Next Steps</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                <h4 className="font-medium text-gray-800 mb-1">Explore More Courses</h4>
                <p className="text-sm text-gray-600 mb-2">Continue your learning journey</p>
                <div className="flex items-center text-blue-600 text-sm">
                  Learn more <BiRightArrowAlt size={16} className="ml-1" />
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                <h4 className="font-medium text-gray-800 mb-1">Join Our Community</h4>
                <p className="text-sm text-gray-600 mb-2">Connect with fellow learners</p>
                <div className="flex items-center text-blue-600 text-sm">
                  Join now <BiRightArrowAlt  size={16} className="ml-1" />
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                <h4 className="font-medium text-gray-800 mb-1">Give Feedback</h4>
                <p className="text-sm text-gray-600 mb-2">Help us improve the course</p>
                <div className="flex items-center text-blue-600 text-sm">
                  Rate now <BiRightArrowAlt size={16} className="ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}