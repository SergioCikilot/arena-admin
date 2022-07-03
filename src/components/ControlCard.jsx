import React from "react";
import { Icon } from "semantic-ui-react";

const ControlCard = () => {
  return (
    <div className="w-1/5 h-32 p-4 bg-gray-300 shadow-md flex justify-between px-10">
      <div>
        <h4>Günlük Gelir</h4>
        <h2 className="my-2">12931₺</h2>
        <h4 className="text-green-500 my-0">+73%</h4>
      </div>
      <Icon name="credit card" size="huge" className="!mt-6 !opacity-40"></Icon>
    </div>
  );
};

export default ControlCard;
