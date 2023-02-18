// import CTO from "./Components/CTO"
// import Specials from "./Components/Specials"
// import CustomersSay from "./Components/CustomersSay"
// import Chicago from "./Components/Chicago"
// import BookingPage from "./Components/BookingPage"
import {Routes, Route} from "react-router-dom"
import HomePage from "./Components/HomePage"
import { useState } from "react"
import BookingForm from "./Components/BookingForm"
import ConfirmedBooking from "./Components/ConfirmedBooking"



export default function Main(props){
    const [availableTimes, setAvailableTimes] = useState(null)
    const getData = (data) => {
        setAvailableTimes(data)

    }


    // console.log("Coming from MainJS", availableTimes)
    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="reservations" element={<BookingForm onSubmit={getData}
                                                            availableTimes = {availableTimes} />} />
                <Route path="/confirmCooking" element={<ConfirmedBooking />} />
            </Routes>
        </main>
    )
}