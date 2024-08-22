import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // res가 정의되어 있는지 확인합니다.
  if (!res) {
    console.error("Response object is undefined");
    return;
  }

  // res.status를 사용하여 응답 상태를 설정합니다.
  res.status(200).json({ message: "Hello, world!" });
}
