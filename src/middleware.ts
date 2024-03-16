import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";



export function middleware(request: NextRequest){


    const isLogin = true;

   // return NextResponse.redirect(new URL ("/",request.url));
}

export const config = {
 matcher: ["/testhome", "/dretail"]
};



