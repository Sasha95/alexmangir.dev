import { NextApiRequest, NextApiResponse } from "next";
import { StaticImageData } from "next/image";
import additional_1 from "../../public/img/additional_1.png";
import additional_2 from "../../public/img/additional_2.png";
import additional_3 from "../../public/img/additional_3.png";

interface AdditionalType {
  imgSrc: StaticImageData;
  title: string;
  skills: string;
}

const additionalCards: AdditionalType[] = [
  {
    imgSrc: additional_1,
    title: "Front-End Developer",
    skills: "(Sass, Bootstrap, Tailwind)",
  },
  {
    imgSrc: additional_2,
    title: "Back-End Developer",
    skills: "(NodeJS, Laravel, Codeigniter)",
  },
  {
    imgSrc: additional_3,
    title: "UI/UX Designer",
    skills: "(Figma, Zeplin, Adobe XD)",
  },
];

export default function getAdditionalCards(
  req: NextApiRequest,
  res: NextApiResponse<AdditionalType[]>
) {
  console.log(req);
  console.log(res);
  res.status(200).json(additionalCards);
}
