import { useState } from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";

const Contact = ({ isVisible }) => {
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("email");
    const email = formData.get("subject");
    const message = formData.get("message");
    const recipientEmail = "rabiialaoui10@gmail.com";

    setIsSending(true);

    try {
      const response = await fetch("https://formsubmit.co/2d7c8617b97dc94d8515b336929ecbb8", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _replyto: email,
          _subject: "Contact Form Submission",
          _template: "table",
        }),
      });

      if (response.ok) {
        alert("Message sent successfully!");
      } else {
        alert("Failed to send the message. Please try again later.");
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
    }

    setIsSending(false);
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h1 className="text-[3rem] md:text-[4rem] text-center leading-tight font-extrabold text-[#142F48]">Contact Us</h1>
        <br />
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-none focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@gmail.com"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject:</label>
            <input
              type="text"
              id="subject"
              name="subject"
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
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-none shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
            />
          </div>
          <button
            type="submit"
            className="py-2 px-5 text-sm font-medium text-center text-white rounded-3xl bg-custom-blue sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            disabled={isSending}
          >
            {isSending ? "Sending..." : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

