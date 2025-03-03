"use client"
import { createuser } from "@/app/actions/user"
import { SocialMediaLoginButton } from "@/app/components/SocialMediaButton";
import { useState } from "react";
export default function signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    async function handleSingup() {
        try {
            const response = await createuser({ username, email, password });
            console.log("response = ", response)
        } catch (err: any) {
            setError(err.message);
        }
    }
    return (
        <>
            <div className=" flex flex-col items-center ">
                <div className="shadow-md m-4 p-5 mt-12 ">
                    <div className="font-semibold text-2xl pt-2 mx-2 w-full flex justify-center mb-2">Welcome to the world</div>
                    <SocialMediaLoginButton />
                    <div className="font-medium pt-2 mx-2 w-full flex justify-center mb-2">Please enter your credentials</div>
                    <div className="flex flex-col mt-4 space-y-3 w-96 ">
                        <input
                            type="text"
                            placeholder="Username"
                            className="border-black text-black  py-2 px-4 rounded-2xl"
                            onChange={(e) => {
                                setUsername(e.target.value)
                            }}
                        ></input>
                        <input
                            type="email"
                            placeholder="Email"
                            className="border-black text-black py-2 px-4 rounded-2xl"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        ></input>
                        <input
                            type="password"
                            placeholder="Password"
                            className="border-black text-black  py-2 px-4 rounded-2xl"
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                        ></input>
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                    <div className="mt-3">
                        <button
                            className="w-full p-1 text-md rounded-md cursor-pointer"
                            style={{ backgroundColor: "#46464f", color: "whitesmoke" }}
                            onClick={handleSingup}
                        >Create your Account</button>
                    </div>
                    <div className="flex space-x-1 mt-2">
                        <div>
                            <h3 className="text-1xl">Already have an Account ?</h3>
                        </div>
                        <div>
                            {/* <Link to="/login"> */}
                            <span className="text-blue-900">Login</span>
                            {/* </Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
