import { AiOutlineTags } from "react-icons/ai";

import { BsFillPatchCheckFill } from "react-icons/bs";
import {} from "react";
import Navbar from "./../../Components/Layout/Header/Navbar";
import Header from "../../Components/Layout/Header/Header";
import Footer from "../../Components/Layout/Footer/Footer";
import Sliders from "./../../Components/Slider/Slider.jsx";
import Gallery from "../../Components/Slider/Gallery.jsx";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section>
      <Header />
      <Navbar />

      <div className="hero min-h-[500px] ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
            <img
              src="https://dichvuvesinhdanang.com/wp-content/uploads/2020/07/2.png"
              alt=" "
              className="rounded-2xl  "
            />
          </div>
          <div className="text-center lg:text-left">
            <h1 className="font-bold text-4xl text-blue-600 uppercase">
              Cắt tỉa cây cảnh Vĩnh Phan{" "}
            </h1>
            <p className="py-6">
              Dịch vụ vệ sinh công nghiệp SONGANHHYG được thành lập từ 2010, là
              một trong những đơn vị vệ sinh công nghiệp uy tín hàng đầu tại Đà
              Nẵng. Với hàng ngàn khách hàng tại Đà Nẵng và Hội An, chúng tôi
              cung ứng các dịch vụ sau:
            </p>
            <div className="footer px-10   text-base-content">
              <nav>
                <span className="flex   ">
                  <BsFillPatchCheckFill className="iconcheck" />
                  <a className=" link-hover">Vệ sinh văn phòng </a>
                </span>
                <span className="flex ">
                  <BsFillPatchCheckFill className="iconcheck" />
                  <a className=" link-hover">Cung ứng lao động thời vụ</a>
                </span>
                <span className="flex ">
                  <BsFillPatchCheckFill className="iconcheck" />
                  <a className=" link-hover">Vệ sinh công trình sau xây dựng</a>
                </span>
                <span className="flex ">
                  <BsFillPatchCheckFill className="iconcheck" />
                  <a className=" link-hover">Vệ sinh ống khói nhà bếp</a>
                </span>
                <span className="flex ">
                  <BsFillPatchCheckFill className="iconcheck" />
                  <a className=" link-hover">Giặt nệm, thảm, sofa, màn rèm</a>
                </span>
                <span className="flex ">
                  <BsFillPatchCheckFill className="iconcheck" />
                  <a className=" link-hover">Vệ sinh kính tòa nhà cao tầng</a>
                </span>
                <span className="flex ">
                  <BsFillPatchCheckFill className="iconcheck" />
                  <a className=" link-hover">Thi công sàn vinyl</a>
                </span>
                <span className="flex ">
                  <BsFillPatchCheckFill className="iconcheck" />
                  <a className=" link-hover">Xe chở xà bẩn</a>
                </span>
              </nav>
              <nav>
                <span className="flex   ">
                  <BsFillPatchCheckFill className="iconcheck" />
                  <a className=" link-hover">Vệ sinh nhà xưởng</a>
                </span>
                <span className="flex ">
                  <BsFillPatchCheckFill className="iconcheck" />
                  <a className=" link-hover">
                    Cung ứng tạp vụ văn phòng, gia đình
                  </a>
                </span>
                <span className="flex ">
                  <BsFillPatchCheckFill className="iconcheck" />
                  <a className=" link-hover">Dịch vụ vệ sinh công nghiệp</a>
                </span>
                <span className="flex ">
                  <BsFillPatchCheckFill className="iconcheck" />
                  <a className=" link-hover">Vệ sinh nhà cửa</a>
                </span>
                <span className="flex ">
                  <BsFillPatchCheckFill className="iconcheck" />
                  <a className=" link-hover">Vệ sinh đường ống dẫn nước</a>
                </span>
                <span className="flex ">
                  <BsFillPatchCheckFill className="iconcheck" />
                  <a className=" link-hover">
                    Dịch vụ diệt côn trùng, mối, ruồi
                  </a>
                </span>
                <span className="flex ">
                  <BsFillPatchCheckFill className="iconcheck" />
                  <a className=" link-hover">Mài đánh bóng sàn bê tông</a>
                </span>
                <span className="flex ">
                  <BsFillPatchCheckFill className="iconcheck" />
                  <a className=" link-hover">Vệ sinh phòng sạch</a>
                </span>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <nav className="col-span-6 pb-6 mx-0 md:mx-36">
        <h1 className="text-center font-bold text-4xl text-blue-600">
          TẠI SAO LỰA CHỌN VĨNH PHAN
        </h1>
        <div className="stats shadow inline-block w-full text-center  md:bg-green-200   my-5 lg:inline-grid ">
          <div className="stat ">
            <div className="stat-figure mr-[400%]   text-primary lg:mr-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Total Likes</div>
            <div className="stat-value text-primary">25.6K</div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary mr-[400%]   lg:mr-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Nhân viên </div>
            <div className="stat-value text-secondary">100+ </div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          <div className="stat ">
            <div className="stat-figure text-secondary mr-[175%]   lg:mr-0">
              <div className="avatar online">
                <div className="w-16 rounded-full">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
            </div>
            <div className="stat-value">86%</div>
            <div className="stat-title">Tasks done</div>
            <div className="stat-desc text-secondary">31 tasks remaining</div>
          </div>
          <div className="stat ">
            <div className="stat-figure text-secondary mr-[175%]   lg:mr-0">
              <div className="avatar ">
                <div className="w-16 rounded-full">
                  <img src="https://png.pngtree.com/png-clipart/20240117/original/pngtree-trophies-exquisite-presentations-honors-awards-podiums-png-image_14124541.png" />
                </div>
              </div>
            </div>
            <div className="stat-title">Awards</div>
            <div className="stat-value text-primary">21+</div>
            <div className="stat-desc">21% more than last month</div>
          </div>
        </div>
        <div className="hero min-h-[500px] ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className=" text-center lg:text-left ">
              <p className="pb-6  text-xl">
                Với nhiều năm kinh nghiệm trong lĩnh vực dịch vụ vệ sinh công
                nghiệp tại Đà Nẵng, chúng tôi tự hào dịch vụ của chúng tôi đang
                được các khách hàng lựa chọn như là một đối tác tin cậy hàng
                đầu.
              </p>
              <div className="footer px-10   text-base-content">
                <nav>
                  <span className="flex   ">
                    <AiOutlineTags className="text-red-600 text-3xl" />

                    <a className=" link-hover">
                      Đội ngũ nhân viên chuyên nghiệp
                    </a>
                  </span>
                  <span className="flex   ">
                    <AiOutlineTags className="text-red-600 text-3xl" />

                    <a className=" link-hover">
                      Trang thiết bị máy móc hiện đại{" "}
                    </a>
                  </span>
                  <span className="flex   ">
                    <AiOutlineTags className="text-red-600 text-3xl" />

                    <a className=" link-hover">Giá cả rõ ràng hợp lý </a>
                  </span>
                  <span className="flex   ">
                    <AiOutlineTags className="text-red-600 text-3xl" />

                    <a className=" link-hover">
                      Thi công an toàn và nhanh chóng
                    </a>
                  </span>
                  <span className="flex   ">
                    <AiOutlineTags className="text-red-600 text-3xl" />

                    <a className=" link-hover">Chính sách bảo hành tuyệt đối</a>
                  </span>
                  <span>
                    <a href="/" className="inline-flex rounded-md shadow-sm ">
                      <button
                        type="button"
                        className="inline-flex items-center px-4 py-4 border border-transparent text-base leading-6 font-medium rounded-bl-3xl rounded-tr-3xl text-white bg-green-600 hover:bg-rose-500 focus:border-rose-700 active:bg-rose-700 transition ease-in-out duration-150 transform hover:-translate-x-3 focus:-translate-x-3"
                      >
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Hotline : 0348216852
                      </button>
                    </a>
                  </span>
                </nav>
              </div>
            </div>
            <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
              <img
                src="https://nhatminhlandscape.com/files/images/d%E1%BB%8Bch%20v%E1%BB%A5%20c%E1%BA%AFt%20c%E1%BB%8F.jpg"
                alt=" "
                className="rounded-2xl "
              />
            </div>
          </div>
        </div>
        <h1 className=" pb-6 flex justify-center items-center font-bold text-4xl text-blue-600">
          NHỮNG DỰ ÁN NỔI BẬT
        </h1>
        <Sliders />
        <Gallery />
      </nav>
      <Link to="/blog" className=" pb-6 flex justify-center items-center">
        <button className="relative border  hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-14 w-56 rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold">
          <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
          <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-100"></div>
          <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-150"></div>
          <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-200"></div>
          <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-500 delay-150 group-hover:delay-300"></div>
          <p className="z-10">Discover More</p>
        </button>
      </Link>

      <Footer />
    </section>
  );
}

export default Home;
