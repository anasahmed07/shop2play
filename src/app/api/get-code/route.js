import { NextResponse } from "next/server";
import RedeemCode from "@/db/models/redeemcode.model";
import connectTodb from "@/db/mongodb";
export async function GET(req) {
    try {
        const url = req.nextUrl.searchParams;
        const uid = url.get('uid');
        const code = url.get('code');
        const game = url.get('game');
        connectTodb();
        console.log(uid, code, game);

        const redeemCode = await RedeemCode.findOne({ code, game });

        if (!redeemCode) {
            // return NextResponse.json({ message: "Invalid Redeem Code", success: false }, { status: 200 });
            return NextResponse.json({ message: "رمز الاسترداد غير صالح", success: false }, { status: 200 });
        }

        const response = NextResponse.json({ message: redeemCode, success: true }, { status: 200 });
        return response;
    } catch (error) {
        return NextResponse.json({ message: error.message, success: false }, { status: 500 });
    }
}
