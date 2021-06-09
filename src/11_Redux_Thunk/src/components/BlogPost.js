import React from 'react';
import { Button, Container, Form, Modal } from 'react-bootstrap';
import { DB } from '../firebase.config';
import "bootstrap/dist/css/bootstrap.min.css";

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
        showEdit: false,
        dataArtikel: [],
        postArtikel: {
          id: '',
          userId: 1,
          email: '',
          title: '',
          body: ''
        }
      };
  }
  ambilDataDariServerAPI = () => {
    let ref = DB.ref("articles/");
    ref.on("value", snapshot => {
      if (snapshot.val() !== null)
        this.setState({
          dataArtikel: snapshot.val()
        })
    })
  }

  simpanDataKeServerAPI = () => {
    DB.ref("articles/").set(this.state.dataArtikel);
  }

  handleTombolSimpan = (e) => {
    e.preventDefault();

    const { dataArtikel, postArtikel } = this.state;

    if (postArtikel.id && postArtikel.userId && postArtikel.title && postArtikel.body && postArtikel.email) {
      const indeksArtikel = dataArtikel.findIndex(data => {
        return data.id === postArtikel.id
      });

      dataArtikel[indeksArtikel].userId = postArtikel.userId;
      dataArtikel[indeksArtikel].email = postArtikel.email;
      dataArtikel[indeksArtikel].title = postArtikel.title;
      dataArtikel[indeksArtikel].body = postArtikel.body;
      this.setState({ dataArtikel });
    } else if (postArtikel.userId && postArtikel.email && postArtikel.title && postArtikel.body) {
      console.log(dataArtikel);
      const id = new Date().getTime().toString();
      let userId = 1;
      let email = postArtikel.email;
      let title = postArtikel.title;
      let body = postArtikel.body;
      dataArtikel.push({ id, userId,email, title, body });
      this.setState({ dataArtikel });
    }
    postArtikel.id = '';
    postArtikel.userId = 1;
    postArtikel.email='';
    postArtikel.title = '';
    postArtikel.body = '';
    this.setState({ postArtikel,showEdit: false });
  }

  handleOnChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState(prevState => {
      prevState.postArtikel[name] = value
      return {
        postArtikel: prevState.postArtikel
      };
    });
  }


  handleTombolEdit = (e) => {
    e.preventDefault();

    const {dataArtikel, postArtikel } = this.state;

    const indeksArtikel = dataArtikel.findIndex(data => {
      return data.id === e.target.value
    });
    
    postArtikel.id = e.target.value;
    postArtikel.email = dataArtikel[indeksArtikel].email;
    postArtikel.title = dataArtikel[indeksArtikel].title;
    postArtikel.body = dataArtikel[indeksArtikel].body;

    this.setState({ postArtikel, showEdit: true });
}

  handleTombolHapus = (e) => {
    e.preventDefault();

    const { dataArtikel } = this.state;

    const newState = dataArtikel.filter(data => {
      return data.id !== e.target.value;
    });

    this.setState({ dataArtikel: newState });
    alert('Data berhasil dihapus!');
  }


  componentDidMount() {
    this.ambilDataDariServerAPI()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state.dataArtikel) {
      this.simpanDataKeServerAPI();
    }
  }

  render() {
    const { dataArtikel,showEdit,postArtikel } = this.state;

    return (
      <div>
        <Container>
          <Form onSubmit={this.handleTombolSimpan}>
          <Form.Group controlId="inputEmail">
              <br />
              <Form.Label>Email </Form.Label><br />
              <Form.Control required type="text" seize= "200" name="title" placeholder="Email" onChange={this.handleOnChange} />
            </Form.Group>
            <Form.Group controlId="inputArtikel">
              <br />
              <Form.Label>Judul Artikel</Form.Label><br />
              <Form.Control required type="text" seize= "200" name="title" placeholder="judul artikel" onChange={this.handleOnChange} />
            </Form.Group>
            <Form.Group controlId="inputIsiArtikel">
              <Form.Label>Isi Artikel</Form.Label> <br />
              <Form.Control required name="body" onChange={this.handleOnChange} as="textarea" rows={1} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Simpan Artikel
            </Button>
          </Form>
        </Container>

        <hr />
        <h2>Daftar Artikel</h2>
        {
          (dataArtikel || []).map(artikel => {
            return (
              <div key={artikel.id}>
                <DaftarArtikel judul={artikel.title} isiArtikel={artikel.body} />
                <Button variant="danger" value={artikel.id} onClick={this.handleTombolHapus}>Hapus</Button>
                <Button variant="info" value={artikel.id} onClick={this.handleTombolEdit} >Edit</Button>
                <hr></hr>
              </div>
            )
          })
        }
        <Modal
          show={showEdit}
          onHide={() => this.setState({ showEdit: false })}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Edit Artikel
    </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Form onSubmit={this.handleTombolSimpan}>
              <Form.Group controlId="inputEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control required type="text" name="title" value={postArtikel.email} placeholder="Email" onChange={this.handleOnChange} />
                </Form.Group>
                <Form.Group controlId="inputJudul">
                  <Form.Label>Judul Artikel</Form.Label>
                  <Form.Control required type="text" name="title" value={postArtikel.title} placeholder="judul artikel" onChange={this.handleOnChange} />
                </Form.Group>
                <Form.Group controlId="inputIsiArtikel">
                  <Form.Label>Isi Artikel</Form.Label>
                  <Form.Control required name="body" value={postArtikel.body} placeholder="isi artikel" onChange={this.handleOnChange} as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Update Artikel
    </Button>
              </Form>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={() => this.setState({ 
              showEdit: false , postArtikel:{
                id: '',
                userId: 1,
                title: '',
                body: ''
              }
              })}>Batal</Button>
          </Modal.Footer>
        </Modal>
      </div>

    );
  }
}