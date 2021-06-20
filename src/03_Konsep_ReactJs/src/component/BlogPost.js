import React from 'react';
import API from '../services';
function DaftarArtikel(props) {
  return (
    <div>
      <h3>{props.judul}</h3>
      <div>{props.isiArtikel}</div>
    </div>
  );
}
export default class BlogPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArtikel: [],     // untuk menampung data API
      postArtikel: {
        userId: 1,
        title: '',
        body: ''
      }
    };
  }

  ambilDataDariServerAPI = () => {
    API.getNewsBlog().then(result => {
      this.setState({
        dataArtikel: result
      })
    })
  }

  componentDidMount() {
    this.ambilDataDariServerAPI()
  }

  handleTombolSimpan = (e) => {
    e.preventDefault();

    API.postNewsBlog(this.state.postArtikel)
      .then((response) => {
        this.ambilDataDariServerAPI();    // refresh data
        alert('Data berhasil disimpan!');
      });
  }

  handleOnChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState(prevState => {
      prevState.postArtikel[name] = value;
      return {
        postArtikel: prevState.postArtikel
      };
    });
  }

  // render(){
  //   const { dataArtikel } = this.state;

  //   return (
  //     <div>
  // <br/>
  // <br/>
  // <br/>
  //       <h2>Daftar Artikel</h2>
  //       {
  //         dataArtikel.map(artikel => {
  //           return <DaftarArtikel key={artikel.id} judul={artikel.title} isiArtikel={artikel.body} />
  //         })
  //       }
  //     </div>
  //   );
  // }

  render() {
    const { dataArtikel, postArtikel } = this.state;

    return (
      <div className="slider">
        <div className="container sliderimage">
          <div className="container notive">
            <form onSubmit={this.handleTombolSimpan}>
              <label>
                Judul Artikel :
                                  <input size="145" type="text" name="title" defaultValue={postArtikel.title} onChange={this.handleOnChange} />
              </label>
              <label>
                Isi Artikel :
                                  <input size="145" type="text" name="body" defaultValue={postArtikel.body} onChange={this.handleOnChange} />
              </label>
              <br />
              <input type="submit" value="Simpan" />
            </form>
          </div>
        </div>
        <div>
          <div className="row">
            <div className="col-md-12">
              <div className="alert alert-danger danger" role="alert">

                <center>
                  <hr></hr>
                  <h2>Daftar Artikel</h2>
                  {
                    dataArtikel.map(artikel => {
                      return <DaftarArtikel key={artikel.id} judul={artikel.title} isiArtikel={artikel.body} />
                    })
                  }
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>


    );
  }

}