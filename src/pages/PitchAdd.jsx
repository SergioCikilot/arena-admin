import React from 'react'
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
} from 'semantic-ui-react'
export default function PitchAdd() {

  const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
  ]

  return (
    <div>
      <Form>
        <Form.Group widths='equal'>
          <Form.Field
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
          <Form.Group  widths='equal'>
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
          {/* <Form.Field
            control={Select}
            label='Gender'
            options={options}
            placeholder='Gender'
          /> */}
        
        <Form.Field
          control={Checkbox}
          label='I agree to the Terms and Conditions'
        />
        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
    </div>
  )
}
