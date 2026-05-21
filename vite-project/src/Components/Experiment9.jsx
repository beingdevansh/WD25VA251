import React, { useState, useEffect } from 'react';

const Experiment9 = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');
  const [apiData, setApiData] = useState(null);

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => setApiData(data.title));

  }, []);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const validate = () => {

    let tempErrors = {};

    if (!formData.name) {
      tempErrors.name = "Name is required";
    }

    if (!formData.email.includes('@')) {
      tempErrors.email = "Invalid email (@ required)";
    }

    if (formData.password.length < 6) {
      tempErrors.password = "Password must be 6+ characters";
    }

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (validate()) {
      setSuccess("Registration Successful!");
      setErrors({});
    }
    else {
      setSuccess("");
    }
  };

  return (

    <div className="form-container">

      <style>{`
          body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: linear-gradient(to right, #0f0f1b, #111827);
          color: white;
        }

        .form-container {
          width: 400px;
          margin: 40px auto;
          padding: 30px;
          border: 1px solid #8b8b8b;
          border-radius: 15px;
          background: rgba(0,0,0,0.2);
          text-align: center;
        }

        h2 {
          font-size: 45px;
          margin-bottom: 20px;
          color: white;
        }

        .api-text {
          font-size: 18px;
          margin-bottom: 25px;
          line-height: 1.5;
          color: #c5c5c5;
        }

        .api-text strong {
          color: white;
        }

        input {
          display: block;
          width: 100%;
          margin-bottom: 15px;
          padding: 14px;
          box-sizing: border-box;
          border: 1px solid #666;
          border-radius: 5px;
          background: #3b3b3b;
          color: white;
          font-size: 16px;
        }

        input::placeholder {
          color: #bdbdbd;
        }

        .error {
          color: red;
          font-size: 13px;
          display: block;
          margin-top: -10px;
          margin-bottom: 10px;
          text-align: left;
        }

        .success {
          color: #52c152;
          font-weight: bold;
          margin-top: 15px;
        }

        button {
          width: 100%;
          padding: 14px;
          background-color: #4caf50;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 18px;
        }

        button:hover {
          background: #3ea63e;
        }
      `}</style>

      <h2>Registration Form</h2>

      <p className="api-text">
        <strong>API Title:</strong>
        {apiData ? apiData : " Loading..."}
      </p>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />

        {errors.name && (
          <span className="error">
            {errors.name}
          </span>
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        {errors.email && (
          <span className="error">
            {errors.email}
          </span>
        )}

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        {errors.password && (
          <span className="error">
            {errors.password}
          </span>
        )}

        <button type="submit">
          Register
        </button>

      </form>

      {success && (
        <p className="success">
          {success}
        </p>
      )}

    </div>

  );
};

export default Experiment9;