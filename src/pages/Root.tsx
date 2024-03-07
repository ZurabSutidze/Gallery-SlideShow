import { Link, Outlet } from "react-router-dom";
const Root = () => {
  return (
    <>
      <header className="mt-7 after:border-2 after:bg-black  after:w-[100px]">
        <div className="flex  justify-between items-center max-w-[1920px] w-[90%] m-auto border-b-2 py-3">
          <Link to={"/"}>
            <img
              className="cursor-pointer"
              src="/assets/galleria..svg"
              alt=""
            />
          </Link>
          <h3 className="text-[#7D7D7D] text-[9px] font-bold tracking-[2px] xl:text-[12px] cursor-pointer">
            Start SlideShow
          </h3>
        </div>
        <Outlet />
      </header>
    </>
  );
};

export default Root;
