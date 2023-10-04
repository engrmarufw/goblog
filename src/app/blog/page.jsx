import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


async function getData() {
    const res = await fetch('http://localhost:3000/api/posts', { cache: 'no-store' })
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export const metadata = {
    title: 'GoBlog | Blogs',
    description: 'Latest blogs here',
  }


const Blog = async () => {
    const data = await getData()
    return (
        <div>
            {
                data.map(post => (
                    <Link key={post._id} href={`/blog/${post._id}`} className="flex mt-10 items-center gap-4">
                        <div>
                            <div className="w-[400px]">
                                <Image width={600} height={500} src={post.img} />
                            </div>
                        </div>
                        <div className="">
                            <h1 className="text-4xl font-bold">{post?.title}</h1>
                            <p className='my-5'>{post?.desc}</p>
                        </div>

                    </Link>
                ))
            }
        </div>
    );
};

export default Blog;