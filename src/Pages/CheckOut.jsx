import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CheckOut = () => {
  const navigate = useNavigate();

  const location=useLocation();

  console.log(location)

const {id, title}=location.state || {}






  // handle Order

  const handleOrder = (e) => {
    e.preventDefault();
    const userName = e.target.username.value;
    const phoneNumnber = e.target.number.value;
    const lastName = e.target.lastname.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    if(userName== "" && phoneNumnber== '' && lastName== '' && email== ''&& message== ''){
        return
    }

    const order = {
      userName,
      phoneNumnber,
      lastName,
      email,
      message,
      id,
      title
    };

    fetch("http://localhost:3000/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });

          navigate("/services");
        }
      });
  };
  return (
    <div className="hero bg-base-200 h-[600px] container mx-auto">
      
      <form onSubmit={handleOrder} className="w-[90%]">
        <h1 className="text-center font-bold font-inter text-3xl py-5">Order Now</h1>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="grid grid-cols-1 gap-4">
              <input
                type="text"
                className="input w-full"
                name="username"
                placeholder="First Name"
              />
              <input
                type="text"
                className="input w-full"
                name="number"
                placeholder="Your Phone"
              />
            </div>
            <div className="grid grid-cols-1 gap-4">
              <input
                type="text"
                className="input w-full"
                name="lastname"
                placeholder="Last Name"
              />
              <input
                type="text"
                className="input w-full"
                name="email"
                placeholder="Your Email"
              />
            </div>
          </div>
          <textarea
            className="textarea w-full h-44  mt-4 box-border"
            name="message"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn w-full text-white mt-4 bg-[#FF3811]"
        >
          Order Confirm
        </button>
      </form>
    </div>
  );
};

export default CheckOut;
