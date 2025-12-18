// Contact.js
import React, { useState } from "react";

const Contact = ({ triggerLoading }) => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};

    if (!form.name.trim()) tempErrors.name = "Name is required.";
    if (!form.email.trim()) tempErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email)) tempErrors.email = "Email is invalid.";
    if (!form.subject.trim()) tempErrors.subject = "Subject is required.";
    if (!form.message.trim()) tempErrors.message = "Message is required.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear error when user types
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      triggerLoading(); // Gọi loading từ App.js
      // Bạn có thể gọi API tại đây nếu muốn gửi thông tin
      console.log("Form Submitted:", form);
      setForm({ name: "", email: "", subject: "", message: "" }); // reset form
    }
  };

  return (
    <section className="contact section" id="Contact">
      <div className="container">
        <div className="section-title padd-15">
          <h2>Contact Me</h2>
        </div>

        <h3 className="contact-title">Do You Have Any Question ?</h3>
        <h4 className="contact-sub-title">I'M AT YOUR SERVICES</h4>

        <div className="row autoShow">
          <div className="contact-form padd-15">
            <form onSubmit={handleSubmit} noValidate>
              <div className="row">
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input type="text" name="name" value={form.name} onChange={handleChange}
                      className="form-control" placeholder="Name" />
                    {errors.name && <small className="error">{errors.name}</small>}
                  </div>
                </div>
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input type="email" name="email" value={form.email} onChange={handleChange}
                      className="form-control" placeholder="Email" />
                    {errors.email && <small className="error">{errors.email}</small>}
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <input type="text" name="subject" value={form.subject} onChange={handleChange}
                      className="form-control" placeholder="Subject" />
                    {errors.subject && <small className="error">{errors.subject}</small>}
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <textarea name="message" value={form.message} onChange={handleChange}
                      className="form-control" placeholder="Message"></textarea>
                    {errors.message && <small className="error">{errors.message}</small>}
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group center">
                    <button type="submit" className="btn">
                      <span className="default-text">Send Message</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Info */}
        <div className="row autoShow">
          <div className="contact-info-item padd-15">
            <div className="icon"><i className="fa fa-phone"></i></div>
            <h4>Call Me On</h4>
            <p>+09 815 442 88</p>
          </div>
          <div className="contact-info-item padd-15">
            <div className="icon"><i className="fa fa-map-marker-alt"></i></div>
            <h4>Country</h4>
            <p>Vietnam</p>
          </div>
          <div className="contact-info-item padd-15">
            <div className="icon"><i className="fa fa-envelope"></i></div>
            <h4>Email</h4>
            <p><a href="https://www.gmail.com/" target="_blank" rel="noopener noreferrer">hoanghuy192004@gmail.com</a></p>
          </div>
          <div className="contact-info-item padd-15">
            <div className="icon"><i className="fa fa-brands fa-linkedin"></i></div>
            <h4>Linkedin</h4>
            <p><a href="https://www.linkedin.com/in/ho%C3%A0ng-huy-l%C3%AA-6a03a4363/" target="_blank" rel="noopener noreferrer">linkedin</a></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
