import React from 'react'

const ResultsItem = (props) => {
    return (
        <div>
            {
                <div>
                    {props.user.name.first} {props.user.name.last}
                </div>
            }
        </div>
    )
}

export default ResultsItem