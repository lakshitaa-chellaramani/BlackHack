import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="bg-[#020017] py-6 sm:py-8 lg:py-12">
        <div className="mx-4 md:mx-8 lg:mx-36 max-w-screen-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
          <div className="flex flex-col overflow-hidden rounded-xl bg-black">
            <div
              
              className="group relative block h-32 overflow-hidden bg-black md:h-48"
            >
              <img
                src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600"
                loading="lazy"
                alt="Photo by Magicle"
                className="mx-auto h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 rounded-t-lg"
              />
            </div>

            <div className="flex flex-1 flex-col p-4 sm:p-6 bg-black">
              <h2 className="mb-2 text-lg font-semibold text-white">
                <div
                  
                  className="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                >
                  COURSES
                </div>
              </h2>

              <p className="text-white">
                This is a section of some simple filler text
              </p>
            </div>
          </div>
          <div className="flex justify-center">
          <button className="relative overflow-hidden bg-black w-72 rounded-xl text-lg text-white mt-6 py-3">
  View more
  <div
    className="absolute -right-3 -bottom-7 h-14 w-14 overflow-hidden"
  >
    <div className="bg-white h-full w-full rounded-full"></div>
  </div>
</button>

        
          </div>
        </div>
            <div>
              <div className="flex flex-col overflow-hidden rounded-xl bg-black">
                <div
                 
                  className="group relative block h-32 overflow-hidden bg-black md:h-48"
                >
                  <img
                    src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600"
                    loading="lazy"
                    alt="Photo by Magicle"
                    className="mx-auto h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 rounded-t-lg"
                  />
                </div>

                <div className="flex flex-1 flex-col p-4 sm:p-6 bg-black">
                  <h2 className="mb-2 text-lg font-semibold text-white">
                    <div
                     
                      className="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                    >
                      COURSES
                    </div>
                  </h2>

                  <p className="text-white">
                    This is a section of some simple filler text
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                 <button className="relative overflow-hidden bg-black w-72 rounded-xl text-lg text-white mt-6 py-3">
  View more
  <div
    className="absolute -right-3 -bottom-7 h-14 w-14 overflow-hidden"
  >
    <div className="bg-white h-full w-full rounded-full"></div>
  </div>
</button>
              </div>
            </div>
            <div>
              <div className="flex flex-col overflow-hidden rounded-xl bg-black">
                <div
                 
                  className="group relative block h-32 overflow-hidden bg-black md:h-48"
                >
                  <img
                    src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600"
                    loading="lazy"
                    alt="Photo by Magicle"
                    className="mx-auto h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 rounded-t-lg"
                  />
                </div>

                <div className="flex flex-1 flex-col p-4 sm:p-6 bg-black">
                  <h2 className="mb-2 text-lg font-semibold text-white">
                    <div
                      
                      className="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                    >
                      COURSES
                    </div>
                  </h2>

                  <p className="text-white">
                    This is a section of some simple filler text
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                 <button className="relative overflow-hidden bg-black w-72 rounded-xl text-lg text-white mt-6 py-3">
  View more
  <div
    className="absolute -right-3 -bottom-7 h-14 w-14 overflow-hidden"
  >
    <div className="bg-white h-full w-full rounded-full"></div>
  </div>
</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
