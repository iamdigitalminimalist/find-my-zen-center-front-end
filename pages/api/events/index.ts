import type { NextApiRequest, NextApiResponse } from "next";
const { events } = require("./data.json");

type Data = {
  events: EventType[];
};

type Error = {
  error: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
) {
  if (req.method === "GET") {
    res.status(200).json({ events });
  } else {
    res.setHeader("Allow", ["Get"]);
    res.status(405).json({ error: `Method ${req.method} is not allowed` });
  }
}
