import { useState } from "react"
import React, { useReducer } from "react"
import { useNavigate } from "react-router-dom"





export default function BookingForm(props){
    const navigate = useNavigate();
const [formData, setFormData] = useState(
    {
        Resdate: "",
        guests: "",
        occasion: "",
    })

    const [formError, setFormError] = useState({})

    function updateTimes(state, action) {
        switch (action.type) {
            case "SELECT":
                return { ...state, availableTimes: action.payload }
            default:
                throw new Error()
        }
    }

    const initializeTimes = {
        availableTimes: [],
    }



    const [state, dispatch] = useReducer(updateTimes, initializeTimes);

    function handleChange(event){
        const {name, value} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    const validateForm = () => {
        let err = {}
        if(formData.guests < 2) {
            err.guests = "Number of guests must be more than 1"
        }
        if(formData.occasion === "") {
            err.occasion = "Occasion required"
        }
        if(formData.Resdate === "") {
            err.Resdate = "Date required"
        }
        setFormError({...err})

        return Object.keys(err).length < 1
    }

    function handleSubmit(event){
        event.preventDefault()
        props.onSubmit(state.availableTimes)
        let isValid = validateForm()

        if(isValid) {
            alert("Submitted")
            navigate("/confirmCooking")
        }
        else {
            alert("In Valid Form")
        }
        console.log(isValid)
        // alert(formData.Resdate + " " + state.availableTimes + " " + formData.guests + " " + formData.occasion)
    }



    return (
        <div className="form">
            <div className="form-h1">
                <h1>Dinner Reservation</h1>
            </div>

            <form onSubmit={handleSubmit} className="form-div" >
                <label htmlFor="Resdate">Choose date</label>
                <input onChange={handleChange}
                        type="date"
                        id="Resdate"
                        name="Resdate"
                        value={formData.Resdate} />
                <span className="non-valid">{formError.Resdate}</span>
                <br />
                <label htmlFor="availableTimes">Choose time</label>
                <select onChange={(e) => dispatch({type: "SELECT", payload: e.target.value})}
                        id="availableTimes"
                        name="availableTimes"
                        value={state.availableTimes}>
                    <option value={"---"}></option>
                    <option value={17.00}>17:00</option>
                    <option value={18.00}>18:00</option>
                    <option value={19.00}>19:00</option>
                    <option value={20.00}>20:00</option>
                    <option value={21.00}>21:00</option>
                    <option value={22.00}>22:00</option>
                </select>
                <br />
                <label htmlFor="guests">Number of guests</label>
                <input onChange={handleChange}
                        name="guests"
                        value={formData.guests}
                        type="number"
                        placeholder="Number of guests" min="1" max="10"
                        id="guests" />
                <span className="non-valid">{formError.guests}</span>
                <br />
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion"
                        onChange={handleChange}
                        name="occasion"
                        value={formData.occasion}>
                    <option></option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <span className="non-valid">{formError.occasion}</span>
                <br />
                <input className="form-submit" type="submit" value="Make Your reservation" />
                {/* <h1>The available time chosen is {props.availableTimes}</h1> */}
            </form>
            </div>
    )
}