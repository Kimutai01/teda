import React from "react";

const Contact = () => {
  return (
    <div className="max-w-[1240] m-auto p-4 h-screen">
      <h1 className="text-2xl font-bold text-center p-4">Get in touch</h1>
      <form className="max-w-[600px] m-auto">
        <div className="grid grid-cols-2 gap-2">
          <input
            type="text"
            placeholder="Name"
            className="border shadow-lg p-3"
          />
          <input
            type="email"
            placeholder="Email"
            className="border shadow-lg p-3"
          />
        </div>
        <input
          type="text"
          placeholder="Subject"
          className="border shadow-lg p-3 w-full my-4"
        ></input>
        <textarea
          cols="30"
          rows="10"
          placeholder="Message"
          className="border shadow-lg p-3 w-full"
        />
        <button type="submit" className="border shadow-lg p-3 w-full mt-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
