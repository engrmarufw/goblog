import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';
async function getData(id) {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`, { cache: 'no-store' })
    if (!res.ok) {
        return notFound()
    }

    return res.json()
}
export async function generateMetadata({params}) {
    const post = await getData(params.id)
    return {
        title:post.title,
        description: post.desc
    }
}
const BlogPost = async ({ params }) => {
    const data = await getData(params.id)
    console.log(data);
    return (
        <div>
            <div className="flex mt-10 items-center gap-4">
                <div className="flex-1">
                    <h1 className="text-4xl font-bold">{data?.title} </h1>
                    <p className='my-5'>{data?.desc}</p>
                    <div className="flex items-center">
                        <div className="avatar">
                            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <div className="relative h-96 flex-1">
                                    <Image fill={true} src={data?.img} />
                                </div>
                            </div>
                        </div>
                        <p className='ms-3'>{data?.username}</p>
                    </div>
                </div>
                <div className="relative h-96 flex-1">
                    <Image fill={true} src={data?.img} />
                </div>
            </div>
            <p className="mt-10">
                {data?.contents}
            </p>
        </div>
    );
};

export default BlogPost;