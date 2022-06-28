import React, {useState, useEffect} from "react";
import { format ,toDate} from "date-fns";

import addDays from "date-fns/addDays";
import addHours from "date-fns/addHours";
import classNames from "classnames"
import isSameDay from "date-fns/isSameDay"
import { getAllPitches, getReservations } from "../services/userService";
import Cookies from "universal-cookie";
import {Menu} from 'semantic-ui-react'


export default function ReservationPage() {

  const [pitch, setPitch] = useState({});
  const [startingDate, setStartingDate] = useState(new Date());
  const [numberOfHours, setNumberOfHours] = useState(0);
  const [reservations, setReservations] = useState([]);
  const [reservationDates, setReservationDates] = useState([]);

  const rowLength =12;

  async function getPitch() {
    const cookies = new Cookies();
    var auth = cookies.get("auth");
    var resp = await getAllPitches(auth);
    setPitch(resp.data[0]);
    setStartingDate(addHours(start.setHours(0,0,0),parseInt(resp.data[0].pitchOpeningTime.substring(0,2))));

    var closingTime = parseInt(resp.data[0].pitchClosingTime.substring(0,2));
    if (closingTime < 12) 
    {
      closingTime += 24;
    }
    setNumberOfHours(closingTime - parseInt(resp.data[0].pitchOpeningTime.substring(0,2)) + 1 );
    console.log(pitch);
  };

  async function getReservedHours(){
    const cookies = new Cookies();
    var auth = cookies.get("auth");
    
    var resp = await getReservations(auth,1);
    console.log(resp.data);
    setReservations(resp.data);
 

    var resDates = []
    resp.data.forEach((res) => {
      const year = +res.reservationDate.substring(0, 4);
      const month = +res.reservationDate.substring(5, 7);
      const day = +res.reservationDate.substring(8, 10);
      
      console.log(year + " - " + month + " - " + day);    

      const resDate = new Date(year, month - 1, day);
      var date = addHours(resDate,res.reservationTime.substring(0,2));
      resDates.push(date);
    })
    setReservationDates(resDates);
    
    console.log("res -> " + reservationDates[reservationDates.length-1]);
    console.log("index -> " +  addHours(addDays(startingDate,0*7+0),0*12 + 11));
    console.log(reservationDates[reservationDates.length-1].getTime() === addHours(addDays(startingDate,0*7+0),0*12 + 11).getTime());
  };

  function GetfirstMonday() {
    var td = new Date();
    td.setDate(td.getDate());
    while (td.getDay() !== 1) td.setDate(td.getDate() - 1);

    return td;
  };

  useEffect(() => {
    getPitch();
    getReservedHours();
  },[]);

  const start = GetfirstMonday();

  return (
    <div>
     <Menu pointing secondary>
                <Menu.Item
                    name='home'
                // active={activeItem === 'home'}
                // onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='messages'

                />
                <Menu.Item
                    name='favorites'

                />
                <Menu.Menu position='right'>
                    <Menu.Item
                        name='sayfa ileri'

                    />
                </Menu.Menu>
            </Menu>

      <table className="border-spacing-2 border-collapse w-11/2">
        

        <tbody>
        {[...Array(4)].map((_,k) =>(
          <div>
          <td className="text-xl">{format(addDays(start, k*7), "dd/MM/yyyy")}</td>
          <div className="mb-10 border-t-2 border-b-2 border-gray-600">
          
          {[...Array(7)].map((_, j) => (
            <tr>
            <th 
            rowSpan={1}
            className={classNames(`text-black border-r-2 border-l-2 px-1 text-lg`,
            {
              'border-yellow-300 border-t-2' : isSameDay(new Date(), addDays(start,j + k*7)),
              'border-gray-500' : !isSameDay(new Date(),addDays(start,j + k*7)),
              'border-b-2' : j!==6 && !isSameDay(new Date(),addDays(start,j + k*7 +1)),
            })} key={j}>
                {format(addDays(start, j + k*7), "eeee")}
              </th>
              {[...Array(Math.ceil(numberOfHours/rowLength))].map((_,l) => (
                <tr>
                {[...Array(l === Math.ceil(numberOfHours/rowLength) -1 ? numberOfHours%rowLength : rowLength)].map((day, i) => (
                <td
                  key={i}
                  className={classNames(`w-32 h-16 mx-10 border-gray-500 bg-clip-content px-2 py-2 text-lg text-white  `,
                  {
                   " border-t-2" : l === 0 && j !== 0,
                   "bg-red-400 hover:bg-red-300" : reservationDates.filter((res) => isSameDay(res, addHours(addDays(startingDate,k*7+j),l*rowLength + i)) && res.getHours() === addHours(addDays(startingDate,k*7+j),l*rowLength + i).getHours()).length >= 1 , 
                   "bg-green-400 hover:bg-green-300" : reservationDates.filter((res) => isSameDay(res,addHours(addDays(startingDate,k*7+j),l*rowLength + i)) && res.getHours() === addHours(addDays(startingDate,k*7+j),l*rowLength + i).getHours()).length === 0,

                  })}
                >  <h3 className="flex justify-center items-center h-full">{format(addHours(startingDate, i + l*rowLength), "HH:mm")}</h3></td>
              ))}
                </tr>
              ))}
             
            </tr>
          ))}
          </div>
          </div>))
        }
        </tbody>
      </table>
    </div>
  );
}
