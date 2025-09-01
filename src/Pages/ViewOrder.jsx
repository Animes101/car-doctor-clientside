import useFetch from "../hooks/useFetch";

const ViewOrder = () => {
  const { data } = useFetch(`http://localhost:3000/vieworder`);

  console.log(data)




  return (
    <div className="container mx-auto my-7">
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Product ID</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item,index)=>{
                return (

                    <tr key={index}>
                        <th>{index+1}</th>
                        <th>{item.userName}</th>
                        <th>{item.email}</th>
                        <th>{item.phoneNumnber}</th>
                        <th>{item._id}</th>
                    </tr>
                )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewOrder;
