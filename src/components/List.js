import React from 'react';
import { FaEdit, FaTrashAlt, FaEye } from 'react-icons/fa';

const List = ({ items, onEdit, onDelete, onView}) => {
  return (
    <div className="list-container">
      <table className="data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Passport</th>
            <th>PAN Card</th>
            <th>GST</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.passport}</td>
              <td>{item.pancard}</td>
              <td>{item.gst}</td>
              <td>{item.age}</td>
              <td>
                  <button className="action-button view" onClick={() => onView(item)}>
                    <FaEye />
                  </button>
                  <button className="action-button edit" onClick={() => onEdit(index)}>
                    <FaEdit />
                  </button>
                  <button className="action-button delete" onClick={() => onDelete(index)}>
                    <FaTrashAlt />
                  </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
