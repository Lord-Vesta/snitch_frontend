import React, { useState } from "react";

const products = [
  {
    name: "Classic Tee",
    price: "$25.00",
    available: true,
    discount: "10% Off",
    image:
      "https://plus.unsplash.com/premium_photo-1679056835084-7f21e64a3402?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Summer Dress",
    price: "$40.00",
    available: true,
    discount: null,
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGNsb3RoaW5nfGVufDB8fDB8fHww",
  },
  {
    name: "Denim Jacket",
    price: "$60.00",
    available: false,
    discount: "5% Off",
    image:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGNsb3RoaW5nfGVufDB8fDB8fHww",
  },
  {
    name: "Sneakers",
    price: "$80.00",
    available: true,
    discount: null,
    image:
      "https://images.unsplash.com/photo-1542219550-2da790bf52e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fGNsb3RoaW5nfGVufDB8fDB8fHww",
  },
  {
    name: "Classic Tee",
    price: "$25.00",
    available: true,
    discount: "10% Off",
    image:
      "https://images.unsplash.com/photo-1618354691551-44de113f0164?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fGNsb3RoaW5nfGVufDB8fDB8fHww",
  },
  {
    name: "Summer Dress",
    price: "$40.00",
    available: true,
    discount: null,
    image:
      "https://images.unsplash.com/photo-1619603364904-c0498317e145?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGNsb3RoaW5nfGVufDB8fDB8fHww",
  },
  {
    name: "Denim Jacket",
    price: "$60.00",
    available: false,
    discount: "5% Off",
    image:
      "https://images.unsplash.com/photo-1588359348347-9bc6cbbb689e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fGNsb3RoaW5nfGVufDB8fDB8fHww",
  },
  {
    name: "Sneakers",
    price: "$80.00",
    available: true,
    discount: null,
    image:
      "https://images.unsplash.com/photo-1618898909019-010e4e234c55?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHxjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Classic Tee",
    price: "$25.00",
    available: true,
    discount: "10% Off",
    image:
      "https://plus.unsplash.com/premium_photo-1679056835084-7f21e64a3402?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Summer Dress",
    price: "$40.00",
    available: true,
    discount: null,
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGNsb3RoaW5nfGVufDB8fDB8fHww",
  },
  {
    name: "Denim Jacket",
    price: "$60.00",
    available: false,
    discount: "5% Off",
    image:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGNsb3RoaW5nfGVufDB8fDB8fHww",
  },
  {
    name: "Sneakers",
    price: "$80.00",
    available: true,
    discount: null,
    image:
      "https://images.unsplash.com/photo-1542219550-2da790bf52e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fGNsb3RoaW5nfGVufDB8fDB8fHww",
  },
  {
    name: "Classic Tee",
    price: "$25.00",
    available: true,
    discount: "10% Off",
    image:
      "https://images.unsplash.com/photo-1618354691551-44de113f0164?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fGNsb3RoaW5nfGVufDB8fDB8fHww",
  },
  {
    name: "Summer Dress",
    price: "$40.00",
    available: true,
    discount: null,
    image:
      "https://images.unsplash.com/photo-1619603364904-c0498317e145?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGNsb3RoaW5nfGVufDB8fDB8fHww",
  },
  {
    name: "Denim Jacket",
    price: "$60.00",
    available: false,
    discount: "5% Off",
    image:
      "https://images.unsplash.com/photo-1588359348347-9bc6cbbb689e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fGNsb3RoaW5nfGVufDB8fDB8fHww",
  },
  {
    name: "Sneakers",
    price: "$80.00",
    available: true,
    discount: null,
    image:
      "https://images.unsplash.com/photo-1618898909019-010e4e234c55?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHxjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
];

const ProductShowcase = ({ title }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section id="products" className="py-16 px-8 bg-white mx-auto">
      <h3 className="text-3xl font-bold text-center mb-8">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center ">
        {showMore
          ? products.map((product, idx) => (
              <div
                key={idx}
                className="group h-[25rem] rounded-lg  shadow-sm w-[18rem] relative mx-auto"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover mb-4 rounded"
                />
                <div className="absolute bottom-0 w-full h-[5rem] bg-[#b4b4b4]/70 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-lg font-semibold">{product.name}</h4>
                  <div className="flex justify-between items-center  ">
                    <div className="flex justify-center items-center gap-2">
                      <p
                        className={`${product.discount ? "line-through" : ""}`}
                      >
                        {product.price}
                      </p>
                      {product.discount && (
                        <span className="text-md text-red-500">
                          {product.discount}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          : products.slice(0, 8).map((product, idx) => (
              <div
                key={idx}
                className="group h-[25rem] rounded-lg  shadow-sm w-[18rem] relative mx-auto"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover mb-4 rounded"
                />
                <div className="absolute bottom-0 w-full h-[5rem] bg-[#b4b4b4]/70 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-lg font-semibold">{product.name}</h4>
                  <div className="flex justify-between items-center  ">
                    <div className="flex justify-center items-center gap-2">
                      <p
                        className={`${product.discount ? "line-through" : ""}`}
                      >
                        {product.price}
                      </p>
                      {product.discount && (
                        <span className="text-md text-red-500">
                          {product.discount}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
      </div>
      <div className="text-center mt-10">
        <button
          className="text-yellow-600 hover:underline"
          onClick={toggleShowMore}
        >
          {showMore ? "View Less" : "View More"}
        </button>
      </div>
    </section>
  );
};

export default ProductShowcase;
