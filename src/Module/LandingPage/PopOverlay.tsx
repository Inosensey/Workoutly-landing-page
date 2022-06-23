import { motion } from "framer-motion";

function PopOverlay({ children }: any) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 99,
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
      }}
    >
      {children}
    </motion.div>
  );
}

export default PopOverlay;
