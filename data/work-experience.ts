import siteMetadata from "./siteMetadata";

export const workPositions = {
  react: {
    title: "React Engineer",
    src: siteMetadata.react,
  },
  reactMiddle: {
    title: "React Engineer Middle",
    src: siteMetadata.react,
  },
  reactSenior: {
    title: "React Engineer Senior",
    src: siteMetadata.react,
  },
  reactNative: {
    title: "React Native Engineer",
    src: siteMetadata.react,
  },
  reactNativeMiddle: {
    title: "React Native Engineer Middle",
    src: siteMetadata.react,
  },
  sharp: {
    title: "C# Engineer",
    src: siteMetadata.sharp,
  },
  asp: {
    title: "ASP NET Developer",
    src: siteMetadata.sharp,
  },
};

export const workExperience = {
  wisent: [
    {
      title: "Everact.io",
      src: siteMetadata.everact,
      description: "https://everact.io",
      position: workPositions.reactSenior,
    },
  ],
  dex: [
    {
      title: "DEX job",
      src: siteMetadata.dex,
      description: "https://job.dex-it.ru",
      position: workPositions.react,
    },
    {
      title: "Samocat Sharing",
      src: siteMetadata.samocat,
      position: workPositions.reactNative,
    },
    {
      title: "Luxxy",
      src: siteMetadata.luxxy,
      position: workPositions.reactNativeMiddle,
    },
    {
      title: "Nokia",
      src: siteMetadata.nokia,
      position: workPositions.reactMiddle,
    },
    {
      title: "PIK",
      src: siteMetadata.pik,
      position: workPositions.reactMiddle,
    },
  ],
  ihelp: [
    {
      title: "Corridor",
      src: siteMetadata.corridor,
      position: workPositions.react,
    },
    {
      title: "CRMWhatsApp",
      src: siteMetadata.crmWhatsApp,
      position: workPositions.asp,
    },
  ],
};
