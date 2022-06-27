import React from "react";
import { format } from "date-fns";

import addDays from "date-fns/addDays";

export default function ReservationPage() {
  return (
    <div>
      <table className="border-spacing-2 border-separate border border-black">
        <thead>
          <tr className="mx-40 ">
            <th></th>
            {[...Array(10)].map((day, i) => (
              <th className="text-emerald-800 " key={i}>
                {format(addDays(new Date(), i), "yyyy-MM-dd")}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {[...Array(5)].map((_, j) => (
            <tr>
              <td>{j}</td>
              {[...Array(10)].map((day, i) => (
                <td
                  key={i}
                  className="w-32 h-20 mx-10 border border-black bg-red-600"
                ></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
