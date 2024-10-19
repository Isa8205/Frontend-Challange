import { motion } from "framer-motion";

function Loader() {
    return (
        <span className="w-full px-10 flex justify-center items-center py-4">
            <motion.span
                className="relative w-32 h-32 loader-parent border-x-4 border-y-4 border-x-green-600 border-y-white-400 rounded-full p-2 grid place-items-center"
                animate={{ rotate: -360 }}
                transition={{
                    duration: 2,
                    ease: 'linear',
                    repeat: Infinity,
                }}
            ></motion.span>

            <motion.span
                className="absolute h-16 w-16 loader-child border-x-4 border-y-4 border-x-green-600 border-y-white-400 rounded-full"
                animate={{ rotate: 360 }}
                transition={{
                    duration: 2,
                    ease: 'linear',
                    repeat: Infinity
                }}
            >
            </motion.span>
        </span>
    );
}

export default Loader;
