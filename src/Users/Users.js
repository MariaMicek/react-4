import React from 'react'
import List from '../List'

class Users extends React.Component {
    state = {
        users: null,
        isError: false,
        isLoading: false,
    }

    componentDidMount() {
        this.setState({ isLoading: true })

        fetch('https://randomuser.me/api/?results=10')
            .then(response => response.json())
            .then(data => this.setState({ users: data.results }))
            .catch(() => this.setState({ isError: true }))
            .finally(() => this.setState({ isLoading: false }))
    }

    render() {
        return (
            <div>
                <List
                    users={this.state.users}
                    isError={this.state.isError}
                    isLoading={this.state.isLoading}
                />
            </div>
        )
    }
}

export default Users