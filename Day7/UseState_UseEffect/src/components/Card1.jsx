import React from 'react'

const Card1 = ({name = "aman",age="30"}) => {
    return (
        <div>
            <p id='cardPara'>hello {name} your age is {age}</p>
        </div>
    )
}

export default Card1
