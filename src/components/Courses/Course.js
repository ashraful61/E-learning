import React from 'react';
import './Course.css'

const Course = (props) => {
    const courses = props.course
    const handleAddCourse = props.handleAddCourse
    console.log(props)
    
    return (
        <div className="row">
            {
                courses.map((course, index) => {
                    return (
                        <div className="col-sm-4 mt-3" key={course.id}>
                            <div className="courses">
                                <h5 className="modern_psychology">{course.course}</h5>
                                <p>Insructor: {course.instructor} </p>
                                <p>Price: ${course.price}</p>
                                <button onClick={()=>handleAddCourse(course.course, course.price)} className="btn btn-success">Enroll Now</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>

    );
};

export default Course;