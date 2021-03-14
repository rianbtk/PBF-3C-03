import  React, { Component } from 'react';
class Codelab1 extends Component {
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
                                <h1>
                            Mahasiswa paham dengan konsep interaksi didalam reactJS
                            </h1>
                            <p>
                                Point yang diharapkan 
                            1. Interaksi dengan backend 
                            2.	Interaksi dengan backend pemanggilan api (fake api) (delete) 
                            3.	Interaksi dengan backend pemanggilan api (post) 
                            4.	Interaksi dengan backend pemanggilan api (put) 

                            </p>
                            <a href="https://github.com/rianbtk/PBF-3C-03/blob/main/docs/04_Konsep_ReactJs_Bagian2/04_Konsep_ReactJs_Bagian2.md">Selebihnya</a>
                            
                            <br></br>
                                </div>
                        </div>
                    </div>
                </div> 
            </div>
        );
    }
}
 
export default Codelab1;