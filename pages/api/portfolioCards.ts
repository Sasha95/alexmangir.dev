import { NextApiRequest, NextApiResponse } from "next";
import { StaticImageData } from "next/image";
import portfolio_1 from "../../public/img/portfolio_1.png";
import portfolio_2 from "../../public/img/portfolio_2.png";
import portfolio_3 from "../../public/img/portfolio_3.png";

interface PortfolioType {
  imgSrc: StaticImageData;
  title: string;
}

export const portfolioCards: PortfolioType[] = [
  {
    imgSrc: portfolio_1,
    title: "Sendpay",
  },
  {
    imgSrc: portfolio_2,
    title: "E- Commerce",
  },
  {
    imgSrc: portfolio_3,
    title: "E- Commerce",
  },
];

export default function getPortfolioCards(
  req: NextApiRequest,
  res: NextApiResponse<PortfolioType[]>
) {
  console.log(req);
  console.log(res);
  res.status(200).json(portfolioCards);
}
