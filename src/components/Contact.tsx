import { CONTACT } from "../constants/data";
import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import { FaSpinner } from "react-icons/fa";

const headingAnimation = {
  whileInView: { opacity: 1, y: 0 },
  initial: { opacity: 0, y: -100 },
  transition: { duration: 1.5 },
};

const textAnimationLeft = {
  whileInView: { opacity: 1, x: 0 },
  initial: { opacity: 0, x: -100 },
  transition: { duration: 0.5 },
};

const textAnimationRight = {
  whileInView: { opacity: 1, x: 0 },
  initial: { opacity: 0, x: 100 },
  transition: { duration: 0.5 },
};

function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const maxLength = 500;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !message) {
      setError("Please provide both email and message.");
      setStatus("");
      console.log("Error: Missing email or message."); // Debugging výpis

      return;
    }

    try {
      setError("");
      setIsLoading(true);
      console.log("isLoading set to true"); // Debugging výpis

      const response = await axios.post(
        "https://main-website-backend-f90ccd0e7203.herokuapp.com/api/contact",
        { email, message }
      );

      if (response.status === 200) {
        setStatus("Your message has been sent!");
        setEmail("");
        setMessage("");
        console.log("Message sent successfully."); // Debugging výpis
      } else {
        setError("Failed to send message. Please try again.");
        console.log("Failed to send message."); // Debugging výpis
      }
    } catch (error) {
      setError("Error sending email. Please try again.");
      console.log("Error during sending email:", error); // Debugging výpis
    } finally {
      setIsLoading(false);
      console.log("isLoading set to false"); // Debugging výpis
    }
  };

  return (
    <div
      id="contact"
      className="border-b border-neutral-900 pb-20 flex flex-col"
      style={{ minHeight: `calc(100vh - 96px)` }}
    >
      <motion.h1
        {...headingAnimation}
        className="my-20 text-center text-4xl w-full"
      >
        Contact <span className="text-neutral-500">Me</span>
      </motion.h1>

      <div className="flex flex-col lg:flex-row lg:justify-start w-full px-6">
        <motion.div
          {...textAnimationLeft}
          className="w-full lg:w-1/2 p-6 text-center lg:text-right"
        >
          <p className="mb-4 font-medium">{CONTACT.address}</p>
          <p className="mb-4">{CONTACT.phoneNo}</p>
          <a href={`mailto:${CONTACT.email}`} className="border-b">
            {CONTACT.email}
          </a>
        </motion.div>

        <motion.div {...textAnimationRight} className="w-full lg:w-2/5 p-6">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="p-3 rounded bg-neutral-700 text-white"
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={`Your message (max ${maxLength} characters)`}
              className="p-3 rounded bg-neutral-700 text-white"
              maxLength={maxLength}
            />
            {error && <p className="text-red-500">{error}</p>}
            {status && <p className="text-green-500">{status}</p>}
            <button
              type="submit"
              className="py-3 px-6 rounded bg-cyan-300 text-black hover:bg-cyan-400 flex items-center justify-center space-x-2"
              disabled={isLoading}
              onClick={() => console.log("Disabled value:", isLoading)}
            >
              {isLoading && <FaSpinner className="animate-spin mr-2" />}
              <span>{isLoading ? "Sending..." : "Send Message"}</span>
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
