import { NextResponse } from "next/server";


export async function GET() {

    const exampleData = [
        {
            name:"tes",
            email:"tes@gmail.com",
            password:"testPassword"
        }
    ];
    
    return NextResponse.json({status:200,message:"Success", data: exampleData});
}