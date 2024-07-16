import React, { useState } from 'react'
import List from './List';
import View from './View';
import Create from './Create';

const App = () => {

  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [isViewing, setIsViewing] = useState(false);

  const handleFormSubmit = (formData) => {
    if (isEditing) {
      const updatedItems = items.map((item, index) =>
        index === editingIndex ? formData : item
      );
      setItems(updatedItems);
      setIsEditing(false);
      setEditingIndex(null);
    } else {
      setItems([...items, formData]);
    }
    setCurrentItem(null);
  };

  const handleEdit = (index) => {
    setCurrentItem(items[index]);
    setIsEditing(true);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      const newItems = items.filter((_, i) => i !== index);
      setItems(newItems);
    }
  };

  const handleView = (item) => {
    setCurrentItem(item);
    setIsViewing(true);
  };

  const handleCloseModal = () => {
    setIsViewing(false);
    setCurrentItem(null);
  };

  return (
    <div>
      <Create handleSubmit={handleFormSubmit} item={isEditing ? currentItem : null} />
      <List items={items} onEdit={handleEdit} onDelete={handleDelete} onView={handleView} />
      {isViewing && <View item={currentItem} onClose={handleCloseModal} />}
    </div>
  );
};

export default App
