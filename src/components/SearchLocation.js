import React from 'react'

import { useForm } from 'react-hook-form'

import LOCATION_SERVICE from './services/LocationService'

export default function SearchLocation(props) {
    const { handleSubmit, errors, register } = useForm({
        defaultValues: {
            location: ""
        }
    })

    const searchData = (data, e) => {
        LOCATION_SERVICE.message(data)
        e.target.reset(e)
    }

    return (
        <form onSubmit={handleSubmit(searchData)}>
          <label htmlFor="location">
            location:
          </label>
          <input
            aria-invalid={errors.name ? "true" : "false"}
            name="location"
            type="text"
            placeholder="location"
            ref={register({ required: true })}
            ></input>
          {errors.location && <span>This field is required</span>}
          </form>
    )
}
            // <Form onSubmit={handleSubmit(searchData)}>
            //     <Form.Row>
            //         <Form.Label column lg>
            //          Which location do you want to see?
            //          </Form.Label>
            //          <Col>
            //          <Form.Control type="text" name="location" onChange={} placeholder="Location" />
            //         </Col>
            //     </Form.Row>
            // </Form>
