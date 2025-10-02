

const State = ({statesList}) => {

    return (
        <div>
            <select>
                {
                    statesList.slice(1).map((state,index)=>(
                        <option key={index}>{state}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default State

