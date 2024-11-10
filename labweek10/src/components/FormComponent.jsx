import React, { useState } from "react";

function FormComponent() {
  const provinces = [
    "Alberta",
    "British Columbia",
    "Manitoba",
    "New Brunswick",
    "Newfoundland and Labrador",
    "Northwest Territories",
    "Nova Scotia",
    "Nunavut",
    "Ontario",
    "Prince Edward Island",
    "Quebec",
    "Saskatchewan",
    "Yukon Territory",
  ];



  const submitData = (e) =>{
    e.preventDefault()
    setOutputMessage(true)
  }

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [addressTwo, setAddressTwo] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [outputMessage,setOutputMessage] = useState("")
  return (
    <div className="form-div" >
      <h1>Data Entry form</h1>
      <form className="form-component-div" onSubmit={(e)=>submitData(e)} >
        <div className="div-flex">
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setOutputMessage(false)
              }}
              placeholder="Email@example.com"
              name="email"
              id="email"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setOutputMessage(false)
                setName(e.target.value);
              }}
              placeholder="Name"
              name="name"
              id="name"
            />
          </div>
        </div>
        <div className="input-wrapper">
          <label htmlFor="address">Adress</label>
          <input
            type="text"
            value={address}
            onChange={(e) => {
                setOutputMessage(false)
              setAddress(e.target.value);
            }}
            placeholder="Address"
            name="address"
            id="address"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="address2">Address 2</label>
          <input
            type="text"
            value={addressTwo}
            onChange={(e) => {
                setOutputMessage(false)
              setAddressTwo(e.target.value);
            }}
            placeholder="Address2"
            name="address2"
            id="address2"
          />
        </div>
        <div className="div-flex">
          <div className="input-wrapper">
            <label htmlFor="city">City</label>
            <input
              type="text"
              value={city}
              onChange={(e) => {
                setOutputMessage(false)
                setCity(e.target.value);
              }}
              placeholder="City"
              name="city"
              id="city"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="province">Province</label>
            <select
              value={province}
              onChange={(e) => {setProvince(e.target.value);setOutputMessage(false)}}
              name="province"
              id="province"
            >
              <option value="">Select a province</option>
              {provinces.map((province) => (
                <option key={province} value={province}>
                  {province}
                </option>
              ))}
            </select>
          </div>
          <div className="input-wrapper">
            <label htmlFor="postalcode">Postal Code</label>
            <input
            value={postalCode}
            onChange={(e)=>{setPostalCode(e.target.value);setOutputMessage(false)}}
              type="text"
              placeholder="Postal code"
              name="postalcode"
              id="postalcode"
            />
          </div>
        </div>
        <input className="submit" type="submit" name="" id="" />
        {outputMessage && <div>
            <h5><span>Email: </span> {email}</h5>
            <h5><span>Name: </span> {name}</h5>
            <h5><span>Address: </span> {address}</h5>
            <h5><span>Address2: </span> {addressTwo}</h5>
            <h5><span>City: </span> {city}</h5>
            <h5><span>Province: </span> {province}</h5>
            <h5><span>Postal Code: </span> {postalCode}</h5>
            </div>}
      </form>
    </div>
  );
}

export default FormComponent;
