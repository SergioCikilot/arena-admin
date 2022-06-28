import React from "react";
import { format } from "date-fns";

import addDays from "date-fns/addDays";
import addHours from "date-fns/addHours";


export default function ReservationPage() {
  return (
    <div>
      <table className="border-spacing-2 border-collapse w-11/2">
        <thead>
          <tr className="">
            <th></th>
            {[...Array(7)].map((day, i) => (
              <th className={`text-black border-b-2 ${ i !== 6 ? 'border-r-2' : ''} border-gray-500 px-1 text-lg`} key={i}>
                {format(addDays(new Date(), i), "eeee")}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {[...Array(12)].map((_, j) => (
            <tr>
              <td></td>
              {[...Array(7)].map((day, i) => (
                <td
                  key={i}
                  className={`w-60 h-24 mx-10 ${ i !== 6 ? 'border-r-2' : ''} border-gray-500 bg-clip-content ${j%5=== Math.floor(Math.random()*5)  ? "bg-red-400 hover:bg-red-300" : "bg-green-400 hover:bg-green-300"} px-2 py-2 text-2xl text-white`}
                >  <h1 className="">{format(addHours(new Date(), j), "HH:mm")}</h1></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
