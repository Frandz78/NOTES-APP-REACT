import React from "react";
import ShowAddFormButton from "./ShowAddFormButton";

const colors = ["#FF8C42", "#B39CD0", "#A3E635", "#76C7C0", "#F28B82", "#FBEA85", "#BFBFBF"];

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      color: colors[Math.floor(Math.random() * colors.length)],
      isShowForm: false,
    };

    // Mengikat this pada event handler
    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
    this.onSelectedColorHandler = this.onSelectedColorHandler.bind(this);
    this.onSubmitFormHandler = this.onSubmitFormHandler.bind(this);
    this.onShowAddFormHandler = this.onShowAddFormHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyChangeHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSelectedColorHandler(color) {
    // Perbarui warna ( sesuai dengan pilihan warna yang diklik )
    this.setState({ color });
  }

  onSubmitFormHandler(event) {
    // Mencegah halaman me-refresh ulang otomatis (ketika di submit)
    event.preventDefault();

    // Kirim data ke parent component
    this.props.addNote(this.state);

    // Reset input
    this.setState({
      title: "",
      body: "",
      isShowForm: false,
    });
  }

  onShowAddFormHandler() {
    this.setState({ isShowForm: true });
  }

  render() {
    return !this.state.isShowForm ? (
      <ShowAddFormButton showForm={this.onShowAddFormHandler} />
    ) : (
      <div className="note-input_container" id="noteInput">
        <h2 className="note-input_title">Tambah Catatan</h2>
        <form className="note-input" onSubmit={this.onSubmitFormHandler}>
          <input type="text" name="title" id="inputTitle" className="note-input_title" value={this.state.title} onChange={this.onTitleChangeHandler} placeholder="Masukan judul catatan..." />
          <textarea name="body" id="inputBody" className="note-input_body" value={this.state.body} onChange={this.onBodyChangeHandler} placeholder="Masukan Catatan anda..."></textarea>
          <div className="color-picker-container">
            <label>Pilih warna background (Opsional)</label>
            <div className="color-picker">
              {colors.map((color, index) => (
                <span key={index} className={`color-circle ${this.state.color === color ? "active" : ""}`} style={{ backgroundColor: color }} onClick={() => this.onSelectedColorHandler(color)} />
              ))}
            </div>
          </div>
          <button type="submit" className="note-input_button">
            Tambah
          </button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
