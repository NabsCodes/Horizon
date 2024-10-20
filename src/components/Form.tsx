import { LoaderCircle } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Form: React.FC = () => {
  const [value, setValue] = useState("yourmail@gmail.com");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 3000);
  };

  return (
    <div>
      {submitted ? (
        <>
          {loading && (
            <div className="mx-auto flex w-full max-w-md items-center justify-center rounded-lg bg-violet-500 px-4 py-3 text-base leading-6 text-white">
              <LoaderCircle className="h-5 w-5 animate-spin" />
            </div>
          )}
          {success && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  damping: 40,
                  stiffness: 160,
                  mass: 1,
                },
              }}
              viewport={{
                amount: "some",
                once: true,
              }}
              className="mx-auto flex w-fit items-center justify-center rounded-lg text-base leading-6 text-white"
            >
              <div className="h-15 w-15 flex items-center justify-center rounded-full bg-violet-500 p-3 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  className="transform-none"
                >
                  <path
                    d="M 2 14 L 10 22 L 26 6"
                    fill="transparent"
                    strokeWidth="4"
                    stroke="currentColor"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </div>
            </motion.div>
          )}
        </>
      ) : (
        <form
          className="mx-auto flex max-w-md flex-col gap-4 md:flex-row md:items-center"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="flex-grow rounded-lg bg-gray-200 px-4 py-3 text-base font-normal leading-6 text-gray-700 placeholder:text-gray-900 focus:outline-none"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            className="w-full rounded-lg bg-violet-500 px-4 py-3 text-base leading-6 text-white transition-all duration-300 hover:opacity-90 md:w-fit"
            type="submit"
          >
            Notify me
          </button>
        </form>
      )}
    </div>
  );
};

export default Form;
