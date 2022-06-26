// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Rounding } from "../../models";

type Data = {
  roundings: Rounding[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    roundings: [
      {
        id: "1",
        when: "2022-06-26T07:12:29.393Z",
        where: "cc-1",
        photo: "https://dummyimage.com/600x400/000/fff",
        description: "한 판  칩시다",
        host: "host-1",
        team: "team-1",
        chatroom: "https://naver.com",
      },
    ],
  });
}
