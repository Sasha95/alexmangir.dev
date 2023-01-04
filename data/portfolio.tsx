import { workExperience } from "./work-experience";

import IHelp from "../public/assets/ihelp.svg";
import Dex from "../public/assets/dex.svg";
import Wisent from "../public/assets/wisent.svg";

export const portfolio = [
  {
    companyName: "Wisent Group",
    companyDescription: (
      <>
        Dec 2020 - present
        <br /> Chisinau, Moldova
      </>
    ),
    companySrc: Wisent,
    projects: workExperience.wisent,
  },
  {
    companyName: "DexTechnology",
    companyDescription: (
      <>
        Dec 2017 - Apr 2019
        <br />
        Tiraspol, Moldova
      </>
    ),
    companySrc: Dex,
    projects: workExperience.dex,
  },
  {
    companyName: "IHelp",
    companyDescription: (
      <>
        Dec 2017 - Apr 2019
        <br /> Tiraspol, Moldova
      </>
    ),
    companySrc: IHelp,
    projects: workExperience.ihelp,
  },
];
