import React, { Component } from 'react';

// import './App.css';


class ItemDetails extends Component {


  constructor(props) {

    super(props);

    this.onEdit = this.onEdit.bind(this);

    this.onDelete = this.onDelete.bind(this);

  }


  render() {

    const item = this.props.item;

    return (

      <div className="input-panel">

      <div><span className="field-name">Name:</span><br/> {item.name}</div>

      <div><span className="field-name">latitude:</span><br/> {item.latitude}</div>

      <div><span className="field-name">lat:</span><br/> {item.lat}</div>

      <div><span className="field-name">longtitude:</span><br/> {item.longtitude}</div>

      <div><span className="field-name">long:</span><br/> {item.long}</div>

      <div><span className="field-name">Description:</span><br/> {item.description}</div>

      <br/>

      <button onClick={() => this.onDelete()}>Delete</button> 

      <button onClick={() => this.onEdit()}>Edit</button>

      </div>

    );

  }


  onEdit() {

    this.props.onEdit();

  }


  onDelete() {

    const item = this.props.item;

    if(window.confirm("Are you sure to delete item: " + item.name + " ?")) {

      this.props.onDelete(item.link);

    }

  }


}


export default ItemDetails;