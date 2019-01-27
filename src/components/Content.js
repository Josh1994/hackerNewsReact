import React from 'react';

const style = {
    title: {
        color: 'Skyblue'
    }
}

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: 'This is your content!'
        };
    }

    render () {
        return (
            <main>
                <h2 style={style.title}>
                    {this.props.contentTitle}
                </h2>
                <div>{this.state.content}</div>
            </main>
        )
    }
}

export default Content