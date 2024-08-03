function Card({ category, description, image, price, title, rating }) {
    return (
    //   <div className="p-4 flex justify-center items-center bg-black shadow-md rounded-lg overflow-hidden">
    //     <a className="block relative h-48 rounded overflow-hidden">
    //       <img
    //         alt={title}
    //         className="object-cover object-center w-50 h-50"
    //         src={image}
    //       />
    //     </a>
    //     <div className="mt-4">
    //       <h3 className="text-gray-500 text-xs tracking-widest uppercase mb-1">
    //         {category}
    //       </h3>
    //       <h2 className="text-gray-900 text-lg font-semibold">
    //         {title}
    //       </h2>
    //       <p className="mt-1 text-gray-700">${price}</p>
    //     </div>
    //   </div>
    <div className="p-4 md:w-1/3 ">
      <div className="h-full border-3 border-black border-opacity-60 rounded-lg overflow-hidden mycard">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={image}
          alt={title}
        />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            {category}
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {title}
          </h1>
          <p className="leading-relaxed mb-3">
            {description}
          </p>
          <div className="flex items-center flex-wrap ">
            <a className="text-pink-500 inline-flex items-center md:mb-2 lg:mb-0">
              Learn More
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </a>
            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <svg
                className="w-4 h-4 mr-1"
                stroke="currentColor"
                strokeWidth={2}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx={12} cy={12} r={3} />
              </svg>
              1.2K
            </span>
            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
              Rating: {rating}
            </span>
            <span className="ml-2">{price}$</span>
          </div>
        </div>
      </div>
  </div>
  
    );
  }
  
  export default Card;
  