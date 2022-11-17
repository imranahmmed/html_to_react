import React, { useState, useEffect } from 'react'
import Achivement from './Achivement.js'
import './achivement.css'







const Achivements = () => {
    // let data = '../../../Data/achivement'
    // let data = '../../../Data/users.json'
    let data = 'https://jsonplaceholder.typicode.com/users'
    const [acdata, setacdata] = useState([]);
    useEffect(() => {
        fetch(data)
            .then((info) => info.json())
            .then((info) => setacdata(info))
    }, []);

    return (
        <section className="achivement">
            <div className="achievementcontainer container">
                {
                    acdata.map(({ id, name }, index) => (
                        <Achivement key={index} score={id} acName={name} />
                    ))
                }
            </div>
        </section>
    )
}

export default Achivements