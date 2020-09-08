import React from 'react';


const Cart = (props) => {
    // console.log(props)
    const addCourse = props.addCourse
    const addPrice = props.addPrice
    const totalPrice = addPrice.reduce((total, price) => total + price, 0)
    return (
        <div className="pt-30">
            <h3 className="font-weight-bold">Enrolled Summery:</h3>
            <p className="font-weight-bold">Enrolled items: {addCourse.length} </p>
            <p className="font-weight-bold">List of courses:
           <ol className="font-weight-bold">
                {
                addCourse.map((course, index) =>{
                    return (
                        <li key={index}>{course}</li>
                    );
                })
                }
            </ol>
           </p>
            <p className="font-weight-bold">Total Price: ${totalPrice}</p>
          
        </div>
    );
};

export default Cart;