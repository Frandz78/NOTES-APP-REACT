import React from "react";

function Footer() {
  return (
    <footer>
      <div className="row">
        <div className="col">
          <h2>Note App</h2>
          <p>
            Created By
            <a href="#" target="_blank">
              Farid
            </a>
          </p>
        </div>

        <div className="col">
          <ul>
            <h4>List Menu</h4>
            <li>
              <a href="#noteInput">Add Form</a>
            </li>
            <li>
              <a href="#notesList">List Notes</a>
            </li>
            <li>
              <a href="#archivedList">Archived Notes</a>
            </li>
          </ul>
        </div>

        <div className="col">
          <ul>
            <h4>Contact Info</h4>
            <li>
              <a href="#">Tasikmalaya, Jawabarat</a>
            </li>
            <li>
              <a href="#">@gmail.com</a>
            </li>
            <li>
              <a href="#">08xxxxxxxxxx</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <p>Created at &copy;2024</p>
        </div>
        <div className="col">
          <ul>
            <li>
              <i className="fa-brands fa-facebook"></i>
            </li>
            <li>
              <i className="fa-brands fa-instagram"></i>
            </li>
            <li>
              <i className="fa-brands fa-x-twitter"></i>
            </li>
            <li>
              <i className="fa-brands fa-github"></i>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
