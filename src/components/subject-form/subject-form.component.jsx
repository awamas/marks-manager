import React from "react";
import FormControl from "../form-control/form-contorl.component";
import { pushSubject } from "../../redux/marks-manager/manager.actions";
import { connect } from "react-redux";

import './subject-form.styles.scss'
class SubjectForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            subjectName: ""
        };
    }
    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    };

    handleSubmit = event => {
        event.preventDefault();

        const {subjectName} = this.state
        const { subjectIdAndName, pushSubject } = this.props;
       
        pushSubject(subjectName)
    };

    render() {
        const { handleChange, handleSubmit } = this;
        const { subjectName } = this.state;
        return (
            <form className="subject-form" onSubmit={handleSubmit}>
                <span>&#43;</span>
                <FormControl
                    type="text"
                    label="New subject"
                    autocomplete="off"
                    handleChange={handleChange}
                    name="subjectName"
                    value={subjectName}
                />
            </form>
        );
    }
}

const mapDisptachToProps = dispatch => ({
    pushSubject: subjectToPush => dispatch(pushSubject(subjectToPush))
});
export default connect(null, mapDisptachToProps)(SubjectForm);
