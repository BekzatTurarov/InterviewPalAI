import { useState } from "react";
import axios from "axios";

type Props = {
  setMessages: any;
};

function Title({ setMessages }: Props) {
  const [isResetting, setIsResetting] = useState(false);

  // Reset conversation
  const resetConversation = async () => {
    setIsResetting(true);

    await axios
      .get("https://interview-pal-ai.onrender.com/reset", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (res.status == 200) {
          setMessages([]);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    setIsResetting(false);
  };

  return (
    <div className="flex justify-between items-center w-full p-4 bg-gray-800 text-white font-bold shadow">
      <div className="mb-1 max-w-2xl text-2xl font-extrabold leading-none md:text-2xl xl:text-2xl dark:text-white">
        <a href="/">InterviewPal: Your Virtual HR Manager</a>
      </div>
      <button
        onClick={resetConversation}
        className={
          "transition-all duration-300 text-blue-300 hover:text-white " +
          (isResetting && "animate-pulse")
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      </button>
    </div>
  );
}

export default Title;
