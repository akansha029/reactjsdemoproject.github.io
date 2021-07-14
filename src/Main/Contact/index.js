import React ,{ useState } from 'react';
import { EmailValidator, MobileNumberValidator } from '../../Helper/RegExValidations';

const Contact = () => {
  //pass as object
const [data , setData] = useState({
  fullname:"",
  mobnumber:"",
  email:"",
  msg:"",
});

const InputEvent = (event) => {
  const{ name ,value} = event.target;

  setData ((preVal) => {
    return{
      ...preVal,
      [name] : value,
    }
  }) 
}
//so the page is not refreshed on submit use e.preventDefault().
  const fromSubmit = (e) =>{
    e.preventDefault();
    console.log(MobileNumberValidator(data.mobnumber))
    EmailValidator(data.email) && data.fullname && MobileNumberValidator(data.mobnumber) && data.msg ?
    alert(`My Name is ${data.fullname} and My Mobile Number is ${data.mobnumber}.My Email id is ${data.email} and my message is ${data.msg}`)
    : alert("Please fill the form correctly")
  }
  return (
    <>
      <div>
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={fromSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail3" 
                className="form-label">Full Name</label>
                <input type="text" 
                className="form-control" 
                id="exampleInputEmail3"
                name="fullname"
                value={data.fullname}
                onChange={InputEvent}
                placeholder="Enter Your Nmae" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail2" 
                className="form-label">Mobile Numbaer</label>
                <input type="number"
                 className="form-control" 
                 id="exampleInputEmail2" 
                  name="mobnumber"
                  value={data.mobnumber}
                  onChange={InputEvent}
                 placeholder="Enter Your Mobile Numbaer" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" 
                className="form-label">Email address</label>
                <input type="email"
                 className="form-control" 
                 id="exampleInputEmail1" 
                 name="email"
                  value={data.email}
                  onChange={InputEvent}
                 placeholder="Enter Your email "  
                 />
              </div>
              {/* <div className="mb-3">
                <label for="exampleInputPassword1" 
                className="form-label">Password</label>
                <input type="password"
                 className="form-control" 
                 id="exampleInputPassword1" />
              </div> */}
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1"
                 className="form-label">Message</label>
                <textarea className="form-control" 
                id="exampleFormControlTextarea1" 
                name="msg"
                value={data.msg}
                onChange={InputEvent}
                rows="3"></textarea>
              </div>
              <button type="submit" className="btn btn-outline-info">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;