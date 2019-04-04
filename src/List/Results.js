import React from 'react'

const Results = (props) => {
    return (
        <div>
            {JSON.stringify(props.results)}
        </div>
    )
}

export default Results