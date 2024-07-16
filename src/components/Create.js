import React, { useEffect, useState } from 'react';

const Create = ({ handleSubmit, item}) => {
  const [formData, setFormData] = useState({
    name: '',
    passport: '',
    pancard: '',
    gst: '',
    age: ''
  });
  const [errors, setErrors] = useState({});
  useEffect(() => {
    if (item) {
      setFormData(item);
      setErrors({});
    }
  }, [item]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setErrors({
      ...errors,
      [name]: ''
    });
  };

  const handleReset = () => {
    setFormData({ name: '', passport: '', pancard: '', gst: '', age: '' });
    setErrors({});
  };
  const validate = () => {
    const newErrors = {};
    // Name validation
    if (!formData.name) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length > 50) {
      newErrors.name = 'too long, maximum 20 characters allowed';
    }

    // Passport validation
    const passportRegex = /^[a-zA-Z0-9]{5,9}$/;
    if (!formData.passport.trim) {
      newErrors.passport = 'Passport is required';
    } else if (formData.passport.length > 9) {
      newErrors.passport = 'Passport is too long, maximum 9 characters allowed';
    } else if (formData.passport.length < 5) {
      newErrors.passport = 'Passport is too short, minimum 5 characters required';
    } else if (!passportRegex.test(formData.passport)) {
      newErrors.passport = 'Invalid passport format';
    }

    //PAN card
    const pancardRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    if (!formData.pancard.trim) {
      newErrors.pancard = 'PAN Card is required';
    }
    else if (!pancardRegex.test(formData.pancard)) {
      newErrors.pancard = 'Invalid PAN Card format';
    }

    //GST 
    const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
    if (!formData.gst.trim) {
      newErrors.gst = 'GST is required';
    } else if (!gstRegex.test(formData.gst)) {
      newErrors.gst = 'Invalid GST format';
    } 
    //Age
    if (!formData.age.trim) {
      newErrors.age = 'Age is required';
    } else if (isNaN(formData.age)) {
      newErrors.age = 'Age must be a number';
    } else if (formData.age < 18 || formData.age > 120) {
      newErrors.age = 'Age must be between 18 and 120';
    }
    return newErrors;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      handleSubmit(formData);
      handleReset();
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={onSubmit} className="form-content">
        <h2 style={{ display: "Flex", justifyContent: "center" }}>Fill Your Data</h2>
        <div className="form-group">
          <table className='table-container'>
            <tbody>
              <tr>
                <td><label>Name:</label></td>
                <td><input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder='Name'
                />
                  {errors.name && <span className="error">{errors.name}</span>}
                </td>
              </tr>
              <tr>
                <td><label>Passport:</label></td>
                <td><input
                  type="text"
                  name="passport"
                  value={formData.passport}
                  onChange={handleChange}
                  placeholder='P4366918'
                />
                  {errors.passport && <span className="error">{errors.passport}</span>}
                </td>
              </tr>
              <tr>
                <td><label>PAN Card:</label></td>
                <td><input
                  type="text"
                  name="pancard"
                  value={formData.pancard}
                  onChange={handleChange}
                  placeholder='M1234567'
                />
                  {errors.pancard && <span className="error">{errors.pancard}</span>}
                </td>
              </tr>
              <tr>
                <td><label>GST:</label></td>
                <td><input
                  type="text"
                  name="gst"
                  value={formData.gst}
                  onChange={handleChange}
                  placeholder='29GGGGG1314R9Z6'
                />
                  {errors.gst && <span className="error">{errors.gst}</span>}
                </td>
              </tr>
              <tr>
                <td><label>Age:</label></td>
                <td><input
                  type="text"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder='18 to 120 '
                />  
                {errors.age && <span className="error">{errors.age}</span>}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='btn-container'>
          <button type="submit" className='submitBtn'>{item ? 'Update' : 'Submit'}</button>
          <button type="button" className='clearBtn' onClick={handleReset}>Clear</button>
        </div>
      </form>
    </div>
  );
};

export default Create
