import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { SpecSectionWrapper } from "../hoc";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
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
        'service_s5fbygl',
        'template_vu7v6j4',
        {
          from_name: form.name,
          to_name: "Yassine Banouq",
          from_email: form.email,
          to_email: "banouq90@gmail.com",
          message: form.message,
        },
        'SZbBEfYlJ3wOLc3de'
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
        <div className="h-screen flex justify-center items-center bg-white bg-center bg-cover bg-no-repeat">
            <div
                className={`h-[80%] w-[50%] xl:mt-12 flex xl:flex-row  overflow-hidden`}
                >
                <motion.div
                    variants={slideIn("left", "tween", 0.2, 1)}
                    className='flex-[0.75] justify-center bg-gray-300 p-8 rounded-2xl'
                >
                    <p className="sm:text-[16px] text-[14px] text-secondary uppercase tracking-wider">Get in touch</p>
                    <h3 className="text-[#05668D] text-left font-extrabold md:text-[50px] sm:text-[40px] xs:text-[30px] text-[5rem]">Contact Us</h3>

                    <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className='mt-4 flex flex-col gap-2'
                    >
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your Name</span>
                        <input
                        type='text'
                        name='name'
                        value={form.name}
                        onChange={handleChange}
                        placeholder="What's your good name?"
                        className='bg-white py-4 px-6 placeholder:text-black text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your email</span>
                        <input
                        type='email'
                        name='email'
                        value={form.email}
                        onChange={handleChange}
                        placeholder="What's your web address?"
                        className='bg-white py-4 px-6 placeholder:text-black text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your Message</span>
                        <textarea
                        rows={2}
                        name='message'
                        value={form.message}
                        onChange={handleChange}
                        placeholder='What you want to say?'
                        className='bg-white py-3 px-6 placeholder:text-black text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>

                    <button
                        type='submit'
                        className='bg-tertiary mt-2 py-4 px-8 rounded-[100px] outline-none w-fit text-white font-bold shadow-md shadow-primary'
                    >
                        {loading ? "Sending..." : "Send"}
                    </button>
                    </form>
                </motion.div>

                {/* <motion.div
                    variants={slideIn("right", "tween", 0.2, 1)}
                    className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
                >
                    <EarthCanvas />
                </motion.div> */}
                </div>
        </div>
    )
}

export default SpecSectionWrapper(Contact,"contact");