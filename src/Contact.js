import React, { useState } from "react"

const Contact= ()=>{
    const [data, setData]=useState({
        Fullname:"",
        phone:"",
        email:"",
        msg:""
    });
    const InputEvent =(event) =>{
        const {name, value} = event.target;

        setData((preVal)=>{
            return {
                ...preVal,
                [name]: value,
            }
        })
    }
    const formSubmit = (e) => {
        e.preventDefault();
        alert(
            `My Name is ${data.Fullname}. My mobile number is ${data.phone}, and Email is ${data.email},i want to say ${data.msg}`)
    };
    return (
        <>
            <div className="my-5">
            <h1 className="text-center">  Contact us </h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                 <form onSubmit={formSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">
                         FullName
                        </label>
                        <input
                         type="text"
                         className="form-control"
                         id="exampleFormControlInput1"
                         name="fullName"
                         value={data.FullName}
                         onChange={InputEvent}
                         placeholder="Enter your name"/>
                     </div>
                     <div className="mb-3">
                        <label f="true"
                        htmlFor="exampleFormControlInput1" className="form-label">
                        Phone
                        </label>
                        <input
                         type="number" 
                         className="form-control"
                         id="exampleFormControlInput1"
                         name="phone"
                         value={data.phone}
                         onChange={InputEvent}
                         placeholder="mobile-no"/>
                     </div>
                     <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input 
                          type="email" 
                         className="form-control"
                         id="exampleFormControlInput1"
                         name="email"
                         value={data.email}
                         onChange={InputEvent}
                         placeholder="name@example.com"/>
                     </div>
                        <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                        <textarea 
                        className="form-control" 
                        id="exampleFormControlTextarea1" 
                         name="msg"
                         value={data.msg}
                         onChange={InputEvent}
                        rows="3">
                        </textarea>
                        
                        </div>
                        </form>
                        <div className="col-12">
                           <button className="btn btn-outline-primary" type="submit">Submit form</button>
                           
                      </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}
export default Contact