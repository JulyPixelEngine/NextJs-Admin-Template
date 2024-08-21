// import NextAuth from "next-auth";

// import { routes } from "@/routes";
// import authConfig from "./auth.config";

// const { auth: withAuthMiddleware } = NextAuth(authConfig);

// export default withAuthMiddleware((req) => {
//   console.log('middleware')
//   const isLoggedIn = !!req.auth;
//   const { nextUrl } = req;
//   // console.log({nextUrl})

//   const isApiAuthRoute = nextUrl.pathname.startsWith(routes.apiAuthPrefix);
//   const isAuthRoute = routes.auth.includes(nextUrl.pathname);
//   const isPublicRoute = routes.public.includes(nextUrl.pathname);
//   const defaultUrl = new URL(routes.defaultLoginRedirect, nextUrl);

//   if (isApiAuthRoute) {
//     return undefined;
//   }

//   if (isAuthRoute) {
//     if (isLoggedIn) {
//       return Response.redirect(defaultUrl);
//     }
//     return undefined;
//   }

//   if (!isPublicRoute && !isLoggedIn) {
//     let callbackUrl = nextUrl.pathname;
//     if (nextUrl.search) callbackUrl += nextUrl.search;

//     const encodedCallbackUrl = encodeURIComponent(callbackUrl);
//     return Response.redirect(
//       new URL(`/signin?callbackUrl=${encodedCallbackUrl}`, nextUrl)
//     );
//   }

//   return undefined;
// });

// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// };


import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  // 토큰을 가져옵니다. 사용자가 로그인하지 않은 경우 null을 반환합니다.
  const token = await getToken({ req });

  // 토큰이 없는 경우 로그인 페이지로 리디렉션합니다.
  if (!token) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  // 요청이 정상적인 경우 다음 미들웨어 또는 페이지로 이동합니다.
  return NextResponse.next();
}

// matcher: 보호할 경로 설정 (예: /dashboard 경로와 모든 하위 경로)
export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*"],
};