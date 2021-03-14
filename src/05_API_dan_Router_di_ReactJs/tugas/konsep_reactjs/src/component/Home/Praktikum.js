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
                                     <p className="text-white text-center">Praktikum Jobsheet 1 Selesai</p>
                                     <p className="text-white text-center">Praktikum Jobsheet 2 Selesai</p> 
                                     <p className="text-white text-center">Praktikum Jobsheet 3 Selesai</p> 
                                     <p className="text-white text-center">Praktikum Jobsheet 4 Selesai</p> 
                        </div>
                    </div>
                </div> 
            </div>
        );
    }
}
 
export default Home;