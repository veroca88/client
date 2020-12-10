import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
import LOCATION_SERVICE from './services/LocationService'


export default function SearchLocation(props) {
  const { handleSubmit, errors, register } = useForm({
    defaultValues: {
      location: ""
    }
  })
  const [response, setResponse] = useState({ data: [] });

    const searchData = (data, e) => {
        LOCATION_SERVICE.search(data)
        e.target.reset(e)
    }
    
    const handleClick = async () => {
      const message = await LOCATION_SERVICE.search(response)
      console.log("message handle click", message)

    }

    return (
        <form className="location_form" onSubmit={handleSubmit(searchData)}>
          <label className="location" htmlFor="location">
            Location: 
          </label>
          <input
            aria-invalid={errors.name ? "true" : "false"}
            name="location"
            type="text"
            placeholder="location"
            ref={register({ required: true })}
            ></input>
          {errors.location && <span>This field is required</span>}
          <button type='submit' onClick={handleClick}>Search</button>
          </form>
    )
}
