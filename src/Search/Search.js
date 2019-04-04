import React from 'react'
import TextField from '@material-ui/core/TextField'
import SearchIcon from '@material-ui/icons/Search'
import Grid from '@material-ui/core/Grid'

const Search = (props) => {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'flex-end'
            }}
        >

            <SearchIcon
                style={{
                    margin: '10px 20px 10px 10px'
                }}
            />
            <TextField
                id={'input-with-icon-grid'}
                label={'Search person'}
                value={props.searchTerm}
                onChange={props.searchTermChange}
                fullWidth={true}
            />

        </div >
    )
}

export default Search

