import { AiOutlineTags } from "react-icons/ai";
import React from "react";

function ServiesDetail() {
  return (
    <section className=" ">
      <span className="flex">
        <AiOutlineTags />
        <h1> Cắt tỉa đường phố ,..vvv.</h1>
      </span>
      <article className="grid grid-cols-4">
        <img
          src="https://nhatminhlandscape.com/files/images/product/tk-thi-cong-canh-quan/D%E1%BB%B1%20%C3%A1n%20C%C3%B4ng%20vi%C3%AAn%20V%E1%BA%A1n%20Ph%C3%A1t%20S%C3%B4ng%20H%E1%BA%ADu%2C%20t%E1%BB%95ng%20di%E1%BB%87n%20t%C3%ADch%203.200m2.jpg"
          alt=""
          className="col-span-2"
        />
        <div className="col-span-2 mx-5">
          <h1 className="font-bold text-4xl text-blue-600 uppercase">
            Thiết kế Biệt thự nhà vườn
          </h1>
          <p>
            Cắt tỉa, chăm sóc duy trì mảng xanh trong môi trường độ thị hiện nay
            rất được chú trọng vì không chỉ giúp không gian thêm tươi mát mà còn
            tránh được nguy hiểm tìm ẩn cây gãy đổ, bật gốc... Đặng Nguyễn công
            ty chuyên nhận chăm sóc và bảo dưỡng cây xanh hơn 10 năm qua. Chúng
            tôi tin với tìm lực và kinh nghiệm sẽ luôn làm hài lòng khách hàng.
          </p>
        </div>
      </article>
    </section>
  );
}

export default ServiesDetail;
