import React from "react";
import { Button, Container, Grid, GridRow, Label } from "semantic-ui-react";

const ReservationPopupExistingReservation = ({
  visible,
  setPopupVisible,
  date,
  hour,
}) => {
  return visible ? (
    <div className="fixed top-0 left-0 w-full h-full bg-[#00000033] flex justify-center items-center">
      <div className="relative p-8 w-full max-w-2xl bg-white flex flex-col">
        <div className="flex justify-around items-baseline">
          <div className="flex items-baseline w-full justify-center">
            <h4 className="text-center mx-2 ">İsim: </h4>
            <h4 className="text-center">Mahmut</h4>
          </div>
          <div className="flex items-baseline w-full justify-center">
            <h4 className="text-center mx-2">Soyisim: </h4>
            <h4 className="text-center">Mahmutoğlu</h4>
          </div>
        </div>
        <div className="flex justify-around items-baseline ">
          <div className="flex items-baseline w-full justify-center">
            <h4 className="text-center mx-2">Tarih: </h4>
            <h4 className="text-center">{date + " - " + hour}</h4>
          </div>
          <div className="flex items-baseline  w-full justify-center">
            <h4 className="text-center mx-2r">Fiyat: </h4>
            <h4 className="text-center">300₺</h4>
          </div>
        </div>

        <Button onClick={() => setPopupVisible(false)}>Tamam</Button>
      </div>
    </div>
  ) : (
    ""
  );
};

export default ReservationPopupExistingReservation;
