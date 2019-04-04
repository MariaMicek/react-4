import React from 'react'
import ResultsItem from './RsultsItem'

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