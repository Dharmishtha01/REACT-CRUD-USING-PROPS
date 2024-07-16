import React from 'react';
import { FaTimes } from 'react-icons/fa';

const View = ({ item, onClose }) => {
  const handleOutsideClick = (e) => {
    if (e.target.className === 'modal') {
      onClose();
    }
  };
  return (
    <div className="modal" onClick={handleOutsideClick}>
      <div className="modal-content">
        <div className="modal-header">
          <h2>View Data</h2>
          <button className="close-button" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        <table className="data-table">
          <tbody>
            <tr>
              <th>Name</th>
              <td>{item.name}</td>
            </tr>
            <tr>
              <th>Passport</th>
              <td>{item.passport}</td>
            </tr>
            <tr>
              <th>PAN Card</th>
              <td>{item.pancard}</td>
            </tr>
            <tr>
              <th>GST</th>
              <td>{item.gst}</td>
            </tr>
            <tr>
              <th>Age</th>
              <td>{item.age}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default View;
