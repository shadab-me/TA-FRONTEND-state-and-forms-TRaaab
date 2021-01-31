import React from "react";
import "../styles/main.css";
function Form() {
  return (
    <>
      <section className="flex-1 bg-yellow-200 flex flex-col items-center h-screen justify-around">
        <div className="flex flex-col">
          <label className="font-bold" htmlFor="text-input" id="text-input">
            Text
          </label>
          <input
            className="w-96 h-10 border-2 border-gray-200 "
            type="text"
            id="text-input"
            name="text-input"
          ></input>
        </div>
        <div className="flex flex-col">
          <label className="font-bold" htmlFor="date-input" id="date-input">
            Date
          </label>
          <input
            className="w-96 h-10 border-2 border-gray-200"
            type="date"
            id="date-input"
            name="date-input"
          ></input>
        </div>
        <div className="flex flex-col">
          <label className="font-bold" htmlFor="file-input" id="file-input">
            File
          </label>
          <div className="bg-white p-2">
            <input
              className="w-96 h-10 border-2 border-gray-200"
              type="file"
              id="file-input"
              name="file-input"
            ></input>
          </div>
        </div>
        <div className="flex flex-col">
          <label
            className="font-bold"
            htmlFor="read-only-input"
            id="read-only-input"
          >
            Read-only
          </label>
          <input
            className="w-96 h-10 border-2 border-gray-200"
            type="text"
            readOnly
            id="read-only-input"
            name="read-only-input"
          ></input>
        </div>
        <div className="flex flex-col">
          <label
            className="font-bold"
            htmlFor="disabled-input"
            id="disabled-input"
          >
            Disabled
          </label>
          <input
            className="w-96 h-10 border-2 border-gray-200"
            type="text"
            disabled
            id="disabled-input"
            name="disabled-input"
          ></input>
        </div>
        <div className="flex flex-col">
          <label
            className="font-bold"
            htmlFor="text-area-input"
            id="text-area-input"
          >
            Text-area
          </label>
          <textarea
            className="w-96 h-10 border-2 border-gray-200"
            type="text"
            id="text-area-input"
            name="text-area-input"
          ></textarea>
        </div>
        <div className="flex flex-col">
          <label
            className="font-bold"
            htmlFor="text-area-disabled-input"
            id="text-area-disabled-input"
          >
            Text-area
          </label>
          <textarea
            className="w-96 h-10 border-2 border-gray-200"
            type="text"
            disabled
            id="text-area-input"
            name="text-area-input"
          ></textarea>
        </div>
      </section>
    </>
  );
}

export default Form;
