"use client";

import Card from "@/components/Card";
import { BiAbacus, BiDownArrow, BiUpArrow, BiUser } from "react-icons/bi";

export default function Home() {
  return (
    <div className="flex w-full h-full ">
      <div className="flex flex-col overflow-y-auto gap-y-3 p-6">
        <div className="bg-white rounded-md w-[1100px] p-1 items-center">
          <div>
            <div className="flex items-center">
              <BiUser className="mr-2 text-green-500 text-lg" />
              <span
                className="cursor-pointer text-green-500"
                onClick={() => alert("Consultants selected")}
              >
                Consultants
              </span>
            </div>
            <div className="bottom-0 left-0 w-[120px] h-0.5 bg-green-500 transition-transform transform-gpu origin-bottom" />
          </div>
        </div>

        <div className="bg-white gap-3  h-[50px] rounded-md w-[1100px] items-center flex">
          <div className="w-[70px] text-white h-full rounded-l-lg bg-green-500 flex items-center justify-center">
            Filters
          </div>

          <div className="relative flex   justify-items-center ">
            <select className="p-3 bg-white  text-black rounded-3xl h-12 w-full">
              <option value="" disabled selected>
                Select range
              </option>
              <option value="patients">Patients</option>
              <option value="doctors">Doctors</option>
            </select>

            <div
              className="absolute inset-y-0 right-0 flex items-center  pointer-events-none"
              style={{ color: "#fff" }}
            ></div>
          </div>

          <div className="flex items-center space-x-4">
            <label className="inline-flex items-center">
              <input type="radio" value="Summary" name="option" />
              <span className="ml-2">Summary</span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" value="Branch" name="option" />
              <span className="ml-2">Branch</span>
            </label>
          </div>
        </div>

        <div className="flex justify-between items-center ">
          <Card
            title="Consultant Count"
            today={90}
            period={900}
            icon={<BiUser />}
          />
          <Card
            title="Diet Plans"
            today={90}
            period={900}
            icon={<BiAbacus />}
          />
          <Card
            title="Consultations"
            today={90}
            period={80}
            icon={<BiUser />}
          />
          <Card title="Lab" today={901} period={90} icon={<BiUser />} />
        </div>
        <div className="flex flex-col p-4 bg-white rounded-lg">
          <div className="flex items-center justify-between ">
            <h2 className="text-xl font-semibold">Consultants</h2>
            <div className="flex items-center space-x-2">
              <BiUpArrow />
              <BiDownArrow />
            </div>
          </div>
          <table className="w-full mt-4 border-collapse border border-gray-200">
            <thead>
              <tr className="bg-white">
                <th className="border border-gray-200 p-2">NAME</th>
                <th className="border border-gray-200 p-2">PATIENT COUNT</th>
                <th className="border border-gray-200 p-2">LAB</th>
                <th className="border border-gray-200 p-2">DIET PLANS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 p-2">John Doe</td>
                <td className="border border-gray-200 p-2">25</td>
                <td className="border border-gray-200 p-2">Yes</td>
                <td className="border border-gray-200 p-2">3</td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-2">Jane Doe</td>
                <td className="border border-gray-200 p-2">30</td>
                <td className="border border-gray-200 p-2">No</td>
                <td className="border border-gray-200 p-2">2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
