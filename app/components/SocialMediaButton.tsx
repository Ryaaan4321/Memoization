import { SiOnlyfans } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiAppleFill } from "react-icons/ri";

export function SocialMediaLoginButton() {
    return (
        <div>
            <div className="flex mt-2 mb-2 p-1 justify-center space-x-10 bg-gray-100 rounded-md" style={{ fontSize: "20px", backgroundColor: "#F8F8F8" }}>
                <div className="cursor-pointer"><FaGoogle /></div>
                <div className="cursor-pointer"><SiOnlyfans /></div>
                <div className="cursor-pointer"><FaGithub /></div>
                <div className="cursor-pointer"><TiSocialFacebook /></div>
                <div className="cursor-pointer"><FaSquareXTwitter /></div>
                <div className="cursor-pointer"><RiAppleFill /></div>
            </div>
        </div>
    );
}