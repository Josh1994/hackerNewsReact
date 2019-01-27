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
                <h1 style={style.title}>Hello React!</h1>
            </header>
        )
    }
}

export default Header