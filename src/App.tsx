import "./App.css";
import FeaturedSlider from "./components/FeaturedSlider";
import NewsSlider from "./components/NewsSlider";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className=" h-[100vh]  bg-gray-50">
        <div className="">
          <div className="flex">
            <Sidebar />
            <div className=" flex-1 h-[100vh] overflow-y-scroll overflow-hidden">
              <div className="hero h-[72vh] rounded-b-xl bg-cover"></div>
              <div className=" h-[120px] mb-8 rounded-md flex my-4 ms-4">
                <div className="hero2 w-[42%] bg-cover rounded-s-md"></div>
                <div className="flex-1 bg-red-800 flex justify-between items-center">
                  <div className="flex flex-col h-full justify-between py-4 px-4">
                    <div className=" font-medium">
                      <h3>Ufotable spotlight</h3>
                      <p className=" text-xs opacity-40">
                        Todays highlight of ufotable production
                      </p>
                    </div>
                    <div>
                      <p className=" text-xs">Click to see</p>
                    </div>
                  </div>
                  <div className="hero2-styled-text pe-4">
                    <p className="text-3xl pb-2">#046</p>
                  </div>
                </div>
              </div>
              {/* Featured section */}
              <div className="featured pb-10 ps-8">
                <div className="text-black mb-4 flex gap-8 items-center">
                  <h2 className=" text-3xl font-medium">Featured</h2>
                  <p className="tsxt-xs text-gray-500">pick up</p>
                </div>
                <div className=" text-black ">
                  <FeaturedSlider />
                </div>
              </div>
              {/*  News Section */}
              <div className="featured pb-10 ps-8">
                <div className="text-black mb-4 flex gap-8 items-center">
                  <h2 className=" text-3xl font-medium">News</h2>
                  <p className="tsxt-xs text-gray-500">Latest Information</p>
                </div>
                <div className=" text-black ">
                  <NewsSlider />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
