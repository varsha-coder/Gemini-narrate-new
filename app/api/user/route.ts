import { NextResponse,NextRequest } from "next/server";

export function GET(){
    return NextResponse.json({
        email:"nvarsgfbfgg@gmail.com",
        name:"varsha"
    })
}
 export async function POST(req:NextRequest){
    const body=await req.json();
return  NextResponse.json({
    message:"You are signed up"
})
 }