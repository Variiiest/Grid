import React from "react";
import Login from "./Login";

const TabsAuth = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap sm:pt-0 pt-16">
        <div className="w-full px-5">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
                
            <li className="mr-2 last:mr-0 flex-auto text-center">
             <p
                className={
                  "text-basepx-5 py-2 block leading-normal " +
                  (openTab === 1
                    ? "text-gray-600 bg-green-100 rounded-full shadow border-" + color + "-600"
                    : "text-" + color + "-600 ")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
              >
                Patient
             </p>
            </li>
            <li className="mr-2 last:mr-0 flex-auto text-center">
             <p
                className={
                  "text-base px-5 py-2 block leading-normal " +
                  (openTab === 2
                    ? "text-gray-600 bg-green-100 rounded-full shadow border-" + color + "-600"
                    : "text-" + color + "-600 ")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
               
              >
              Hospitals
             </p>
            </li>
            <li className="mr-2 last:mr-0 flex-auto text-center">
             <p
                className={
                  "text-basepx-5 py-2 block leading-normal " +
                  (openTab === 3
                    ? "text-gray-600 bg-green-100 rounded-full shadow border-" + color + "-600"
                    : "text-" + color + "-600 ")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
              >
               Doctors
             </p>
            </li>
           
          </ul>
          <div className="relative flex flex-col min-w-0 w-full mb-6 rounded">
            <div className="py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <Login/>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                 <Login/>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <Login/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function TabsAuthen() {
  return (
    <>
      <TabsAuth color="blue" />;
    </>
  );
}