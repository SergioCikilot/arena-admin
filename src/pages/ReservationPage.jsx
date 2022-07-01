import React, { useState, useEffect } from "react";
import { format, toDate } from "date-fns";

import addDays from "date-fns/addDays";
import addHours from "date-fns/addHours";
import classNames from "classnames";
import isSameDay from "date-fns/isSameDay";
import { getAllPitches } from "../services/userService";
import { getReservations } from "../services/reservationService";

import Cookies from "universal-cookie";
import { Menu, Loader } from "semantic-ui-react";
import ReservationPopup from "../components/ReservationPopup";
import ReservationPopupExistingReservation from "../components/ReservationPopupExistingReservation";

export default function ReservationPage() {
  const [startingDate, setStartingDate] = useState(new Date());
  const [numberOfHours, setNumberOfHours] = useState(0);
  const [reservationDates, setReservationDates] = useState({});
  const [nameFromResIndex, setNameFromResIndex] = useState({});
  const [indexHasReservations, setIndexHasReservations] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [currentCellDate, setCurrentCellDate] = useState("");
  const [currentCellHour, setCurrentCellHour] = useState("");
  const [currentCellFull, setCurrentCellFull] = useState(false);
  const [currentCellPlayerName, setCurrentCellPlayerName] = useState("");
  const [currentCellPlayerSirName, setCurrentCellPlayerSirName] = useState("");
  const [popupVisible, setPopupVisible] = useState(false);

  const rowLength = 12;

  async function getPitch() {
    const cookies = new Cookies();
    var auth = cookies.get("auth");
    var resp = await getAllPitches(auth);
    setStartingDate(
      addHours(
        start.setHours(0, 0, 0),
        parseInt(resp.data[0].pitchOpeningTime.substring(0, 2))
      )
    );

    var closingTime = parseInt(resp.data[0].pitchClosingTime.substring(0, 2));
    if (closingTime < 12) {
      closingTime += 24;
    }
    setNumberOfHours(
      closingTime - parseInt(resp.data[0].pitchOpeningTime.substring(0, 2)) + 1
    );
  }

  async function getReservedHours() {
    const cookies = new Cookies();
    var auth = cookies.get("auth");

    var resp = await getReservations(auth, 1);
    var resDates = {};
    resp.data.forEach((res) => {
      const year = +res.reservationDate.substring(0, 4);
      const month = +res.reservationDate.substring(5, 7);
      const day = +res.reservationDate.substring(8, 10);

      const resDate = new Date(year, month - 1, day);
      var date = addHours(resDate, res.reservationTime.substring(0, 2));
      resDates = { ...resDates, [date]: res };
    });
    setReservationDates(resDates);
  }

  function GetfirstMonday() {
    var td = new Date();
    td.setDate(td.getDate());
    while (td.getDay() !== 1) td.setDate(td.getDate() - 1);

    return td;
  }

  useEffect(() => {
    init();
    for (let k = 0; k < 4; k++) {
      for (let j = 0; j < 7; j++) {
        for (let l = 0; l < Math.ceil(numberOfHours / rowLength); l++) {
          for (
            let i = 0;
            i <
            (l === Math.ceil(numberOfHours / rowLength) - 1
              ? numberOfHours % rowLength
              : rowLength);
            i++
          ) {
            howManyReservationsInIndex(i, j, k, l);
          }
        }
      }
    }
    console.log(indexHasReservations);
  }, []);

  async function init() {
    await getPitch();
    await getReservedHours();
    setIsLoading(false);
  }

  function handleResClick(e, i, j, k, l, isFull) {
    console.log(e.target);
    var clickedDate = addHours(
      addDays(startingDate, k * 7 + j),
      l * rowLength + i
    );
    setCurrentCellDate(format(clickedDate, "yyyy-MM-dd"));
    setCurrentCellHour(format(clickedDate, "HH:mm"));
    setCurrentCellFull(isFull);
    setCurrentCellPlayerName(nameFromResIndex[[i, j, k, l]].name);
    setCurrentCellPlayerSirName(nameFromResIndex[[i, j, k, l]].surname);
    setPopupVisible(true);
  }

  const start = GetfirstMonday();

  function howManyReservationsInIndex(i, j, k, l) {
    var dates = [];
    Array.from(Object.keys(reservationDates)).forEach((date) =>
      dates.push(new Date(date))
    );

    var filtered = dates.filter(
      (res) =>
        isSameDay(
          res,
          addHours(addDays(startingDate, k * 7 + j), l * rowLength + i)
        ) &&
        res.getHours() ===
          addHours(
            addDays(startingDate, k * 7 + j),
            l * rowLength + i
          ).getHours()
    );
    console.log([i, j, k, l], filtered);

    if (filtered.length > 0) {
      console.log("as");
      setNameFromResIndex({
        ...nameFromResIndex,
        [[i, j, k, l]]: {
          name: reservationDates[filtered[0].toString()]["playerName"],
          surname: reservationDates[filtered[0].toString()]["playerSirName"],
        },
      });
    }
    setIndexHasReservations({
      ...indexHasReservations,
      [[i, j, k, l]]: filtered.length > 0,
    });

    return filtered.length;
  }

  return (
    <div>
      <Menu pointing secondary>
        <Menu.Item
          name="home"
          // active={activeItem === 'home'}
          // onClick={this.handleItemClick}
        />
        <Menu.Item name="messages" />
        <Menu.Item name="favorites" />
        <Menu.Menu position="right">
          <Menu.Item name="sayfa ileri" />
        </Menu.Menu>
      </Menu>
      {isLoading ? (
        <Loader size="huge" active className="!mt-96">
          Yükleniyor
        </Loader>
      ) : (
        <div>
          {currentCellFull ? (
            <ReservationPopupExistingReservation
              visible={popupVisible}
              setPopupVisible={setPopupVisible}
              date={currentCellDate}
              hour={currentCellHour}
            />
          ) : (
            <ReservationPopup
              visible={popupVisible}
              setPopupVisible={setPopupVisible}
              date={currentCellDate}
              hour={currentCellHour}
            />
          )}
          <table className="border-spacing-2 border-collapse w-11/2">
            <tbody>
              {[...Array(1)].map((_, k) => (
                <div>
                  <td className="text-xl">
                    {format(addDays(start, k * 7), "dd/MM/yyyy")}
                  </td>
                  <div className="mb-10 border-t-2 border-b-2 border-gray-600">
                    {[...Array(7)].map((_, j) => (
                      <tr>
                        <th
                          rowSpan={1}
                          className={classNames(
                            `text-black border-r-2 border-l-2 px-1 text-lg`,
                            {
                              "border-yellow-300 border-t-2": isSameDay(
                                new Date(),
                                addDays(start, j + k * 7)
                              ),
                              "border-gray-500": !isSameDay(
                                new Date(),
                                addDays(start, j + k * 7)
                              ),
                              "border-b-2":
                                j !== 6 &&
                                !isSameDay(
                                  new Date(),
                                  addDays(start, j + k * 7 + 1)
                                ),
                            }
                          )}
                          key={j}
                        >
                          {format(addDays(start, j + k * 7), "eeee")}
                        </th>
                        {[...Array(Math.ceil(numberOfHours / rowLength))].map(
                          (_, l) => (
                            <tr>
                              {[
                                ...Array(
                                  l === Math.ceil(numberOfHours / rowLength) - 1
                                    ? numberOfHours % rowLength
                                    : rowLength
                                ),
                              ].map((day, i) => {
                                return (
                                  <td
                                    onClick={(e) =>
                                      handleResClick(
                                        e,
                                        i,
                                        j,
                                        k,
                                        l,
                                        indexHasReservations[[i, j, k, l]]
                                      )
                                    }
                                    key={i}
                                    className={classNames(
                                      `w-32 h-16 mx-10 border-gray-500 bg-clip-content px-2 py-2 text-lg text-white  `,
                                      {
                                        " border-t-2": l === 0 && j !== 0,
                                        "bg-red-400 hover:bg-red-300":
                                          indexHasReservations[[i, j, k, l]],
                                        "bg-green-400 hover:bg-green-300":
                                          !indexHasReservations[[i, j, k, l]] &&
                                          new Date().getTime() <
                                            addHours(
                                              addDays(startingDate, k * 7 + j),
                                              l * rowLength + i
                                            ),
                                        "bg-gray-300 hover:bg-gray-200":
                                          !indexHasReservations[[i, j, k, l]] &&
                                          new Date().getTime() >
                                            addHours(
                                              addDays(startingDate, k * 7 + j),
                                              l * rowLength + i
                                            ),
                                      }
                                    )}
                                  >
                                    <h3 className="flex justify-center items-center h-full pointer-events-none">
                                      {format(
                                        addHours(
                                          startingDate,
                                          i + l * rowLength
                                        ),
                                        "HH:mm"
                                      )}
                                    </h3>
                                  </td>
                                );
                              })}
                            </tr>
                          )
                        )}
                      </tr>
                    ))}
                  </div>
                </div>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
