import { NextResponse } from "next/server"
import connect from "@/utils/db";
import Post from "@/models/Post";
export const GET = async (reques, { params }) => {
    const { id } = params;
    try {
        await connect();
        const post = await Post.findById(id);
        return new NextResponse(JSON.stringify(post), { status: 200 });

    } catch (error) {
        console.log(error);
        return new NextResponse("Database error", { status: 500 });
    }

}