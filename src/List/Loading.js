import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

const Loading = () => {
    return (
        <div
            style={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <CircularProgress
                color="secondary"
            />
        </div>
    )
}

export default Loading