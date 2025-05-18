import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [
        {
          id: 1,
          title: "Artificial Intelligence Course",
          description:
            "This is an in-depth course on Artificial Intelligence, covering machine learning, deep learning, and neural networks.",
          price: "2,000",
          src: "/aiposter.jpeg",
          createdDate: "2023-11-10", 
          whatYouWillLearn: [
            "Understand the basics of machine learning",
            "Build AI models using Python",
            "Explore deep learning algorithms and neural networks",
            "Work with data and pre-trained models",
            "Learn about reinforcement learning",
          ],
          rating: 4.5,
          totalRatings: 150,
          category: "AI",
          ownerName: "John Doe", // Example owner
          sections: [
            {
              title: "Module 1: Introduction to Artificial Intelligence",
              content:
                "This module introduces you to the world of Artificial Intelligence, including key concepts and technologies.",
              ownerName: "John Doe", // Owner for the section
              
              lessons: [
                { title: "AI Basics", duration: "1 hour" },
                { title: "Machine Learning Concepts", duration: "1.5 hours" },
                { title: "Deep Learning Introduction", duration: "2 hours" },
              ],
            },
            {
              title: "Module 2: Machine Learning Algorithms",
              content:
                "Explore the most commonly used machine learning algorithms, such as linear regression, decision trees, and clustering.",
              ownerName: "John Doe", // Owner for the section
        
              lessons: [
                { title: "Supervised Learning", duration: "2 hours" },
                { title: "Unsupervised Learning", duration: "2 hours" },
                { title: "Model Evaluation", duration: "1.5 hours" },
              ],
            },
          ],
        },
        {
          id: 2,
          title: "Mobile App Development Course",
          description:
            "Learn how to build mobile applications for Android and iOS using Flutter and Dart.",
          price: "3,500",
          src: "/mobileposter.jpeg",
          createdDate: "2023-10-15", // Example date
          whatYouWillLearn: [
            "Learn Dart programming language",
            "Build cross-platform apps with Flutter",
            "Understand app deployment on Android and iOS",
            "Work with Firebase for back-end services",
            "Create responsive UIs for mobile devices",
          ],
          rating: 2.8,
          totalRatings: 95,
          category: "Mobile Development",
          ownerName: "Alice Smith", // Example owner
          sections: [
            {
              title: "Module 1: Introduction to Flutter",
              content:
                "Get started with Flutter and Dart. This module covers installation, setting up your environment, and building your first app.",
              ownerName: "Alice Smith", // Owner for the section
              
              lessons: [
                { title: "Installing Flutter", duration: "1 hour" },
                { title: "Hello World App", duration: "1.5 hours" },
                { title: "Understanding Widgets", duration: "2 hours" },
              ],
            },
            {
              title: "Module 2: Advanced Flutter Development",
              content:
                "Learn advanced Flutter concepts, including state management, navigation, and integration with APIs.",
              ownerName: "Alice Smith", // Owner for the section
              
              lessons: [
                { title: "State Management with Provider", duration: "2 hours" },
                { title: "Using APIs in Flutter", duration: "1.5 hours" },
                { title: "Navigation and Routing", duration: "2 hours" },
              ],
            },
          ],
        },
        {
          id: 3,
          title: "Data Science Course",
          description:
            "A comprehensive course on data science, covering data manipulation, statistical analysis, and machine learning with Python.",
          price: "4,000",
          src: "/datascienceposter.jpeg",
          createdDate: "2023-09-20", // Example date
          whatYouWillLearn: [
            "Understand the basics of data science",
            "Learn Python for data analysis",
            "Explore data visualization tools like Matplotlib and Seaborn",
            "Build machine learning models",
            "Work with real-world data sets",
          ],
          rating: 3.7,
          totalRatings: 125,
          category: "Data Science",
          ownerName: "James Lee", // Example owner
          sections: [
            {
              title: "Module 1: Introduction to Data Science",
              content:
                "Learn the foundational concepts in data science, including data cleaning, manipulation, and visualization.",
              ownerName: "James Lee", // Owner for the section
              lessons: [
                { title: "Data Cleaning", duration: "2 hours" },
                { title: "Data Analysis with Pandas", duration: "2.5 hours" },
                { title: "Data Visualization", duration: "1.5 hours" },
              ],
            },
            {
              title: "Module 2: Machine Learning in Python",
              content:
                "Learn how to build machine learning models using Python libraries such as scikit-learn.",
              ownerName: "James Lee", // Owner for the section
         
              lessons: [
                { title: "Supervised Learning", duration: "3 hours" },
                { title: "Unsupervised Learning", duration: "2 hours" },
                { title: "Model Evaluation", duration: "1.5 hours" },
              ],
            },
          ],
        },
        {
          id: 4,
          title: "Web Development BootCamp",
          description:
            "A complete bootcamp for aspiring web developers. Learn HTML, CSS, JavaScript, and modern frameworks like React and Node.js.",
          price: "2,500",
          src: "/webdposter.jpeg",
          createdDate: "2023-08-05", // Example date
          whatYouWillLearn: [
            "Build responsive websites with HTML and CSS",
            "Learn JavaScript and DOM manipulation",
            "Understand front-end frameworks like React",
            "Learn back-end development with Node.js",
            "Use databases like MongoDB for full-stack apps",
          ],
          rating: 4.6,
          totalRatings: 200,
          category: "Web Development",
          ownerName: "Emma Brown", // Example owner
          sections: [
            {
              title: "Module 1: Front-End Basics",
              content:
                "Start by learning the basics of web development, including HTML5, CSS3, and JavaScript.",
              ownerName: "Emma Brown",
              lessons: [
                { title: "HTML Structure", duration: "1 hour" },
                { title: "CSS Styling", duration: "2 hours" },
                { title: "JavaScript Fundamentals", duration: "2 hours" },
              ],
            },
            {
              title: "Module 2: React for Front-End",
              content:
                "Dive deeper into React to build modern, interactive UIs.",
              ownerName: "Emma Brown", 
              lessons: [
                { title: "React Components", duration: "2 hours" },
                { title: "React Hooks", duration: "1.5 hours" },
                { title: "React Router", duration: "1.5 hours" },
              ],
            },
          ],
        },
        {
          id: 5,
          title: "Python Programming Mastery Course",
          description:
            "Master Python programming and dive into advanced topics like machine learning, web development, and automation.",
          price: "1,800",
          src: "/pythonposter.jpeg",
          createdDate: "2023-07-25", // Example date
          whatYouWillLearn: [
            "Understand Python syntax and basic programming concepts",
            "Build Python applications",
            "Learn object-oriented programming with Python",
            "Work with popular Python libraries like Flask and Pandas",
            "Explore machine learning with Python",
          ],
          rating: 4.9,
          totalRatings: 250,
          category: "Python",
          ownerName: "Michael Davis", // Example owner
          sections: [
            {
              title: "Module 1: Introduction to Python",
              content:
                "Learn the basics of Python, including syntax, data types, and control structures.",
              ownerName: "Michael Davis", 
              lessons: [
                { title: "Python Syntax", duration: "1.5 hours" },
                { title: "Data Types and Variables", duration: "1.5 hours" },
                { title: "Control Structures", duration: "2 hours" },
              ],
            },
            {
              title: "Module 2: Python for Web Development",
              content:
                "Learn how to build web applications with Flask, a Python-based web framework.",
              ownerName: "Michael Davis", // Owner for the section
           
              lessons: [
                { title: "Setting Up Flask", duration: "1 hour" },
                { title: "Routing and Templates", duration: "1.5 hours" },
                { title: "Database Integration", duration: "2 hours" },
              ],
            },
          ],
        },
       
        
        
      
       
        
  ],
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
  
 
  },
})



export default dataSlice.reducer