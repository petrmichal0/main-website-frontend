import { CONTACT } from "../constants";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div
      id="contact"
      className="border-b border-neutral-900 pb-20 flex flex-col "
      style={{ minHeight: `calc(100vh - 96px)` }} // Odečtení výšky navbaru (96px)
    >
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h1>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href="#" className="border-b">
          {CONTACT.email}
        </a>
        <div className="flex-grow"></div>
        {/* Dynamický prostor pro zbývající část */}
      </div>
    </div>
  );
}

export default Contact;
