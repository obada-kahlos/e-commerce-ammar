import { Outlet } from "react-router-dom";
import { SidebarWithContentSeparator } from "../components/navbar/navbar";
import { useState } from "react";

export const Root = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebarButtonData = () => {
    setShowSidebar((prev) => !prev);
  };

  return (
    <div>
      <div className="grid grid-cols-12 gap-x-4">
        <div className="xl:col-span-2 lg:col-span-3 pt-[10px] lg:relative absolute overflow-x-hidden overflow-y-auto">
          <div className={showSidebar ? "responsiveAside" : "aside"}>
            <SidebarWithContentSeparator />
          </div>
        </div>
        <div className="xl:col-span-10 lg:col-span-9 col-span-12 lg:w-full w-[90%] lg:mx-0 mx-auto px-4">
          <Outlet />
        </div>
      </div>
      {showSidebar && (
        <div
          onClick={toggleSidebarButtonData}
          className="fixed w-full h-screen top-0 left-0 bg-[rgba(187,187,187,0.3)] z-[999]"
        ></div>
      )}
      <div className="lg:hidden block fixed bottom-8 right-8">
        <button onClick={toggleSidebarButtonData}> Open </button>
      </div>
      <style>
        {`
                    body{
                        background-color : #f3f3f3;
                      }
                      aside{
                        height : calc(100vh - 73px);
                        margin-top : 73px;
                        box-shadow: 0 3px 3px rgba(99, 97, 97, 0.16);
                        border-top-right-radius : 10px;
                        z-index : 1004;
                      }
                      aside::-webkit-scrollbar {
                            display: none;
                      }
                      .main-section{
                        margin-top : 73px;
                        border-top-left-radius : 10px;
                        border-bottom-left-radius : 10px;
                        box-shadow: 0 3px 3px rgba(99, 97, 97, 0.16);
                      }
                      .navbar{
                        box-shadow: 0 3px 3px rgba(99, 97, 97, 0.16);
                      }
                      .aside{
                          border-radius: 10px;
                          z-index: 999999;
                          transition: 0.5s;
                      }
                      @media (max-width : 1024px){
                          .aside{
                              position: fixed;
                              margin-top: 0;
                              left: -200%;
                              top: 73px;
                              width: 300px;
                              height: 100vh;
                              z-index: 1002;
                              background-color: #fff;
                              border-radius: 0;
                          }
                      }
                      .responsiveAside{
                          transition: 0.5s;
                          border-radius: 10px;
                          z-index: 999999;
                          border-top-right-radius : 10px;
                      }
                      @media (max-width : 1024px){
                          .responsiveAside{
                              margin-top: 0;
                              position: fixed;
                              left: 0;
                              top: 0;
                              width: 300px;
                              height: 100%;
                              z-index: 9999;
                              background-color: #fff;
                              border-radius: 0;
                          }
                      }
					  ::-webkit-scrollbar {
						width: 20px;
					}
			
					::-webkit-scrollbar-track {
						background-color: transparent;
					}
			
					::-webkit-scrollbar-thumb {
						/* background-color: #d6dee1; */
						background-color: #a8bbbf90;
						border-radius: 20px;
						border: 6px solid transparent;
						background-clip: content-box;
					}
			
					::-webkit-scrollbar-thumb:hover {
						background-color: #a8bbbf;
					}
                    `}
      </style>
    </div>
  );
};
