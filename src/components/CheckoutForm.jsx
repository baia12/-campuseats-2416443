import { useState } from "react";

function CheckoutForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [mahallah, setMahallah] = useState("Faruq");
  const [pickupTime, setPickupTime] = useState("12:00");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (name.trim().length < 3) {
      setError("Please enter a name with at least 3 characters.");
      return;
    }

    if (!pickupTime) {
      setError("Please select a pickup time.");
      return;
    }

    setError("");

    onSubmit({
      name: name.trim(),
      mahallah,
      pickupTime,
    });
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>Checkout</h3>

      <label htmlFor="customer-name">Name</label>
      <input
        id="customer-name"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
        minLength={3}
      />

      <label htmlFor="mahallah">Mahallah</label>
      <select
        id="mahallah"
        value={mahallah}
        onChange={(event) => setMahallah(event.target.value)}
      >
        {[
          "Ali",
          "Aminah",
          "Faruq",
          "Asiah",
          "Bilal",
          "Hafsa",
          "Uthman",
          "Zubair",
        ].map((place) => (
          <option key={place} value={place}>
            {place}
          </option>
        ))}
      </select>

      <label htmlFor="pickup-time">Pickup time</label>
      <input
        id="pickup-time"
        type="time"
        min="07:00"
        max="22:00"
        value={pickupTime}
        onChange={(event) => setPickupTime(event.target.value)}
        required
      />

      {error && <p className="field-error">{error}</p>}

      <button className="btn" type="submit">
        Place Order
      </button>
    </form>
  );
}

export default CheckoutForm;
