import React from 'react'
import ResultsItem from './ResultsItem'

const Results = (props) => {
    return (
        <div>
            {
                props.results.map(
                    user => (
                        <ResultsItem
                            user={user}
                            key={user.login.uuid}
                        />
                    )
                )
            }
        </div>
    )
}

export default Results