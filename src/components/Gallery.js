import "./Gallery.css";
import aa from "./images/Gallary/aa.jpg";
import bb from "./images/Gallary/bb.jpg";
import cc from "./images/Gallary/cc.jpg";
import dd from "./images/Gallary/dd.jpg";
import ee from "./images/Gallary/ee.jpg";
import ff from "./images/Gallary/ff.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const imagesData = [
  {
    id: 1,
    img: aa,
  },
  {
    id: 2,
    img: bb,
  },
  {
    id: 3,
    img: cc,
  },
  {
    id: 4,
    img: dd,
  },
  {
    id: 5,
    img: ee,
  },
  {
    id: 6,
    img: ff,
  },
];
var settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 530,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
export default function Gallery() {
  return (
    <div className="gallery-container">
      <Slider {...settings}>
        {imagesData.map((curImage) => (
          <Image image={curImage} key={curImage.id} />
        ))}
      </Slider>
    </div>
  );
}

function Image({ image }) {
  return (
    <div className="gallery-image">
      <img
        src={Object.values(image)[1]}
        alt={image.id}
        className="gallery-image-img"
      ></img>
    </div>
  );
}

//   {
//     id: 7,
//     img: gg,
//   },
//   {
//     id: 8,
//     img: hh,
//   },
//   {
//     id: 9,
//     img: jj,
//   },
//   {
//     id: 10,
//     img: kk,
//   },
