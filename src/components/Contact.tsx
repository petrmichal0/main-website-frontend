import { CONTACT } from "../constants/data"; // Importing contact information from constants
import { motion } from "framer-motion"; // Importing motion for animations from framer-motion
import { useState } from "react"; // Importing useState hook for state management
import axios from "axios"; // Importing axios for making HTTP requests
import { FaSpinner } from "react-icons/fa"; // Importing spinner icon for loading state

function Contact() {
  // State variables to manage form inputs and states
  const [email, setEmail] = useState(""); // Stores the email entered by the user
  const [message, setMessage] = useState(""); // Stores the message entered by the user
  const [error, setError] = useState(""); // Stores any error messages during submission
  const [status, setStatus] = useState(""); // Stores success status message after submission
  const [isLoading, setIsLoading] = useState(false); // Indicates if the form is currently being submitted
  const maxLength = 500; // Maximum allowed characters for the message

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevents the page from refreshing on form submission

    // Validate email and message
    if (!email || !message) {
      setError("Please provide both email and message."); // Show error if either email or message is empty
      return;
    }
    if (message.length > maxLength) {
      setError(`Message exceeds ${maxLength} characters.`); // Show error if message exceeds max length
      return;
    }

    try {
      setIsLoading(true); // Start the loading state when form is being submitted
      // Send the email and message to the server using axios
      const response = await axios.post(
        "https://main-website-backend-f90ccd0e7203.herokuapp.com/api/contact",
        { email, message }
      );

      if (response.status === 200) {
        setStatus("Your message has been sent!"); // Show success message
        setEmail(""); // Reset email input field
        setMessage(""); // Reset message input field
      } else {
        setError("Failed to send message. Please try again."); // Show error if submission fails
      }
    } catch (error) {
      setError("Error sending email. Please try again."); // Show error on request failure
    } finally {
      setIsLoading(false); // End the loading state
    }
  };

  return (
    <div
      id="contact"
      className="border-b border-neutral-900 pb-20 flex flex-col"
      style={{ minHeight: `calc(100vh - 96px)` }} // Adjust height based on navbar height
    >
      {/* Section heading with animation */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }} // Animates when it comes into view
        initial={{ opacity: 0, y: -100 }} // Initially invisible and moved up
        transition={{ duration: 1.5 }} // Smooth animation over 1.5 seconds
        className="my-20 text-center text-4xl w-full"
      >
        Contact <span className="text-neutral-500">Me</span>{" "}
        {/* Contact Me Heading */}
      </motion.h1>

      {/* Main content for the contact section */}
      <div className="flex flex-col lg:flex-row lg:justify-start w-full px-6">
        {/* Left column with contact details */}
        <div className="w-full lg:w-1/2 p-6 text-center lg:text-right">
          <p className="mb-4 font-medium">{CONTACT.address}</p> {/* Address */}
          <p className="mb-4">{CONTACT.phoneNo}</p> {/* Phone number */}
          <a href={`mailto:${CONTACT.email}`} className="border-b">
            {CONTACT.email} {/* Email link */}
          </a>
        </div>

        {/* Right column with the contact form */}
        <div className="w-full lg:w-2/5 p-6">
          {/* Form submission handling */}
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Updates email state
              placeholder="Your Email"
              className="p-3 rounded bg-neutral-700 text-white"
              required
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)} // Updates message state
              placeholder={`Your message (max ${maxLength} characters)`} // Placeholder text
              className="p-3 rounded bg-neutral-700 text-white"
              maxLength={maxLength} // Limits message length
              required
            />
            {error && <p className="text-red-500">{error}</p>}{" "}
            {/* Error message */}
            {status && <p className="text-green-500">{status}</p>}{" "}
            {/* Success message */}
            <button
              type="submit"
              className="py-3 px-6 rounded bg-cyan-300 text-black hover:bg-cyan-400 flex items-center justify-center space-x-2"
              disabled={isLoading} // Disable the button when loading
            >
              {/* Show loading spinner and text when sending */}
              {isLoading && (
                <FaSpinner className="animate-spin mr-2" /> // Loading spinner
              )}
              <span>{isLoading ? "Sending..." : "Send Message"}</span>{" "}
              {/* Button text */}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
