import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Sliders() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeeds: 1000,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const Job = [
    {
      title: "hello",
      discipstion: "dd",
      img: "https://eqvn.net/wp-content/uploads/2013/03/%C3%9D-t%C6%B0%E1%BB%9Fng-cho-b%C3%A0i-vi%E1%BA%BFt.jpg",
    },
    {
      title: "hellos",
      discipstion: "ss",
      img: "https://eqvn.net/wp-content/uploads/2013/03/%C3%9D-t%C6%B0%E1%BB%9Fng-cho-b%C3%A0i-vi%E1%BA%BFt.jpg",
    },
    {
      title: "hellos",
      discipstion: "ss",
      img: "https://eqvn.net/wp-content/uploads/2013/03/%C3%9D-t%C6%B0%E1%BB%9Fng-cho-b%C3%A0i-vi%E1%BA%BFt.jpg",
    },
    {
      title: "hellos",
      discipstion: "ss",
      img: "https://eqvn.net/wp-content/uploads/2013/03/%C3%9D-t%C6%B0%E1%BB%9Fng-cho-b%C3%A0i-vi%E1%BA%BFt.jpg",
    },
    {
      title: "hellos",
      discipstion: "ss",
      img: "https://eqvn.net/wp-content/uploads/2013/03/%C3%9D-t%C6%B0%E1%BB%9Fng-cho-b%C3%A0i-vi%E1%BA%BFt.jpg",
    },
  ];
  return (
    <Slider {...settings} className="rounded-md  ">
      {Job.map((Jobs, index) => (
        <section
          key={index}
          className="rounded-3xl  h-[350px] px-3 md:h-[380px]   lg:h-[400px]    "
        >
          <img className="rounded-3xl mx-1" src={Jobs.img} />

          <article className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {Jobs.title}
            </h5>
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              {Jobs.discipstion}
            </p>
          </article>
          <article className="p-6 pt-0">
            <button
              data-ripple-light="true"
              type="button"
              className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Read More
            </button>
          </article>
        </section>
      ))}
    </Slider>
  );
}
