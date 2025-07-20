import { NextResponse } from "next/server"
import RedeemCode from "@/db/models/redeemcode.model"
import connectTodb from "@/db/mongodb"

export async function POST(req) {
    try {
        const { code, prize, cost, game } = await req.json()
        await connectTodb()
        const isExist = await RedeemCode.findOne({ code: code })
        if (isExist) {
            // return NextResponse.json({ "message": "code Already Exist", "success": false }, { status: 201 })
            return NextResponse.json({ "message": "الرمز موجود بالفعل", "success": false }, { status: 201 })
        }

        await RedeemCode.create({
            code, prize, cost, game
        })
        return NextResponse.json({ "message": "تم إضافة الرمز!", "success": true }, { status: 201 })
        // return NextResponse.json({ "message": "Code Added!", "success": true }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ "message": error.message, "success": false }, { status: 501 })
    }


}
