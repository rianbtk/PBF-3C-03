import  React, { Component } from 'react';
class Home extends Component {
    render() { 
        return (  
            <div className="slider">
                <div className="container sliderimage">
                    <div className="row">
                      {/* <img className="img-fluid rounded slide " alt="Responsive image" src={require('../../gambar/desktop.jpg')} /> */}
                    </div>
                </div>
                <div className="container notive">
                    <div className="row">
                        <div className="col-md-12">
                                <div className="alert alert-danger danger" role="alert">
                                     <p className="text-white text-center">Selamat Datang di Home</p> 
                                </div>
                        </div>
                    </div>
                </div> 
            </div>
        );
    }
}
 
export default Home;