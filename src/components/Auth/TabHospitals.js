import React from "react";
import TestTable from "./TestTable";

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex pt-2 sm:px-0 px-4">
        <div className="w-full">
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
               Book tests
             </p>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 w-full mb-6 rounded">
            <div className="py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <TestTable/>
                </div>
            
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function TabsHospitals() {
  return (
    <>
      <Tabs color="blue" />;
    </>
  );
}