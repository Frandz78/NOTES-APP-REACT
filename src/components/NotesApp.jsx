import React, { useEffect } from "react";
// Data Notes
import { getInitialData } from "../utils/index";
// Component
import NotesList from "./NotesList";
import NoteInput from "./NoteInput";
import ArchivedList from "./ArchivedList";
import Modal from "./Modal";
import EditForm from "./EditForm";
import DetailNotes from "./DetailNotes";
import Footer from "./Footer";
import FilteredListAction from "./FilteredListAction";
import Navbar from "./Navbar";

export default class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      editingNotes: null,
      detailNotes: null,
      searchActiveItems: null,
      searchArchivedItems: null,
      isSearch: false,
      isShowActiveNotes: true,
      isShowArchivedNotes: true,
    };

    // Untuk mengikat this pada event handler
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onArchivedHandler = this.onArchivedHandler.bind(this);
    this.onUndoHandler = this.onUndoHandler.bind(this);
    this.onEditHandler = this.onEditHandler.bind(this);
    this.onDetailHandler = this.onDetailHandler.bind(this);
    this.onEditingCloseHandler = this.onEditingCloseHandler.bind(this);
    this.onSaveEditingNoteHandler = this.onSaveEditingNoteHandler.bind(this);
    this.onDetailCloseHandler = this.onDetailCloseHandler.bind(this);
    this.onSearchChangeHandler = this.onSearchChangeHandler.bind(this);
    this.onFilteredAllNotesHandler = this.onFilteredAllNotesHandler.bind(this);
    this.onFilteredActiveNotesHandler = this.onFilteredActiveNotesHandler.bind(this);
    this.onFilteredArchiveNotesHandler = this.onFilteredArchiveNotesHandler.bind(this);
  }

  // Ketika Form di kirim
  onAddNoteHandler({ title, body, color }) {
    // Tambahkan catatan yang baru dibuat
    this.setState((prevNotes) => {
      const newNote = [
        ...prevNotes.notes,
        {
          id: +new Date(),
          title,
          body,
          createdAt: new Date().toISOString(),
          archived: false,
          color,
        },
      ];

      // Catatan Aktif
      const activeNotes = newNote.filter((note) => note.archived === false);
      // Catatan Arsip
      const archivedNotes = newNote.filter((note) => note.archived === true);

      return {
        notes: newNote,
        searchActiveItems: this.state.isSearch && this.state.isShowActiveNotes ? activeNotes : this.state.searchActiveItems,
        searchArchivedItems: this.state.isSearch && this.state.isShowArchivedNotes ? archivedNotes : this.state.searchArchivedItems,
      };
    });
  }

  // Ketika tombol hapus di klik
  onDeleteHandler(id) {
    // Mem-filter catatan yang tidak dihapus
    const notes = this.state.notes.filter((note) => note.id !== id);

    // Konfirmasi apakah yakin ingin di hapus
    if (confirm("Apakah anda yakin ingin meng hapus catatan ini?")) {
      // Perbarui state
      this.setState((prevState) => {
        // Catatan Aktif
        const activeNotes = notes.filter((note) => note.archived === false);
        // Catatan Arsip
        const archivedNotes = notes.filter((note) => note.archived === true);

        // Cek apakah dalam mode pencarian atau tidak
        const updateSearchActiveItems = prevState.isSearch && prevState.isShowActiveNotes ? activeNotes : prevState.searchActiveItems;
        const updateSearchArchivedItems = prevState.isSearch && prevState.isShowArchivedNotes ? archivedNotes : prevState.searchArchivedItems;

        return {
          notes,
          searchActiveItems: updateSearchActiveItems,
          searchArchivedItems: updateSearchArchivedItems,
        };
      });
    }
  }

  // Ketika tombol arsip di klik
  onArchivedHandler(id) {
    this.setState((prevNotes) => {
      // Iterasi untuk mengecek setiap catatan
      const notesToArchived = prevNotes.notes.map((note) => {
        // Jika id sama dengan id yang di klik
        if (note.id === id) {
          // Mengembalikan salinan objek note, dan mengganti nilai property archived menjadi true
          return { ...note, archived: true };
        }

        // jika tidak ada id yang sama dengan yang di klik, kembalikan catatan tanpa perubahan
        return note;
      });

      // Catatan Aktif
      const activeNotes = notesToArchived.filter((note) => note.archived === false);
      // Catatan Arsip
      const archivedNotes = notesToArchived.filter((note) => note.archived === true);

      // Cek apakah dalam mode pencarian atau tidak
      const updateSearchActiveItems = prevNotes.isSearch && prevNotes.isShowActiveNotes ? activeNotes : prevNotes.searchActiveItems;
      const updateSearchArchivedItems = prevNotes.isSearch && prevNotes.isShowArchivedNotes ? archivedNotes : prevNotes.searchArchivedItems;

      // Pindahkan catatan yg di arsip ke rak arsip
      return {
        notes: notesToArchived,
        searchActiveItems: updateSearchActiveItems,
        searchArchivedItems: updateSearchArchivedItems,
      };
    });
  }

  // Ketika tombol undo di klik
  onUndoHandler(id) {
    this.setState((prevNotes) => {
      // Iterasi untuk mengecek setiap catatan
      const undoNotes = prevNotes.notes.map((note) => {
        // Jika ada id yang sama dengan yang di klik
        if (note.id === id) {
          return { ...note, archived: false };
        }

        // Kembalikan catatan tanpa perubahan jika tidak ada id yang sama
        return note;
      });

      // Catatan Aktif
      const activeNotes = undoNotes.filter((note) => note.archived === false);
      // Catatan Arsip
      const archivedNotes = undoNotes.filter((note) => note.archived === true);

      // Cek apakah dalam mode pencarian atau tidak
      const updateSearchActiveItems = prevNotes.isSearch && prevNotes.isShowActiveNotes ? activeNotes : prevNotes.searchActiveItems;
      const updateSearchArchivedItems = prevNotes.isSearch && prevNotes.isShowArchivedNotes ? archivedNotes : prevNotes.searchArchivedItems;

      return {
        notes: undoNotes,
        searchActiveItems: updateSearchActiveItems,
        searchArchivedItems: updateSearchArchivedItems,
      };
    });
  }

  // Ketika tombol edit di klik
  onEditHandler(id) {
    // Mendapatkan note yang di klik berdasarkan id
    const noteEdit = this.state.notes.find((note) => note.id === id);
    console.log(noteEdit);

    // Perbarui state note yang sedang di edit
    this.setState({ editingNotes: noteEdit });
  }

  // Ketika Form edit di kirim
  onSaveEditingNoteHandler(editingNote) {
    const updatedNotes = this.state.notes.map((note) => {
      // Cek apakah ada catatan dengan id yang sama, dengan yg diedit
      if (note.id === editingNote.id) {
        return {
          ...note,
          title: editingNote.title,
          body: editingNote.body,
          color: editingNote.color,
        };
      }
      return note;
    });

    // Perbarui state notes, dan kosongkan kembali state editingNotes
    this.setState((prevNotes) => {
      // Catatan Aktif
      const activeNotes = updatedNotes.filter((note) => note.archived === false);
      // Catatan Arsip
      const archivedNotes = updatedNotes.filter((note) => note.archived === true);

      // Cek apakah dalam mode pencarian atau tidak
      const updateSearchActiveItems = prevNotes.isSearch && prevNotes.isShowActiveNotes ? activeNotes : prevNotes.searchActiveItems;
      const updateSearchArchivedItems = prevNotes.isSearch && prevNotes.isShowArchivedNotes ? archivedNotes : prevNotes.searchArchivedItems;

      return {
        notes: updatedNotes,
        editingNotes: null,
        searchActiveItems: updateSearchActiveItems,
        searchArchivedItems: updateSearchArchivedItems,
      };
    });
  }

  // Ketika Keluar dari mode edit
  onEditingCloseHandler() {
    // Hilangkan data pada state editingNotes
    this.setState({ editingNotes: null });
  }

  // Ketika tombol detail di klik
  onDetailHandler(id) {
    // Mendapatkan note yang di klik berdasarkan id
    const noteDetail = this.state.notes.find((note) => note.id === id);
    console.log(noteDetail);

    if (noteDetail) {
      this.setState({ detailNotes: noteDetail });
    } else {
      console.warn("Data tidak ditemukan!");
    }
  }

  // Ketika keluar dari mode detail
  onDetailCloseHandler() {
    // Hilangkan data pada state detailNotes
    this.setState({ detailNotes: null });
  }

  // Ketika catatan dicari
  onSearchChangeHandler(event) {
    // Ubah nilai yg di input menjadi huruf kecil
    const inputSearch = event.target.value.toLowerCase();

    // Filter setiap judul pada state notes yg mengandung input yang dicari
    const filteredNotes = this.state.notes.filter((note) => {
      return note.title.toLowerCase().includes(inputSearch);
    });

    // Filter setiap catatan yg archivednya false ke rak daftar catatan
    const activeNotes = filteredNotes.filter((note) => note.archived === false);
    // Filter setiap catatan yg archivednya true ke rak Arsip
    const archivedNotes = filteredNotes.filter((note) => note.archived === true);

    console.log("searchItems: ", filteredNotes);

    // Perbarui tampilan sesuai dengan data yg dicari
    this.setState({
      searchActiveItems: activeNotes,
      searchArchivedItems: archivedNotes,
      isSearch: true,
    });
  }

  // Ketika tombol filter semua catatan di klik
  onFilteredAllNotesHandler() {
    // Tampilkan semua data catatan
    this.setState({
      isSearch: false,
      isShowActiveNotes: true,
      isShowArchivedNotes: true,
    });
  }

  // Ketika tombol filter catatan aktif di klik
  onFilteredActiveNotesHandler() {
    // Catatan Aktif
    const activeNotes = this.state.notes.filter((note) => note.archived === false);

    // Tampilkan hanya catatan aktif
    this.setState({
      searchActiveItems: activeNotes,
      searchArchivedItems: [],
      isSearch: true,
      isShowArchivedNotes: false,
      isShowActiveNotes: true,
    });
  }

  // Ketika tombol filter arsip di klik
  onFilteredArchiveNotesHandler() {
    // Catatan Arsip
    const archivedNotes = this.state.notes.filter((note) => note.archived === true);

    // Tampilkan hanya catatan arsip
    this.setState({
      searchActiveItems: [],
      searchArchivedItems: archivedNotes,
      isSearch: true,
      isShowActiveNotes: false,
      isShowArchivedNotes: true,
    });
  }

  render() {
    // Catatan Aktif
    const activeNotes = this.state.notes.filter((note) => note.archived === false);
    // Catatan Arsip
    const archivedNotes = this.state.notes.filter((note) => note.archived === true);
    // Filter Items
    const searchListActiveItems = this.state.isSearch ? this.state.searchActiveItems : activeNotes;
    const searchListArchivedItems = this.state.isSearch ? this.state.searchArchivedItems : archivedNotes;

    return (
      <div className="container">
        {/* Header */}
        <header>
          <Navbar />
        </header>

        <main>
          <div className="note-app_body">
            {/* Input Form */}
            <NoteInput addNote={this.onAddNoteHandler} />

            {/* Filtered Notes (All, Active notes, Archived notes, Search input) */}
            <FilteredListAction onFilteredAll={this.onFilteredAllNotesHandler} onFilteredActive={this.onFilteredActiveNotesHandler} onFilteredArchive={this.onFilteredArchiveNotesHandler} onSearch={this.onSearchChangeHandler} />

            {/* Edit Form */}
            {this.state.editingNotes && (
              <Modal onClose={this.onEditingCloseHandler}>
                <EditForm editNotes={this.state.editingNotes} saveNote={this.onSaveEditingNoteHandler} />
              </Modal>
            )}

            {/* List Notes Start */}
            {this.state.isShowActiveNotes && (
              <div className="notes-list_container">
                <h2>Daftar Catatan</h2>
                {searchListActiveItems.length > 0 ? (
                  <NotesList notes={searchListActiveItems} onDelete={this.onDeleteHandler} onArchived={this.onArchivedHandler} onEdit={this.onEditHandler} onDetail={this.onDetailHandler} />
                ) : (
                  <div className="notes-list_empty-message">
                    <p>Tidak ada catatan</p>
                  </div>
                )}
              </div>
            )}
            {/* List Notes End */}

            {/* archived Notes Start */}
            {this.state.isShowArchivedNotes && (
              <div className="archived-list_container">
                <h2>Arsip Catatan</h2>
                {searchListArchivedItems.length > 0 ? (
                  <ArchivedList notes={searchListArchivedItems} onDelete={this.onDeleteHandler} onUndo={this.onUndoHandler} isArchived={activeNotes} onEdit={this.onEditHandler} onDetail={this.onDetailHandler} />
                ) : (
                  <div className="notes-list_empty-message">
                    <p>Tidak ada catatan</p>
                  </div>
                )}
              </div>
            )}
            {/* archived Notes End */}

            {/* Detail Notes */}
            {this.state.detailNotes && <DetailNotes notes={this.state.detailNotes} onClose={this.onDetailCloseHandler} />}
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    );
  }
}
