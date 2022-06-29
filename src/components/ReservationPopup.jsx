import React from "react";
import { Formik } from "formik";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
} from "semantic-ui-react";

const ReservationPopup = ({ visible, setPopupVisible }) => {
  return visible ? (
    <div className="fixed top-0 left-0 w-full h-full bg-[#00000033] flex justify-center items-center">
      <div className="relative p-8 w-full max-w-2xl bg-white">
        <Formik
        //initialValues={initialValues}
        //validationSchema={schema}
        >
          <Form
            onSubmit={() => {
              setPopupVisible([false, false]);
            }}
          >
            <Form.Group widths="equal">
              <Form.Field
                className="pitchName"
                control={Input}
                label="Saha Adı"
                placeholder="Saha Adı"
              />
              <Form.Field
                control={Input}
                label="Saha Fiyatı"
                placeholder="Saha Fiyatı"
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Field
                control={Input}
                label="Açılış saati"
                placeholder="Açılış saati"
              />
              <Form.Field
                control={Input}
                label="Kapanış saati"
                placeholder="Kapanış saati"
              />
              <Form.Field
                control={Input}
                label="Maç süresi"
                placeholder="Maç süresi"
              />
            </Form.Group>
            <Form.Field
              control={TextArea}
              label="Sahanın Adresi"
              placeholder="Adresi Yazın..."
            />
            <Form.Group>
              <Form.Field control={Checkbox} label="Sahada ışıklandırma var" />
              <Form.Field control={Checkbox} label="Sahada kamera var" />
            </Form.Group>

            <Form.Field
              control={Checkbox}
              label="I agree to the Terms and Conditions"
            />
            <Form.Field control={Button}>Submit</Form.Field>
          </Form>
        </Formik>
      </div>
    </div>
  ) : (
    ""
  );
};

export default ReservationPopup;
