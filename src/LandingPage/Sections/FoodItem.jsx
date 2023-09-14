const data = [
  {
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTmHaLC6lxHZOB_p2c_0ijCVzi101xAKhAkAmkBKAe6EFy3IuNq",
    title: "Mutton Kabab",
    text: "It is a long established fact that a reader will be distracted.",
    price: 345,
    launch: "Launch",
  },
  {
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTmHaLC6lxHZOB_p2c_0ijCVzi101xAKhAkAmkBKAe6EFy3IuNq",
    title: "Mutton Kabab",
    text: "It is a long established fact that a reader will be distracted.",
    price: 345,
    launch: "Launch",
  },
  {
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTmHaLC6lxHZOB_p2c_0ijCVzi101xAKhAkAmkBKAe6EFy3IuNq",
    title: "Mutton Kabab",
    text: "It is a long established fact that a reader will be distracted.",
    price: 345,
    launch: "Launch",
  },
  {
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTmHaLC6lxHZOB_p2c_0ijCVzi101xAKhAkAmkBKAe6EFy3IuNq",
    title: "Mutton Kabab",
    text: "It is a long established fact that a reader will be distracted.",
    price: 345,
    launch: "Launch",
  },
  {
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTmHaLC6lxHZOB_p2c_0ijCVzi101xAKhAkAmkBKAe6EFy3IuNq",
    title: "Mutton Kabab",
    text: "It is a long established fact that a reader will be distracted.",
    price: 345,
    launch: "Launch",
  },
];

const FoodItem = () => {
    return (
      <div className="w-full mt-14">
        <div className="text-6xl font-bold w-[80%] justify-start mx-20">Find Your Food Item</div>

        <div className="flex flex-wrap justify-center w-full gap-20 mt-10">
          {data.map((item, index) => (
            <div
              key={index}
              className="relative w-[20rem] bg-white flex flex-col justify-between items-center shadow-md hover:shadow-xl rounded-md overflow-hidden transition-shadow duration-150 "
            >
              <img
                className="h-[170px] w-full object-cover hover:scale-105 transition-scale duration-200 ease-in"
                loading="lazy"
                src={item.image}
                alt=""
              />
              <div className="absolute top-2 left-2 bg-[#3377cc] text-white uppercase text-xs font-semibold rounded-md px-2 py-1 shadow-lg">
                {item.launch}
              </div>
              <div className="w-full p-[10px] text-center">
                <div className="flex items-center space-x-1">
                  {/* <MdLocationOn className="h-4 w-4 text-green-600" /> */}
                </div>
                <p className="font-semibold m-0 text-xl truncate">
                  {item.title}
                </p>
                <p className="text-[#457b9d] mt-2 font-semibold">
                  {item.price}
                </p>
                <div className="flex items-center mt-[10px] space-x-3">
                  <div className="flex items-center space-x-1">
                    <p className="font-bold text-xs">{item.text}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}

export default FoodItem
