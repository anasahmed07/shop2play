import { NextResponse } from "next/server";
import RedeemCode from "@/db/models/redeemcode.model";
import connectTodb from "@/db/mongodb";

export async function GET(req) {
    try {
        const url = req.nextUrl.searchParams;
        const code = url.get('code');
        connectTodb();

        const redeemCode = await RedeemCode.findOneAndDelete({ code });

        if (!redeemCode) {
            return NextResponse.json({ message: "رمز الاسترداد غير صالح", success: false }, { status: 200 });
            // return NextResponse.json({ message: "Invalid Redeem Code", success: false }, { status: 200 });
        }

        const response = NextResponse.json({ message: 'تم حذف الرمز', success: true }, { status: 200 });
        // const response = NextResponse.json({ message: 'Code deleted', success: true }, { status: 200 });
        return response;
    } catch (error) {
        return NextResponse.json({ message: error.message, success: false }, { status: 500 });
    }
}
