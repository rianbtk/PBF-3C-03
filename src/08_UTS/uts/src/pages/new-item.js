import React, { Component } from 'react';

// import './App.css';

import Validator from '../shared/Validator';


class NewItem extends Component {


  constructor(props) {

    super(props);

    this.validator = new Validator();

    this.onCancel = this.onCancel.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {

      name: '',

      latitude: '',

      lat: '',

      longtitude: '',

      description: ''

    };

  }


  handleInputChange(event) {

    const target = event.target;

    const value = target.value;

    const name = target.name;


    this.setState({

      [name]: value

    });

  }


  onCancel() {

    this.props.onCancel();

  }


  onSubmit() {

    if(this.validator.validateInputs(this.state)) {

        this.props.onSubmit(this.state);

    }

  }


  render() {

    return (

      <div className="input-panel">

      <span className="form-caption">New item:</span>

      <div>

        <label className="field-name">Name:<br/>

          <input value={this.state.name} name="name" maxLength="" required onChange={this.handleInputChange} placeholder="item name" />

        </label>

      </div>

      <div>

        <label className="field-name">latitude:<br/>

          <input value={this.state.latitude} name="latitude" maxLength="" required onChange={this.handleInputChange} placeholder="latitude" />

        </label>

      </div>

      <div>

        <label className="field-name">lat:<br/>

          <input value={this.state.lat} name="lat" maxLength="" pattern="[-]{,}" onChange={this.handleInputChange} placeholder="lat" />

        </label>

      </div>

      <div>

        <label className="field-name">longtitude:<br/>

          <input value={this.state.longtitude} name="longtitude" maxLength="" pattern="[a-z|A-Z]{}" onChange={this.handleInputChange} placeholder="longtitude code" />

        </label>

      </div>

      <div>

        <label className="field-name">Description:<br/>

          <textarea value={this.state.description} name="description" onChange={this.handleInputChange} placeholder="description" />

        </label>

      </div>

      <br/>

      <button onClick={() => this.onCancel()}>Cancel</button> 

      <button onClick={() => this.onSubmit()}>Create</button>

      </div>

    );

  }

}


export default NewItem;