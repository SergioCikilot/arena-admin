import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
} from "semantic-ui-react";
import { addReservation } from "../services/reservationService";
import Cookies from "universal-cookie";

function validate(value, toast) {
  if (!/^[A-Za-z]/.test(value)) {
    toast.error("İsim ve soyisim alanı boş olamaz", {
      position: "bottom-center",
    });
    return "İsim ve soyisim alanı boş olamaz";
  }
}

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const ReservationPopup = ({
  visible,
  setPopupVisible,
  date,
  hour,
  init,
  toast,
}) => {
  return visible ? (
    <div className="fixed top-0 left-0 w-full h-full bg-[#00000033] flex justify-center items-center">
      <div className="relative p-8 w-full max-w-2xl bg-white">
        <Formik
          initialValues={{ form: "" }}
          validationSchema={SignupSchema}
          onSubmit={(values) => console.log(values)}
          //initialValues={initialValues}
          //validationSchema={schema}
        >
          <Form
            validationSchema={SignupSchema}
            onSubmit={async (values) => {
              const cookies = new Cookies();
              var auth = cookies.get("auth");

              var resp = await addReservation(auth, {
                pitchId: 1,
                playerName: values.target[0].value,
                playerSirName: values.target[1].value,
                reservationDate: date,
                reservationIsRated: true,
                reservationTime: hour + ":00",
              })
                .then(() => {
                  toast.success("Reservasyon Başarıyla Eklendi", {
                    position: "bottom-center",
                  });
                  init();
                  setPopupVisible(false);
                })
                .catch(() => {
                  toast.error("Bir şeyler yanlış gitti", {
                    position: "bottom-center",
                  });
                  setPopupVisible(false);
                });
            }}
          >
            <Form.Group widths="equal">
              <Form.Field
                name="firstName"
                className="playerName"
                control={Input}
                label="Oyunucu ismi"
                placeholder="Oyunucu ismi"
                validate={(value) => validate(value, toast)}
              />
              <Form.Field
                name="lastName"
                className="playerSirname"
                control={Input}
                label="Oyuncu Soyisim"
                placeholder="Oyuncu Soyisim"
                validate={(value) => validate(value, toast)}
              />
            </Form.Group>
            <Form.Group className="justify-center items-center">
              <Button onClick={() => setPopupVisible(false)}>Geri Dön</Button>
              <Button className="primary !ml-5">Reservasyon Ekle</Button>
            </Form.Group>
          </Form>
        </Formik>
      </div>
    </div>
  ) : (
    ""
  );
};

export default ReservationPopup;
