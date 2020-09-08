import React, { useState } from 'react';
import './App.css';
import Course from './components/Courses/Course';
import Cart from './components/Cart/Cart';
import data from './Data/courses.json'
function App() {
 
  // const [courses, setCourses] = useState([])
  const [addCourse, setAddCourse] = useState([])
  const [addPrice, setAddPrice] = useState([])

  const handleAddCourse = (course, price) =>{
    console.log('clicked', course,price)
    const addedCourse = [...addCourse, course]
    setAddCourse(addedCourse)

    const addedPrice = [...addPrice, price]
    setAddPrice(addedPrice)
  }

  return (
    <div className="container mt-4">
      <div className="row" style={{backgroundColor:"oldlace"}}>
        <div className="col-md-9">
          {/* {courses.length} */}
          <Course course = {data} handleAddCourse ={handleAddCourse}></Course>
        </div>
        <div className="col-md-3">
          <Cart addCourse = {addCourse} addPrice ={addPrice}></Cart>
        </div>
      </div>

    </div>
  );
}

export default App;
