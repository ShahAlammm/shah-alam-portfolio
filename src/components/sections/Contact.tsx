"use client"
import emailjs from "@emailjs/browser";
import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
    FaPhoneAlt,
    FaMobile,
} from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import Link from "next/link";
import { useRef } from "react";
import SkillText from "../elements/SkillText";
import useAxios from "../hooks/useAxios";
import useSocial from "../hooks/useSocial";
import toast from "react-hot-toast";
import Image from "next/image";

const Contact = () => {

    const [socials] = useSocial()
    const { data } = useAxios()

    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) return;

        emailjs
            .sendForm(
                "service_qy37urq",
                "template_jgak3f8",
                form.current,
                "hYHFNWwDDEM1kwFWE"
            )
            .then(
                (result) => {
                    toast.success("Email Sent Successfully");
                },
                (error) => {
                    console.log(error.text);
                    toast.success("Error, Please try again later")
                }
            );
    };

    return (
        <div className="m-auto py-16"
        id="contact"
        >
            <SkillText IconText={"Contact Me If Needed"} />
            <div className="lg:flex gap-10 py-2 w-full">
                <div className="w-full">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="space-y-5">
                            <div className="form-control">
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    className="input input-bordered bg-[#0D0D21]"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    className="input input-bordered bg-[#0D0D21]"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter Your Email"
                                    className="input input-bordered bg-[#0D0D21]"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <textarea
                                    name="firstName"
                                    placeholder="Message"
                                    className="input input-bordered bg-[#0D0D21] h-24"
                                    required
                                ></textarea>
                            </div>
                            <div className="form-control">
                                <input
                                    type="submit"
                                    value={"Submit Message"}
                                    className="text-white font-bold cursor-pointer py-2 px-4 rounded border border-purple-700  hover:bg-purple-700"
                                    required
                                ></input>
                            </div>
                        </div>
                    </form>
                </div>
                <div
                    className="bg-[#0D0D21] p-5 rounded-md lg:w-2/5"
                >
                    <h2 className="text-2xl font-bold text-purple-800">Contact Me : </h2>
                    <p className="text-sm text-justify py-5">
                        {/* @ts-ignore */}
                        {data?.user?.about?.address}
                    </p>

                    <p className="flex items-center mt-8 text-sm hover:text-blue-700 hover:underline">
                        <span className="font-bold mr-2 text-2xl text-blue-700">
                            <MdMarkEmailRead></MdMarkEmailRead>{" "}
                        </span>{" "}
                        {/* @ts-ignore */}
                        {data?.user?.about?.contactEmail}

                    </p>
                    <p className="flex items-center py-3 text-sm hover:text-blue-700 hover:underline">
                        <span className="font-bold mr-2 text-2xl text-green-600">
                            <FaPhoneAlt></FaPhoneAlt>{" "}
                        </span>{" "}
                         {/* @ts-ignore */}
                         {data?.user?.about?.phoneNumber}
                    </p>

                    <div className="flex space-x-7 pt-10">
                        {socials?.map((social: any) => (<Link key={social._id} href={social.url} ><Image src={social.image.url} alt={social.platform} height={200} width={200} className='h-7 w-7 md:h-12 md:w-12 p-[2px] md:p-2 transform hover:scale-125 transition-transform duration-300' /></Link>))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
