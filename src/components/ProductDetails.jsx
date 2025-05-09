import React, { useState } from "react";

const ProductDetails = () => {
  const product = {
    name: "ABSTRACT PRINT SHIRT",
    price: 99,
    description:
      "Relaxed-fit shirt. Camp collar and short sleeves. Button-up front.",
    images: [
      "/images/black-front.png",
      "/images/black-back.png",
      "/images/red.png",
      "/images/white.png",
    ],
    colors: ["#ccc", "#333", "#000", "#4fd1c5", "#b4b4f5"],
    sizes: ["XS", "S", "M", "L", "XL", "2X"],
  };
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(null);
  return (
    <div className="flex flex-col md:flex-row gap-8 p-10 max-w-7xl mx-auto">
      {/* Image Gallery */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex md:flex-col gap-2">
          {product.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Thumbnail ${idx}`}
              className={`w-16 h-20 object-cover border cursor-pointer ${
                selectedImage === img ? "border-black" : "border-gray-300"
              }`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
        <img
          src={selectedImage}
          alt={product.name}
          className="w-[350px] h-[450px] object-cover border"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1 space-y-6">
        <div>
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <p className="text-xl font-semibold mt-2">${product.price}</p>
          <p className="text-sm text-gray-600">MRP incl. of all taxes</p>
        </div>

        <p className="text-gray-700">{product.description}</p>

        {/* Color Picker */}
        <div>
          <h4 className="font-medium mb-2">Color</h4>
          <div className="flex gap-2">
            {product.colors.map((color, idx) => (
              <button
                key={idx}
                className={`w-8 h-8 rounded-full border-2 ${
                  selectedColor === color ? "border-black" : "border-gray-300"
                }`}
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
              />
            ))}
          </div>
        </div>

        {/* Size Picker */}
        <div>
          <h4 className="font-medium mb-2">Size</h4>
          <div className="flex gap-2">
            {product.sizes.map((size, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedSize(size)}
                className={`border px-4 py-1 ${
                  selectedSize === size
                    ? "border-black bg-black text-white"
                    : "border-gray-300"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <button className="w-full mt-6 bg-gray-300 py-3 font-semibold hover:bg-black hover:text-white transition">
          ADD
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
