import Image from 'next/image';
import React from 'react';
export const metadata = {
    title: 'GoBlog | Contact',
    description: 'Contact info',
  }
const Contact = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center mt-5">
                Let's Keep In Touch
            </h1>
            <div className="hero min-h-screen ">
                <div className="w-full flex items-center justify-between ">

                    <div className="">
                        <div className="">
                            <Image src="/contact.png"
                                width={500}
                                height={400}
                            />
                        </div>
                    </div>
                    <div className=" card w-[30rem]  shadow-2xl ">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Messege</span>
                                </label>
                                <textarea rows={8} className="textarea textarea-bordered w-full" ></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;