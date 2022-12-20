import siteMetadata from "./siteMetadata";
import { workExperience } from "./work-experience";

export const portfolio = [
  {
    companyName: "Wisent Group",
    companyDescription: (
      <>
        Dec 2020 - present
        <br /> Chisinau, Moldova
      </>
    ),
    companySrc: siteMetadata.wisent,
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
    companySrc: siteMetadata.dex,
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
    companySrc: siteMetadata.ihelp,
    projects: workExperience.ihelp,
  },
];
