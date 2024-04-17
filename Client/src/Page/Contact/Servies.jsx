import { Link } from "react-router-dom";
function Servies() {
  const Job = [
    {
      title: "hello",
      discipstion: "dd",
      img: "https://scontent-hkg1-2.xx.fbcdn.net/v/t39.30808-6/434718822_978448033855338_1267041279962753546_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=iE_QhAWh64kAb4sE61J&_nc_ht=scontent-hkg1-2.xx&oh=00_AfAlDDXZvLjiytvv0-mtFPp81mKE4FC3PuC4Kg-kQHXuew&oe=6625A217",
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
      title: "hellossssssssssssssssssssssssssssssssssssssss",
      discipstion: "ssshellosssssssssssssssssssssssssssssssssssssssssdsdsd",
      img: "https://eqvn.net/wp-content/uploads/2013/03/%C3%9D-t%C6%B0%E1%BB%9Fng-cho-b%C3%A0i-vi%E1%BA%BFt.jpg",
    },
  ];
  return (
    <section className="">
      <h1 className="flex justify-center items-center font-bold text-4xl text-blue-600 uppercase my-6">
        Dịch vụ cây xanh
      </h1>
      <nav className="grid grid-cols-2 gap-x-3  gap-y-3 md:grid-cols-2 md:gap-x-8  md:gap-y-8 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center ">
        {Job.map((Jobs, index) => (
          <article
            key={index}
            className="rounded-3xl h-[280px] md:w-[280px] md:h-[340px] border flex flex-col justify-between"
          >
            <Link to="/kithuat">
              <img
                src={Jobs.img}
                alt=""
                className="w-full h-[200px] p-3 rounded-3xl object-cover"
              />
              <aside className="mx-5">
                <h1 className="overflow-ellipsis whitespace-nowrap overflow-hidden w-full  text-lg font-bold">
                  {Jobs.title}
                </h1>
                <p className="overflow-ellipsis whitespace-nowrap overflow-hidden ">
                  {Jobs.discipstion}
                </p>
              </aside>
              <button className="btn1 m-5">Liên hệ : 0348216852</button>
            </Link>
          </article>
        ))}
      </nav>
      <aside></aside>
    </section>
  );
}

export default Servies;
