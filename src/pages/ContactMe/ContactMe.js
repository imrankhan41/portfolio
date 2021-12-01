
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
      <div className="row pt-5 mx-auto">
                     <div className="col-8 mt-5 form-group mx-auto">
                        <input type="text" className="form-control" name="name" placeholder="Place Your Name" id="" />
                     </div>
                     <div className="col-8 form-group pt-2 mx-auto">
                         <input type="email" className="form-control" name="email" placeholder="Place Your Email" id="" />
                     </div>
                     <div className="col-8 form-group pt-2 mx-auto">
                         <input type="text" className="form-control" name="subject" placeholder="Subject" id="" />
                     </div>
                     <div className="col-8 form-group pt-2 mx-auto">
                         <textarea className="form-control" cols="30" row="8" name="message" placeholder="Your Message" id="" />
                    </div>
                    <div className="col-8 pt-3 mx-auto">
                        <input type="submit" className="btn btn-info" value="Send Message" />
                   </div>

          </div>
    </form>
    );
};

export default ContactMe;
