import React from 'react';

const productData = [
  { name: "Aviator Titanium", image: "https://india.ray-ban.com/media/catalog/product/0/r/0rx7239_2012_6.png", color: "1COLOR", price: "₹20,290.00" },
  { name: "Aviator Titanium", image: "https://india.ray-ban.com/media/catalog/product/0/r/0rx7239_2012_6.png", color: "1COLOR", price: "₹20,290.00" },
  { name: "Alain", image: "https://india.ray-ban.com/media/catalog/product/0/r/0rx7239_2012_6.png", color: "1COLOR", price: "₹7,390.00" },
  { name: "Alice", image: "https://india.ray-ban.com/media/catalog/product/0/r/0rx7239_2012_6.png", color: "1COLOR", price: "₹5,990.00" },
  { name: "Alice", image: "https://india.ray-ban.com/media/catalog/product/0/r/0rx7239_2012_6.png", color: "1COLOR", price: "₹5,990.00" },
  { name: "Alice", image: "https://india.ray-ban.com/media/catalog/product/0/r/0rx7239_2012_6.png", color: "1COLOR", price: "₹5,990.00" },
  { name: "Alice", image: "https://india.ray-ban.com/media/catalog/product/0/r/0rx7239_2012_6.png", color: "1COLOR", price: "₹5,990.00" },
  { name: "Alice", image: "https://india.ray-ban.com/media/catalog/product/0/r/0rx7239_2012_6.png", color: "1COLOR", price: "₹10,590.00" },
  { name: "Alice", image: "https://india.ray-ban.com/media/catalog/product/0/r/0rx7239_2012_6.png", color: "1COLOR", price: "₹10,590.00" }
];

const Product = ({ name, image, color, price }) => (
  <div className="border p-4 flex flex-col">
    <div className="relative">
      <img src={image} alt={name} className="w-full h-auto" />
      <span className="absolute top-0 left-0 bg-red-500 text-white text-xs px-2 py-1">NEW</span>
    </div>
    <h2 className="mt-2 font-bold">{name}</h2>
    <p className="text-zinc-500">{color}</p>
    <p className="font-bold mt-auto">{price}</p> {/* Ensure price is at the bottom */}
  </div>
);



const ProductCard = ({ name, image, color, price }) => {
  const cardClasses = "border p-4 rounded-lg max-w-sm mx-auto dark:bg-zinc-800";
const flexClasses = "flex justify-between items-center";
const textClasses = "text-zinc-500 dark:text-zinc-300";
const darkTextClasses = "text-black font-bold dark:text-zinc-100";
    return (
        <div className={cardClasses}>
            <div className={flexClasses}>
                <h2 className="text-xl font-bold">{name}</h2>
            </div>
            {/* <div className="relative my-4">
                <span className="absolute top-0 left-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">NEW</span>
                <img src={image} alt="Aviator Titanium Glasses" className="w-full" />
            </div> */}
            <div className="relative my-4">
      <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded transform rotate-45">NEW</span>

      <img src={image} alt={name} className="w-full" />
    </div>
            <div className={flexClasses}>
              <span className={textClasses}>{color}</span>
                <span className={darkTextClasses}>{price}</span>
            </div>
        </div>
    );
};


const ProductGrid = ({ products }) => (
  <div id="product-grid" className="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
    {products.map((product, index) => (
      <ProductCard key={index} {...product} />
    ))}
  </div>
);

const NewArrivals = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">New Arrivals</h1>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
        <div className="flex items-center space-x-2 mb-2 md:mb-0">
          <label className="font-bold">Filter By:</label>
          <select className="border p-2 rounded">
            <option>Product Details</option>
          </select>
          <label className="flex items-center space-x-1">
            <input type="checkbox" />
            <span>New Arrivals</span>
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <label className="font-bold">Sort By:</label>
          <select className="border p-2 rounded">
            <option>Newest First</option>
          </select>
        </div>
      </div>
      <ProductGrid products={productData} />
      <button className="bg-black text-white py-2 px-4 rounded mt-4 mx-auto block">Load More Items</button>
    </div>
  );
};

export default NewArrivals;
