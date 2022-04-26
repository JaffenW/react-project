import React from "react";

export default class About extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            name: ''
        }
    }

    render() {
        return (
            <div>
                this is about
            </div>
        )
    }
}