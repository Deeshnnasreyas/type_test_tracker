import { Button } from "flowbite-react";
import TextAreaTyping from "./TextAreaTyping";
import TextDispaly from "./TextDispaly";
import Timer from "./Timer";

const TypeApp = () => {
  return (
    <div className="mt-4 space-y-8 px-4">
      <h2>Type Test Tracker</h2>
      <TextDispaly />
      <TextAreaTyping />
      <Timer />
      <div className="flex gap-4">
        <Button color="blue">Submit Test</Button>
        <Button color="failure">Test Test</Button>
      </div>
    </div>
  );
};

export default TypeApp;
