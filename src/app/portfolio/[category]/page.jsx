import Image from 'next/image';
import React from 'react';
import { items } from './data';
import { notFound } from 'next/navigation';

const getData = (cat) => {
    const data = items[cat]
    if (data) {
        return data
    }
    return notFound()
}

const Category = ({ params }) => {
    const data = getData(params.category)
    return (
        <div>
            <h1 className="text-3xl font-bold">{params.category}</h1>
            {
                data.map(item=>(
                    <div key={item.id} className="flex odd:flex-row-reverse mt-10 items-center gap-4">
                    <div className="flex-1">
                        <h1 className="text-4xl font-bold">{item.title}</h1>
                        <p className='my-5'>{item.desc}</p>
                        <button className="btn btn-success">See More</button>
                    </div>
                    <div className="relative h-96 flex-1">
                        <Image fill={true} src={item.image} />
                    </div>
                </div>
                ))
            }
         
        </div>
    );
};

export default Category;