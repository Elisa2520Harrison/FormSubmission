import { useState } from "react";

export default function FormView() {

    const [name, setName] = useState("");
    


    const handleSubmit = (e) => {
        e.preventDefault();

        if (name.trim() === "") {
            alert("Name is required!");
        } else {
            console.log("Form submitted");
            alert("Form submitted successfully!");
        }
    };

    return (
        <div className=" flex flex-col items-center">
            <h1 className="text-blue-600 font-medium text-5xl mb-15 mt-15">Form View</h1>

            <form onSubmit={handleSubmit} className="flex flex-col">
                <label className="text-lg items-start gap-2 
            font-normal" htmlFor="Name">Full Name</label>

                <input
                    type="text"
                    id="Name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border border-gray-400 rounded-md w-96 px-3 py-2
                   flex focus:outline-none " />

                <label className="text-lg items-start mt-4 
                font-normal" htmlFor="Subject">Subject</label>

                <input
                    type="text"
                    id="Subject"
                    placeholder="What is this regarding?"
                    className="border border-gray-400 rounded-md w-96 px-3 py-2 mb-4
                   flex focus:outline-none " />

                <label className="text-lg items-start mt-4 font-normal"
                    htmlFor="Message">Message</label>

                <textarea
                    type="text"
                    id="Message"
                    placeholder="Type your message here..."
                    className="border border-gray-400 rounded-md mb-4 w-96 px-3 py-3 h-40 
                 resize-none focus:outline-none" />


                <button
                    type="submit"
                    className="bg-blue-600 text-white rounded-md py-2 mt-3 cursor-pointer
                      active:scale-95
                 active:bg-blue-800 transition">
                    Submit
                </button>
            </form>
        </div>
    );
}