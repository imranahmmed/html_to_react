import React from 'react'


const Achivement = ({score, acName}) => {
    return (
        <div className="achieveamount">
            <h1>{score}</h1>
            <h4>{acName}</h4>
        </div>
    )
}

export default Achivement