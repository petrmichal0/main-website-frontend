import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import { FaSpinner } from "react-icons/fa"; // Importování spinner ikony

function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState(""); // Stav pro zobrazení stavu odesílání
  const [isLoading, setIsLoading] = useState(false); // Stav pro načítání
  const maxLength = 500;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validace emailu a zprávy
    if (!email || !message) {
      setError("Please provide both email and message.");
      return;
    }
    if (message.length > maxLength) {
      setError(`Message exceeds ${maxLength} characters.`);
      return;
    }

    try {
      setIsLoading(true); // Spustíme načítání
      const response = await axios.post(
        "https://main-website-backend-f90ccd0e7203.herokuapp.com/api/contact",
        {
          email,
          message,
        }
      );

      if (response.status === 200) {
        setStatus("Your message has been sent!");
        setEmail(""); // Resetování formuláře
        setMessage("");
      } else {
        setError("Failed to send message. Please try again.");
      }
    } catch (error) {
      setError("Error sending email. Please try again.");
    } finally {
      setIsLoading(false); // Zastavíme načítání
    }
  };

  return (
    <div
      id="contact"
      className="border-b border-neutral-900 pb-20 flex flex-col"
      style={{ minHeight: `calc(100vh - 96px)` }} // Odečtení výšky navbaru (96px)
    >
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20  text-center text-4xl w-full"
      >
        Contact <span className="text-neutral-500">Me</span>
      </motion.h1>

      <div className="flex flex-col lg:flex-row lg:justify-start w-full px-6">
        {/* Levý sloupec */}
        <div className="w-full lg:w-1/2 p-6 text-center lg:text-right  ">
          <p className="mb-4 font-medium">{CONTACT.address}</p>
          <p className="mb-4">{CONTACT.phoneNo}</p>
          <a href={`mailto:${CONTACT.email}`} className="border-b">
            {CONTACT.email}
          </a>
        </div>

        {/* Pravý sloupec s formulářem */}
        <div className="w-full lg:w-2/5  p-6">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="p-3 rounded bg-neutral-700 text-white"
              required
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={`Your message (max ${maxLength} characters)`}
              className="p-3 rounded bg-neutral-700 text-white"
              maxLength={maxLength}
              required
            />
            {error && <p className="text-red-500">{error}</p>}
            {status && <p className="text-green-500">{status}</p>}
            <button
              type="submit"
              className="py-3 px-6 rounded bg-cyan-300 text-black hover:bg-cyan-400 flex items-center justify-center space-x-2"
              disabled={isLoading} // Tlačítko zakázané při načítání
            >
              {isLoading && (
                <FaSpinner className="animate-spin mr-2" /> // Načítací ikona
              )}
              <span>{isLoading ? "Sending..." : "Send Message"}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
