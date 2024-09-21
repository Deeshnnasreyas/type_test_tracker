import React from "react";
import { FaRegClock } from "react-icons/fa";
const Timer = () => {
  return (
    <div className="flex gap-2 items-center font-medium">
      <FaRegClock />
      <p className="text-red-500">Time Left:1min</p>
    </div>
  );
};

export default Timer;
