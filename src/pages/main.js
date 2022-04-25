import React from "react";

export default class Main extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            name: ''
        }
    }

    render() {
        return (
            <div>
                this is main
            </div>
        )
    }
}