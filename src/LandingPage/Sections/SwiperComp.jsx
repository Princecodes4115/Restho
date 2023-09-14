import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Img2 from "../../assets/2.png";
import Img3 from "../../assets/3.png";
import Img4 from "../../assets/4.png";
const data = [
  {
    image: Img3,
    title: "Title",
    text: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
  },
  {
    image: Img2,
    title: "Title",
    text: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
  },
  {
    image: Img3,
    title: "Title",
    text: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
  },
  {
    image: Img4,
    title: "Title",
    text: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
  },
];
const SwiperComp = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3, // Number of cards to show in a row
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Auto-advance slides every 3 seconds
  };

  return (
    <Slider {...settings}>
      {data.map((item, index) => (
        <div key={index} className="p-4">
          <div className="bg-white rounded shadow p-4 flex">
            <img src={item.image} alt={item.title} className="w-full " />
            <div>
              <p className="text-lg font-semibold mt-2">{item.title}</p>
              <p className="text-sm text-gray-500 mt-1">{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SwiperComp;
