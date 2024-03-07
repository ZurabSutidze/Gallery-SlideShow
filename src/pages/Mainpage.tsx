import { Link } from "react-router-dom";
import data from "../data.json";

const Main = () => {
  return (
    <>
      <div className="flex flex-col max-w-[1920px] m-auto w-[90%] mt-[80px]  gap-5 mb-10 xl:mt-[100px]  zuraba">
        {data.map((item, index) => (
          <div
            className={`flex relative   justify-center flex-col  items-center  ${item.name}`}
          >
            <Link state={item} to={`/info/${index + 1}`} className="relative ">
              <img
                className="hover:scale-110 hover:opacity-55 cursor-pointer "
                src={item.images.thumbnail}
                alt=""
              />

              <div className="absolute bottom-6 flex flex-col sitemf-start pl-7">
                <h2 className="text-white  pb-2 text-[24px] font-bold">
                  {item.name}
                </h2>
                <h2 className="text-white text-[13px] font-medium opacity-60">
                  {item.artist.name}
                </h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Main;
