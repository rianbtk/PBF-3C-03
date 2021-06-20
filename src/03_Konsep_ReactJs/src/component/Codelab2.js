import  React, { Component } from 'react';
class Codelab2 extends Component {
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
                                Mahasiswa paham dengan cara instalasi reactrouter Mahasiswa dapat mengetahui konsep reactrouter 

                            </h1>
                            <p>
                                Point yang diharapkan 
                                •	Pengenalan cara menginstall react router 
                                •	Berpindah antara halaman dengan react router 
                                •	Merapikan struktur folder dan rename browserrouter 
                                •	Mengirimkan params ke halaman detail react router 


                            </p>
                            <a href="https://github.com/rianbtk/PBF-3C-03/blob/main/docs/05_API_dan_Router_di_ReactJs/05_API_dan_Router_di_ReactJs.md">Selebihnya</a>
                            
                            <br></br>
                                </div>
                        </div>
                    </div>
                </div> 
            </div>
        );
    }
}
 
export default Codelab2;