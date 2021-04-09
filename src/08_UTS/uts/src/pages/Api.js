import React, { Component } from 'react';

// import './App.css';

import ItemDetails from './item-details';

import NewItem from './new-item';

import EditItem from './edit-item';


import ItemService from './mock-item-service';

class Api extends Component {

    constructor(props) {

        super(props);

        this.itemService = new ItemService();

        this.onSelect = this.onSelect.bind(this);

        this.onNewItem = this.onNewItem.bind(this);

        this.onEditItem = this.onEditItem.bind(this);

        this.onCancel = this.onCancel.bind(this);

        this.onCancelEdit = this.onCancelEdit.bind(this);

        this.onCreateItem = this.onCreateItem.bind(this);

        this.onUpdateItem = this.onUpdateItem.bind(this);

        this.onDeleteItem = this.onDeleteItem.bind(this);

        this.state = {

            showDetails: false,

            editItem: false,

            selectedItem: null,

            newItem: null

        }

    }

    componentDidMount() {

        this.getItems();

    }

    render() {

        const items = this.state.items;

        if (!items) return null;

        const showDetails = this.state.showDetails;

        const selectedItem = this.state.selectedItem;

        const newItem = this.state.newItem;

        const editItem = this.state.editItem;

        const listItems = items.map((item) =>

            <li key={item.link} onClick={() => this.onSelect(item.link)}>

                <span className="item-name">{item.name}</span> |  {item.latitude}

            </li>

        );

        return (
            <div>
                <div class="img-055"></div>
                <div class="welcome-container">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="welcome-wrapper">
                                    <h2 class="welcome-title text-uppercase">POLINEMA MALANG</h2>
                                    <img src="assets/img/welcome-divider-lines.png" alt="Welcome divider" class="welcome-divider-lines-img" />
                                    <p class="welcome-description">Adalah salah satu perguruan teknik negeri yang berkopeten dalam pengembangan ilmu teknologi berbasis teknik</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section class="templatemo-container">
                    <div class="container">
                        <div class="row margin-bottom-30">
                            <div class="col-lg-12 text-uppercase text-center">
                                <h2 class="section-title">REST API</h2>
                                <div class="text-uppercase contact-point-title blue-text font-weight-700"></div>
                            </div>
                        </div>
                    </div>


                    <div className="App">

                        <ul class="text-uppercase contact-point-title blue-text font-weight-700">

                            {listItems}

                        </ul>

                        <br />

                        <button class="text-uppercase contact-point-title blue-text font-weight-700" type="button" name="button" onClick={() => this.onNewItem()}>Edit Data</button>

                        <br />

                        {newItem && <NewItem onSubmit={this.onCreateItem} onCancel={this.onCancel}></NewItem>}

                        {showDetails && selectedItem && <ItemDetails item={selectedItem} onEdit={this.onEditItem} onDelete={this.onDeleteItem} ></ItemDetails>}

                        {editItem && selectedItem && <EditItem onSubmit={this.onUpdateItem} onCancel={this.onCancelEdit} item={selectedItem} ></EditItem>}

                    </div>


                </section>
                <div class="blue-divider effect1">
                    <div class="dark-blue-bg"></div>
                    <div class="blue-divider-bg-graphic"></div>
                    <div class="blue-bg"></div>
                </div>
            </div>

        );

    }


    getItems() {

        this.itemService.retrieveItems().then(items => {

            this.setState({ items: items });

        }

        );

    }


    onSelect(itemLink) {

        this.clearState();

        this.itemService.getItem(itemLink).then(item => {

            this.setState({

                showDetails: true,

                selectedItem: item

            });

        }

        );

    }


    onCancel() {

        this.clearState();

    }


    onNewItem() {

        this.clearState();

        this.setState({

            newItem: true

        });

    }


    onEditItem() {

        this.setState({

            showDetails: false,

            editItem: true,

            newItem: null

        });

    }

    onCancelEdit() {

        this.setState({

            showDetails: true,

            editItem: false,

            newItem: null

        });

    }

    onUpdateItem(item) {

        this.clearState();

        this.itemService.updateItem(item).then(item => {

            this.getItems();

        }

        );

    }


    onCreateItem(newItem) {

        this.clearState();

        this.itemService.createItem(newItem).then(item => {

            this.getItems();

        }

        );

    }


    onDeleteItem(itemLink) {

        this.clearState();

        this.itemService.deleteItem(itemLink).then(res => {

            this.getItems();

        }

        );

    }


    clearState() {

        this.setState({

            showDetails: false,

            selectedItem: null,

            editItem: false,

            newItem: null

        });

    }

}


export default Api;