import React from 'react'
import Navbar from '../navbar/Navbar'
const Homepage = () => {
    return (
        <div>
        <div>
            <Navbar/>
        </div>
            <h1>Welcome to Homepage which is only visible when you are logged in </h1>
        </div>
    )
}
export default Homepage