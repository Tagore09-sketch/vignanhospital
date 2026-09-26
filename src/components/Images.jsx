import { useState } from "react";
import "./Rental.css";

export default function Images() {
  const [showForm, setShowForm] = useState(false);
  const [product, setProduct] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const products = [
    {
      name: "CPAP / BiPAP Machine",
      image:
        "https://northfloridasleep.com/wp-content/uploads/2023/01/cpap-machine.jpg",
      desc: "Used to treat sleep apnea by maintaining airflow.",
    },
    {
      name: "Hospital Bed",
      image:
        "https://cdn.shopify.com/s/files/1/0769/1349/products/15003bv-pkg-1.jpg?v=1455081283",
      desc: "Comfortable adjustable beds for home care.",
    },
    {
      name: "Suction Pump",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.dgdBjyl1YRn_Od6GtHXfyAHaE1?rs=1&pid=ImgDetMain&o=7&rm=3",
      desc: "Safely removes fluids and clears airways.",
    },
  ];

  return (
    <>
      {/* ================= Products ================= */}
      <div className="image-container">
        {products.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.desc}</p>

            <button
              className="buy-btn"
              onClick={() => {
                setProduct(item.name);
                setShowForm(true);
                setPaymentMethod("");
              }}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>

      {/* ================= Extra Info ================= */}
      <div className="equipment-extra">
        <div className="equipment-left">
          <ul>
            <li>✔ Suction pump</li>
            <li>✔ Monitors and more</li>
          </ul>

          <p className="equipment-info">
            For more medical rental equipment or additional requests, call us.
          </p>
        </div>

        <button className="contact-btn">📞 Contact Now</button>
      </div>

      {/* ================= Buy Modal ================= */}
      {showForm && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Buy {product}</h2>

            <form
              className="buy-form"
              onSubmit={(e) => {
                e.preventDefault();
                setShowSuccess(true);
              }}
            >
              <input placeholder="Full Name" required />
              <input placeholder="Phone Number" required />
              <input placeholder="Email" />
              <textarea placeholder="Delivery Address" required />

              {/* ===== Payment Section ===== */}
              <div className="payment-section">
                <p className="payment-title">Payment Method</p>

                <div className="payment-row">
                  <label className="payment-inline">
                    <input
                      type="radio"
                      name="payment"
                      value="COD"
                      checked={paymentMethod === "COD"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      required
                    />
                    <span>Cash on Delivery</span>
                  </label>

                  <label className="payment-inline">
                    <input
                      type="radio"
                      name="payment"
                      value="ONLINE"
                      checked={paymentMethod === "ONLINE"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <span>Online Payment</span>
                  </label>
                </div>

                {paymentMethod === "ONLINE" && (
                  <div className="payment-sub-box">
                    <label>
                      <input type="radio" name="onlinePay" required /> PhonePe
                    </label>
                    <label>
                      <input type="radio" name="onlinePay" /> Google Pay
                    </label>
                  </div>
                )}
              </div>

              <button type="submit">Submit</button>
            </form>

            <span className="close" onClick={() => setShowForm(false)}>
              ✕
            </span>
          </div>
        </div>
      )}

      {/* ================= Success Popup ================= */}
      {showSuccess && (
        <div className="success-overlay">
          <div className="success-box">
            <h2>✅ Order Confirmed</h2>
            <p>You will receive within a few hours</p>
            <button
              onClick={() => {
                setShowSuccess(false);
                setShowForm(false);
              }}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
}
