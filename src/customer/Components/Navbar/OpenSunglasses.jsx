import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";

const Sunglasses = {
  sidebarData: {
    shop: ["Men", "Women", "Kids", "All Sunglasses"],
    giftCard: [
      "New Arrivals",
      "Best Sellers",
      "Reverse",
      "Scuderia Ferrari",
      "Chromance",
      "Polarized ❤️",
      "Titanium",
    ],
  },
  mainContentData: [
    {
      name: "Aviator",
      img: "https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx7235_8063_6.png",
    },
    {
      name: "Wayfarer",
      img: "https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx7236i_6750_6.png",
    },
    {
      name: "Erika",
      img: "https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx7236i_8368_6.png",
    },
    {
      name: "Round",
      img: "https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx7237i_5754_6.png",
    },
    {
      name: "New Wayfarer",
      img: "https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx7237i_8335_6.png",
    },
    {
      name: "I-shape",
      img: "https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx7239_2012_6.png",
    },
    {
      name: "Justin",
      img: "https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx8789_1244_6.png",
    },
    {
      name: "Clubmaster",
      img: "https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx8789_1246_6.png",
    },
  ],
};

const AccordionItem = ({ title, children, isOpen, onClick }) => (
  <div className="border-b border-gray-200 w-full">
    <button
      type="button"
      className="w-full flex items-center justify-between p-4 text-left text-gray-900 font-medium hover:bg-gray-100 focus:outline-none"
      onClick={onClick}
    >
      <span>{title}</span>
      <span className="ml-2">{isOpen ? "-" : "+"}</span>
    </button>
    <Transition
      show={isOpen}
      enter="transition duration-200 ease-out"
      enterFrom="transform -translate-y-4 opacity-0"
      enterTo="transform translate-y-0 opacity-100"
      leave="transition duration-150 ease-in"
      leaveFrom="transform translate-y-0 opacity-100"
      leaveTo="transform -translate-y-4 opacity-0"
    >
      <div className="p-4">{children}</div>
    </Transition>
  </div>
);

const Accordion = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-wrap max-w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {Object.entries(data.sidebarData).map(([key, items], index) => (
        <AccordionItem
          key={key}
          title={key.charAt(0).toUpperCase() + key.slice(1)}
          isOpen={openIndex === index}
          onClick={() => handleAccordionClick(index)}
        >
          <ul>
            {items.map((item, i) => (
              <li key={i} className="py-2 px-4 text-gray-700 hover:bg-gray-100">
                {item}
              </li>
            ))}
          </ul>
        </AccordionItem>
      ))}
    </div>
  );
};

const MainContent = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 2) % data.mainContentData.length
      );
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [data.mainContentData.length]);

  const visibleSunglasses = data.mainContentData.slice(
    currentIndex,
    currentIndex + 2
  );

  return (
    <div className="flex overflow-x-scroll p-2 space-x-2">
      {visibleSunglasses.map((sunglass) => (
        <div
          key={sunglass.name}
          className="bg-white shadow-lg rounded-lg overflow-hidden transition-shadow duration-300"
          style={{ width: "150px", height: "120px" }}
        >
          <img
            src={sunglass.img}
            alt={sunglass.name}
            className="w-full h-auto object-cover"
          />
          <div className="p-2 text-center text-sm text-gray-900 h-1/2">
            {sunglass.name}
          </div>
        </div>
      ))}
    </div>
  );
};

const OpenSunglasses = ({ data }) => (
  <div className="h-auto bg-gray-100">
    <div>
      <aside className="w-full">
        <Accordion data={data} />
      </aside>
      <main className="w-full h-[150px]">
        <MainContent data={data} />
      </main>
    </div>
  </div>
);

export default OpenSunglasses;
