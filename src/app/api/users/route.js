import { NextResponse } from "next/server"
import connect from "@/utils/db";
import User from "@/models/User";
export const GET = async (request) => {
    try {
        await connect();
        const users = await User.find();
        return new NextResponse(users, { status: 200 });

    } catch (error) {
        console.log(error);
        return new NextResponse("Database error", { status: 500 });
    }

}