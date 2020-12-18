import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
import LOCATION_SERVICE from './services/LocationService'


export default function SearchLocation() {
  const { handleSubmit, errors, register } = useForm({
    defaultValues: {
      location: ""
    }
  })
  const [response, setResponse] = useState({ data: [] });
  const [loadMessage, setLoadMessage] = useState(false)
  const [weatherInfo, setWeatherInfo] = useState('Not info yet')

    
    const handleClick = async() => {
      const responseAPI = await LOCATION_SERVICE.search(response)
      setLoadMessage(true)
      setWeatherInfo(responseAPI.data)
      console.log(weatherInfo)
      }

    return (
        <form onSubmit={handleSubmit(handleClick)}>
          <label className="location" htmlFor="location">
            Location: 
          </label>
          <input
          className="input_location"
          aria-invalid={errors.name ? "true" : "false"}
          name="location"
          type="text"
          placeholder=" Location"
          ref={register({ required: true })}
          required
          ></input>
            <div>
          {errors.location && <span>This field is required</span>}
            </div>
            <div className="output_info">
            {loadMessage? weatherInfo : null}
            </div>
          </form>
    )
}
