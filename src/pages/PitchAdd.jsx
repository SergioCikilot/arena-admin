import { Formik } from 'formik'
import React, { useState } from 'react'
import * as Yup from "yup";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
} from 'semantic-ui-react'
import PitchService from "../services/pitchService"
export default function PitchAdd() {

  //const initialValues = { pitchName: "" };
  const [pitches, setPitches] = useState([])
  let pitchService = new PitchService()
  pitchService.getAllPitches().then(result => setPitches(result.data))

  // const schema = Yup.object({
  //   pitchName: Yup.string().required("Saha adı zorunlu"),
  // });

  return (
    <div>
      <Formik
        //initialValues={initialValues}
        //validationSchema={schema}
        // onSubmit={(pitches) => {
        //   console.log(pitches)
        // }}
        >
        <Form>
          <Form.Group widths='equal'>
            <Form.Field
              className='pitchName'
              control={Input}
              label='Saha Adı'
              placeholder='Saha Adı'
            />
            <Form.Field

              control={Input}
              label='Saha Fiyatı'
              placeholder='Saha Fiyatı'
            />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Field

              control={Input}
              label='Açılış saati'
              placeholder='Açılış saati'
            />
            <Form.Field
              control={Input}
              label='Kapanış saati'
              placeholder='Kapanış saati'
            />
            <Form.Field
              control={Input}
              label='Maç süresi'
              placeholder='Maç süresi'
            />
          </Form.Group>
          <Form.Field
            control={TextArea}
            label='Sahanın Adresi'
            placeholder='Adresi Yazın...'
          />
          <Form.Group  >
            <Form.Field
              control={Checkbox}
              label='Sahada ışıklandırma var'
            />
            <Form.Field
              control={Checkbox}
              label='Sahada kamera var'
            />

          </Form.Group>


          <Form.Field
            control={Checkbox}
            label='I agree to the Terms and Conditions'
          />
          <Form.Field
            control={Button}>
            Submit
          </Form.Field>

        </Form>
      </Formik>
    </div>
  )
}
