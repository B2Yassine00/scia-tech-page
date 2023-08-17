import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { SpecSectionWrapper } from "../hoc";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { fadeIn, slideIn } from "../utils/motion";

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
          ${{secrets.EMAIL_JS_SECRET_SERVICE}},
          ${{secrets.EMAIL_JS_SECRET_TEMPLATE}},
        {
          from_name: form.name,
          to_name: "Yassine Banouq",
          from_email: form.email,
          to_email: ${{secrets.EMAILTO}},
          message: form.message,
        },
        ${{secrets.EMAIL_JS_SECRET_KEY}}
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
                <motion.div
                    variants={fadeIn("", "", 0.2, 1)}
                    className='py-8 lg:py-16 px-4 mx-auto max-w-screen-md  xl:mt-8 flex xl:flex-row  overflow-hidden'
                >
                    <div className="">
                        <h1 className="text-[3rem] md:text-[4rem] text-center leading-tight font-extrabold text-[#142F48]">Contact Us</h1>
                        <br />
                        <p className="mb-8 lg:mb-12 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email:</label>
                            <input
                            type="email"
                            id="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-none focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                            placeholder="name@gmail.com"
                            required
                            />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject:</label>
                            <input
                            type="text"
                            id="name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-none border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                            placeholder="Let us know how we can help you"
                            required
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message:</label>
                            <textarea
                            id="message"
                            name="message"
                            rows="3"
                            value={form.message}
                            onChange={handleChange}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-none shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Leave a comment..."
                            />
                        </div>
                        <button
                            type="submit"
                            className="py-2 px-5 text-sm font-medium text-center text-white rounded-3xl bg-custom-blue sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            disabled={loading}
                        >
                            {loading ? "Sending..." : "Send"}
                        </button>
                        </form>
                    </div>
                </motion.div>

                {/* <motion.div
                    variants={slideIn("right", "tween", 0.2, 1)}
                    className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
                >
                    <EarthCanvas />
                </motion.div> */}
                
        </div>
    )
}

export default SpecSectionWrapper(Contact,"contact");
