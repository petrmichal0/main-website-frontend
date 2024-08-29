// import { motion } from "framer-motion";

// const Heartbeat = () => {
//   return (
//     <svg width="100%" height="100" viewBox="0 0 100 50">
//       {/* Definice cesty ve tvaru EKG, rozšířené přes celou obrazovku */}
//       <motion.path
//         d="M-200 25 H20 L25 20 L30 30 L35 25 L40 25 L45 15 L50 35 L55 25 H500"
//         fill="transparent"
//         stroke="#FF0000"
//         strokeWidth="3"
//         initial={{ pathLength: 0, opacity: 0 }}
//         animate={{ pathLength: 1, opacity: 1 }}
//         transition={{
//           duration: 2,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />
//     </svg>
//   );
// };

// export default Heartbeat;

import { motion } from "framer-motion";

const Heartbeat = () => {
  return (
    <svg width="100%" height="200" viewBox="0 0 100 50">
      {/* Definice cesty ve tvaru EKG, která bude použita pro text */}
      <defs>
        <path
          id="heartbeat-path"
          d="M-300 25 H20 L25 20 L30 30 L35 25 L40 25 L45 15 L50 35 L55 25 H300"
          fill="transparent"
        />
      </defs>

      {/* Animovaný text, který běží podél cesty */}
      <motion.text fill="#71FC00" fontSize="5">
        <motion.textPath
          href="#heartbeat-path"
          startOffset="100%"
          animate={{
            startOffset: ["-100%", "100%"], // Text běží od konce cesty na začátek
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          "const Greeting = () =
          <div className="p-4 bg-blue-500 text-white text-center rounded">
            Hello, welcome to our website!
          </div>
        </motion.textPath>
      </motion.text>
    </svg>
  );
};

export default Heartbeat;
