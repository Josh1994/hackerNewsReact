import React from 'react';

const style = {
    container: {
        borderBottom: '4px solid ALiceBlue',
        backgroundColor: 'Skyblue',
        padding: 10
    },
    title: {
        color: 'white'
    }
}

class Header extends React.Component {
    render() {
        return (
            <header style={style.container}> 
                <div class = 'logo-wrapper'>
                    <h1 style={style.title}>Search Hack News</h1>
                </div>
                <form class = 'search-wrapper'>
                    <input
                    name="searchBar"
                    id = 'hnSearchBar'
                    placeholder = 'Search stories by xx'
                    type="input"/>
                </form>
            </header>
        )
    }
}

export default Header