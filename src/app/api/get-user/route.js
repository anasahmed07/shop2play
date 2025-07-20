import { NextResponse } from "next/server";
import User from "@/db/models/user.model";
import connectTodb from "@/db/mongodb";

export async function GET(req) {
    try {
        const url = req.nextUrl.searchParams
        const uid = url.get('uid')
        const game = url.get('game')
        connectTodb()

        const user = await User.findOne({ uid: uid, game: game })

        if (!user) {
            // return NextResponse.json({ "message": "Invalid Player Id", "success": false }, { status: 200 });
            return NextResponse.json({ "message": "معرف اللاعب غير صالح", "success": false }, { status: 200 });
        }



        return NextResponse.json({ "message": user, "success": true }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ "message": error.message, "success": false }, { status: 500 });
    }
}
