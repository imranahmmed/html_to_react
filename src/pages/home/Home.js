import React from 'react'
import Achivements from '../../components/sections/achivements/Achivements'
import Copyright from '../../components/sections/footer/Copyright'
import Footer from '../../components/sections/footer/Footer'
import Navbar from '../../components/sections/navbar/Navbar'
import Portfolios from '../../components/sections/portfolio/Portfolios'
import Services from '../../components/sections/services/Services'
import Teams from '../../components/sections/Teams/Teams'
import Testimonials from '../../components/sections/Testimonials/Testimonials'
import Works from '../../components/sections/works/Works'

const Home = () => {
    return (
        <>
            <Navbar />
            <Services />
            <Achivements />
            <Works />
            <Testimonials />
            <Teams />
            <Portfolios />
            <Footer />
            <Copyright />
        </>
    )
}

export default Home