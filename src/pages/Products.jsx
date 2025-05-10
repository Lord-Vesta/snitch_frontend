import React from "react";
import ProductDetails from "../components/ProductDetails";

const Products = () => {
  const relatedProducts = [
    { name: "Casual Shirt", price: 49, image: "/images/shirt1.jpg" },
    { name: "Formal Shirt", price: 59, image: "/images/shirt2.jpg" },
    { name: "Denim Jacket", price: 89, image: "/images/jacket.jpg" },
    { name: "Graphic Tee", price: 29, image: "/images/tee.jpg" },
  ];
  return (
    <>
      <ProductDetails />
      <div className="mt-10  gap-8 p-10 max-w-7xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">You might also like</h2>
        <div className="flex overflow-x-auto space-x-4 pb-4">
          {relatedProducts.map((product, index) => (
            <div
              key={index}
              className="min-w-[200px] bg-white border rounded-lg shadow p-2 flex-shrink-0"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded"
              />
              <h3 className="mt-2 text-sm font-medium">{product.name}</h3>
              <p className="text-gray-500 text-sm">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
