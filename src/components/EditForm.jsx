import React from "react";

class EditForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.editNotes ? this.props.editNotes.id : "",
      title: this.props.editNotes ? this.props.editNotes.title : "",
      body: this.props.editNotes ? this.props.editNotes.body : "",
      archived: this.props.editNotes ? this.props.editNotes.archived : "",
      color: this.props.editNotes ? this.props.editNotes.color : "",
    };
  }

  onEditingTitleChangeHandler = (event) => {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  };

  onEditingBodyChangeHandler = (event) => {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  };

  onEditingSelectedColorHandler = (color) => {
    this.setState({ color });
  };

  // Ketika form edit di kirim
  onSubmitEditingHandler = (event) => {
    // Untuk mencegah halaman agar tidak me-refresh ulang secara otomatis
    event.preventDefault();

    console.info("editNotes: ", this.state);

    // Mengirim state ke parent component
    this.props.saveNote(this.state);

    // Reset input
    this.setState({
      title: "",
      body: "",
    });
  };

  render() {
    const colors = ["#FF8C42", "#B39CD0", "#A3E635", "#76C7C0", "#F28B82", "#FBEA85", "#BFBFBF"];
    return (
      <form className="edit-form" onSubmit={this.onSubmitEditingHandler}>
        {/* Input untuk menyimpan id. Start */}
        <input type="hidden" name="id" value={this.props.editNotes.id} />
        {/* Input untuk menyimpan id. End */}

        <input type="text" name="title" id="editTitle" className="edit-form_title" value={this.state.title} placeholder="Masukan judul catatan..." onChange={this.onEditingTitleChangeHandler} />
        <textarea name="body" id="editBody" className="edit-form_body" value={this.state.body} placeholder="Masukan Catatan anda..." onChange={this.onEditingBodyChangeHandler}></textarea>
        <div className="color-picker-container">
          <label>Pilih warna background (Opsional)</label>
          <div className="color-picker">
            {colors.map((color, index) => (
              <span key={index} className={`color-circle ${this.state.color === color ? "active" : ""}`} style={{ backgroundColor: color }} onClick={() => this.onEditingSelectedColorHandler(color)} />
            ))}
          </div>
        </div>
        <button type="submit" className="edit-form_button">
          Simpan
        </button>
      </form>
    );
  }
}

export default EditForm;
