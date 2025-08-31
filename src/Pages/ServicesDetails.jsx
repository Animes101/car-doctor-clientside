import Navbar from "../Components/Layout/Navbar";
import useFetch from "../hooks/useFetch";
import { Link, useParams } from "react-router-dom";

const ServicesDetails = () => {
  const { _id } = useParams();

  const { data } = useFetch(`http://localhost:3000/services/${_id}`);

  console.log(data);

  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 justify-between py-10 gap-10">
        <div>
          <img className="w-full" src={data?.img} alt="" />
        </div>
        <div>
          <div className="card  bg-base-100 shadow-sm">
            <div className="card-body">
              <span className="badge badge-xs badge-warning">facility</span>
              <div className="flex justify-between">
                <h2 className="text-3xl font-bold">{data?.title}</h2>
                <span className="text-xl">${data?.price}</span>
              </div>
              <ul className="mt-6 flex flex-col gap-2 text-xs">
                {data?.facility.map((item, index) => {
                  return (
                    <li key={index}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-8 me-2 inline-block text-success"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>
                        <h2 className="text-3xl font-bold font-inter">
                          {item.name}
                        </h2>
                        :{item.details}
                      </span>
                    </li>
                  );
                })}
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>High-resolution image generation</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link
                  to={"/checkout"}
                  state={{ id: data?.service_id, title: data?.title }}
                  className="btn btn-primary btn-block"
                >
                  Proceed Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
