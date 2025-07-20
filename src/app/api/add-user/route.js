import { NextResponse } from "next/server"
import User from "@/db/models/user.model"
import connectTodb from "@/db/mongodb"

export async function POST(req) {
    try {
        const { name, uid, game } = await req.json()
        await connectTodb()
        const isExist = await User.findOne({ uid: uid })
        if (isExist) {
            // return NextResponse.json({ "message": "User Exist with this Uid", "success": false }, { status: 201 })
            return NextResponse.json({ "message": "يوجد مستخدم بهذا المعرف (UID)", "success": false }, { status: 201 })
        }

        await User.create({
            name,
            uid,
            game
        })
        return NextResponse.json({ "message": "تم إضافة المستخدم!", "success": true }, { status: 201 })
        // return NextResponse.json({ "message": "User Added!", "success": true }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ "message": error.message, "success": false }, { status: 501 })
    }


}