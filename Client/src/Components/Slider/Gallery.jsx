import React from "react";

const images = [
  "https://maykhoanmakita.net/cdn/images/tin-tuc/cat-tia-cay-xanh-do-thi.jpg",
  "https://congtyhoanmy.com/files/editor/images/dichvu_vesinh_131169233209062500.jpg",
  "https://locnguyenxanh.com/wp-content/uploads/2023/03/cham-soc-cay-xanh-tai-chau-thanh-long-an.jpg",
  "https://congtymiennam.com/wp-content/uploads/2023/09/cham-soc-cay-xanh-.jpg",
  "https://cayphongthuy.com.vn/wp-content/uploads/2022/07/quy-trinh-cat-tia-cay-xanh-tai-dong-xoai.jpg",
  "https://hnm.1cdn.vn/thumbs/720x480/2023/07/17/cayxanh.jpg",
  "https://maykhoanmakita.net/cdn/images/tin-tuc/cach-cat-tia-cay-canh-3.jpg",
  "https://dongphuchaianh.vn/wp-content/uploads/2021/12/dong-phuc-cong-nhan-ve-sinh-moi-truong.jpg",
];

const Gallery = () => {
  return (
    <section>
      <h1 className=" pb-3 flex justify-center items-center font-bold text-4xl text-blue-600">
        AlBUM
      </h1>
      <nav className="container mx-auto py-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <article key={index} className="relative group">
            <figure className="w-full h-64 overflow-hidden rounded-lg">
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="object-cover w-full h-full transition duration-300 transform group-hover:scale-105"
              />
            </figure>
          </article>
        ))}
      </nav>
    </section>
  );
};

export default Gallery;
