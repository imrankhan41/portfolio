
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const ContactMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_mz2kfkm', 'template_ouax5kt', form.current, 'user_4mufC4GhNEo4PwRXd853z')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };
    return (
        <form ref={form} onSubmit={sendEmail}>
      <div className="row mt-5 p-5 mx-auto container ">
          <h5 className="pt-5 text-danger">Get In Touch</h5>
          <h2 className="text-white">Contact Me</h2>
          
             <div  className ="col-lg-6 col-md-6 col-sm-12 col-12 text-white text-start mt-5 border-end border-danger">
             <h3 className="text-danger"> Please Feel Free :</h3>
             <p><i class="fas fa-phone-alt"></i> +8801627421333 </p>
             <p><i class="fas fa-envelope"></i> imranbutex41@gmail.com</p>
             <p><i class="fas fa-location-arrow"></i> Narsingdi, Dhaka</p>
           <a href="https://github.com/imrankhan41" target="_blank" rel="noopener noreferrer"> <i className="fab fa-github text-danger "></i></a>
            <a href="https://web.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook text-danger "></i></a>
             <a href="https://www.linkedin.com/in/mohammad-imran-khan-a70b2b16b/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin  text-danger "></i></a>
           <a href="https://twitter.com/imrantexf69" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter text-danger "></i></a>
            
              
             </div>
             <div className ="col-lg-6 col-md-6 col-sm-12 col-12">
                     <div className="col-12 mt-5 form-group mx-auto">
                        <input type="text" className="form-control" name="name" placeholder="Place Your Name" id="" />
                     </div>
                     <div className="col-12 form-group pt-2 mx-auto">
                         <input type="email" className="form-control" name="email" placeholder="Place Your Email" id="" />
                     </div>
                     <div className="col-12 form-group pt-2 mx-auto">
                         <input type="text" className="form-control" name="subject" placeholder="Subject" id="" />
                     </div>
                     <div className="col-12 form-group pt-2 mx-auto">
                         <textarea className="form-control" cols="30" row="8" name="message" placeholder="Your Message" id="" />
                    </div>
                    <div className="col-12 pt-3 mx-auto">
                        <input type="submit" className="btn btn-info" value="Send Message" />
                   </div>
            </div>     

          </div>
    </form>
    );
};

export default ContactMe;
