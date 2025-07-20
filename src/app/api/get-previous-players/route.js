import { NextResponse } from "next/server";


export async function GET(req) {
    try {
        const response = NextResponse.json({ message: redeemCode, success: true }, { status: 200 });
        response.cookies.set('player', uid);
        return response;
    } catch (error) {
        return NextResponse.json({ message: error.message, success: false }, { status: 500 });
    }
}





