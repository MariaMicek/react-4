import React from 'react'
import List from '../List'
import Search from '../Search'

class Users extends React.Component {
    state = {
        users: null,
        isError: false,
        isLoading: false,
        searchTerm: ''
    }

    componentDidMount() {
        this.setState({ isLoading: true })

        fetch('https://randomuser.me/api/?results=10')
            .then(response => response.json())
            .then(data => this.setState({ users: data.results }))
            .catch(() => this.setState({ isError: true }))
            .finally(() => this.setState({ isLoading: false }))
    }

    searchTermChange = event => {
        this.setState({ searchTerm: event.target.value })
    }

    render() {
        const filteredUsers = (
            this.state.users &&
            this.state.users.filter &&
            this.state.users.filter(
                user => {
                    const name = (user.name.first + user.name.last).toLowerCase()
                    const searchTerm = this.state.searchTerm.toLowerCase().replace(/ /g, '')
                    const searchTermWithoutDiacritics = searchTerm.normalize('NFD').replace(/[\u0300-\u036f]/g, "")

                    return name.includes(searchTermWithoutDiacritics)
                } 
            ) 

        )
        return (
            <div>
                <Search 
                    searchTerm={this.state.searchTerm}
                    searchTermChange={this.searchTermChange}
                />
                <List
                    users={filteredUsers}
                    isError={this.state.isError}
                    isLoading={this.state.isLoading}
                />
            </div>
        )
    }
}

export default Users