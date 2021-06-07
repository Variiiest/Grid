import React from "react";
import ListCard from "../Cards/ListCard";

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap p-2">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
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
                Symptoms
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
              Precautions
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
          </ul>
          <div className="relative flex flex-col min-w-0 bg-white w-full mb-6 shadow-md rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <ListCard/>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                 <ListCard/>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                 <ListCard/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function TabsRender() {
  return (
    <>
      <Tabs color="blue" />;
    </>
  );
}