import React, { Component } from "react";
import firebase from './firebase';

class AddItem extends Component {
    constructor() {
        super();
        this.state = {
            idea: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ idea: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();
        const itemRef = firebase.database().ref('wakWednesday');
        const newIdea = {
            idea: this.state.idea
        }
        itemRef.push(newIdea);
        this.setState({ idea: '' });
    }
    render() {
        return (
            <div id="submit_idea" className={this.props.activeClass}>
                <form onSubmit={this.handleSubmit}>
                    <textarea type="text" value={this.state.idea} style="height: 150px; width: 150px;" name="idea" onChange={this.handleChange} placeholder="What's your new idea?" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default AddItem;