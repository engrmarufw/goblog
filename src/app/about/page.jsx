import Image from 'next/image';
import React from 'react';
const imageStyle = {
    borderRadius: '50%',
    border: '1px solid #fff',

}
const About = () => {
    return (
        <div>
            <div className="relative">
                <div className="h-[300px] relative overflow-hidde bg-white mt-0">
                    <Image src="/apps.jpg"
                        fill
                        sizes="(min-width: 808px) 50vw, 100vw"
                        style={{
                            objectFit: 'cover', // cover, contain, none
                        }}
                    />
                </div>
                <div className="inline-block bg-success p-2 text-white absolute bottom-5 left-5">
                    <h2 className="text-2xl font-bold">Digital Story Tellers</h2>
                    <h4 className="text-xl font-bold">Handcrafting award winning digital experiences</h4>
                </div>
            </div>
            <div className="flex justify-between gap-20 items-start	mt-5">
                <div className="a">
                    <h1 className="text-3xl font-bold">
                        Who are we?
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem recusandae similique delectus perferendis quaerat, illum placeat facilis, laboriosam repudiandae voluptas vel, quos totam autem assumenda. Expedita asperiores numquam eos ipsum.</p> <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem recusandae similique delectus perferendis quaerat, illum placeat facilis, laboriosam repudiandae voluptas vel, quos totam autem assumenda. Expedita asperiores numquam eos ipsum.</p> <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem recusandae similique delectus perferendis quaerat, illum placeat facilis, laboriosam repudiandae voluptas vel, quos totam autem assumenda. Expedita asperiores numquam eos ipsum.</p>
                </div>
                <div className="a">
                    <h1 className="text-3xl font-bold">
                        What We Do?
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nisi deserunt, illo voluptate explicabo adipisci atque officiis facilis minus earum esse autem quas omnis est sint consequuntur quam, magnam iusto.</p>
                    <ul className='list-disc my-5'>
                        <li>Lorem ipsum dolor sit </li>
                        <li> amet consectetur</li>
                        <li>Lorem ipsum dolor sit </li>
                    </ul>
                    <button className="btn btn-success">Contact</button>
                </div>
            </div>
        </div>
    );
};

export default About;