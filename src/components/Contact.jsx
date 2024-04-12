import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className='text-secondary font-black text-[20px]'>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        
        
      <div className="mt-12 flex flex-col gap-8">
          <p className="mb-2 text-16 text-customPurple">
            Email: <a href="mailto:your-email@example.com" className="text-secondary no-underline">ibrahimkrimi2@gmail.com</a>
          </p>
          <p className="mb-2 text-16 text-customPurple">
            Phone: <a href="tel:+1234567890" className="text-secondary no-underline">+33751535144</a>
          </p>
          <p className="mb-2 text-16 text-customPurple">
            LinkedIn: <a href="https://www.linkedin.com/in/krimi/" target="_blank" className="text-secondary no-underline">Ibrahim Krimi</a>
          </p>
          <p className="mb-2 text-16 text-customPurple">
            Location: Valbonne, France
          </p>
          <p className="mb-2 text-16 text-customPurple">
            Open to relocation.
          </p>
      </div>


    
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
