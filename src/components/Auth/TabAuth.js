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
                  "text-base px-5 py-3 block leading-normal " +
                  (openTab === 1
                    ? "text-gray-600 bg-white border-b-2 shadow-xl border-" + color + "-600"
                    : "text-" + color + "-600 bg-gray-50")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
              >
                Users
             </p>
            </li>
            <li className="mr-2 last:mr-0 flex-auto text-center">
             <p
                className={
                  "text-base  px-5 py-3 block leading-normal " +
                  (openTab === 2
                    ? "text-gray-600 bg-white border-b-2 shadow-xl border-" + color + "-600"
                    : "text-" + color + "-600 bg-gray-50")
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
                  "text-base px-5 py-3 block leading-normal " +
                  (openTab === 3
                    ? "text-gray-600 bg-white border-b-2 shadow-xl border-" + color + "-600"
                    : "text-" + color + "-600 bg-gray-50")
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
            <li className="mr-2 last:mr-0 flex-auto text-center">
             <p
                className={
                  "text-base px-5 py-3 block leading-normal " +
                  (openTab === 4
                    ? "text-gray-600 bg-white border-b-2 shadow-xl border-" + color + "-600"
                    : "text-" + color + "-600 bg-gray-50")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
              >
               Vendors
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
                  <p>
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas.
                    <br />
                    <br /> Dramatically maintain clicks-and-mortar solutions
                    without functional solutions.
                  </p>
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