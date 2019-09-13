import React from "react";
import "./style.css";

const Form = props => {
    return (
        <form>
            <div className="form-group">
                <label className="BookSearchLabel"><h3>Search For a Book</h3></label>
                <br></br>
                <input className="col-12 form-control"
                    value={props.search}
                    type="text"
                    name="searchBook"
                    placeholder="Enter Book's Name"
                    onChange={props.handleInputChange}
                />
            </div>
            <button type="submit" className="submitBtn btn btn-dark" onClick={props.handleFormSubmit}>
                Submit
            </button>
        </form>
    )
}



export default Form