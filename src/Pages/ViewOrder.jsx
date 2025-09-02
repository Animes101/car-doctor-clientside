import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import Swal from 'sweetalert2'
import Navbar from "../Components/Layout/Navbar";


const ViewOrder = () => {
  const { data } = useFetch("http://localhost:3000/vieworder");
  const [orders, setOrders] = useState([]);

  // যখনই নতুন data আসবে, লোকাল স্টেটে সেট করে দেবে
  useEffect(() => {
    if (data) {
      setOrders(data);
    }
  }, [data]);

  const handleDeleteOrder = (id) => {
    fetch(`http://localhost:3000/order/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result?.data?.deletedCount > 0) {

       
                Swal.fire({
                position: "center",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
                });
          // লোকাল স্টেট থেকে ডিলিট করা
          const newOrders = orders.filter((item) => item._id !== id);
          setOrders(newOrders);
        }
      })
      .catch((err) => console.error(err));
  };




 


    //   handleConfirm

  const handleConfirm=(id)=>{
     fetch(`http://localhost:3000/order/${id}`, {
     method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      status: "confirmed",   // যে ডেটা আপডেট করতে চাও
    }),
    })
      .then((res) => res.json())
      .then((result) => {


        if (result?.data?.modifiedCount > 0) {
                Swal.fire({
                position: "center",
                icon: "success",
                title: "Aprove success fully",
                showConfirmButton: false,
                timer: 1500
                });

                const remining=data.filter(item=> item._id !== id)
                const update=data.find(item=> item._id == id)
                const newOrder=[update, ... remining]
                setOrders(newOrder)
        }
      })
      .catch((err) => console.error(err));

  }

  return (
    <div className="container mx-auto my-7">


    <Navbar></Navbar>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Product ID</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.userName}</td>
                <td>{item.email}</td>
                <td>{item.phoneNumber}</td>
                <td>{item._id}</td>
                <td>
                  <button
                    className="btn btn-secondary"
                    onClick={() => handleDeleteOrder(item._id)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-secondary"
                    onClick={() => handleConfirm(item._id)}
                  >
                    {item.status ?  'Aprode' : 'Submit'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewOrder;
