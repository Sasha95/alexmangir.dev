import React from "public/assets/react.svg";
import Sharp from "public/assets/sharp.svg";
import Everact from "public/assets/everact.svg";
import Dex from "public/assets/dex.svg";
import Samocat from "public/assets/samocat.svg";
import Luxxy from "public/assets/luxxy.svg";
import Nokia from "public/assets/nokia.svg";
import Pik from "public/assets/pik.svg";
import Corridor from "public/assets/corridor.svg";
import Crm from "public/assets/crm.svg";

export const workPositions = {
  react: {
    title: "React Engineer",
    src: React,
  },
  reactMiddle: {
    title: "React Engineer Middle",
    src: React,
  },
  reactSenior: {
    title: "React Engineer Senior",
    src: React,
  },
  reactNative: {
    title: "React Native Engineer",
    src: React,
  },
  reactNativeMiddle: {
    title: "React Native Engineer Middle",
    src: React,
  },
  sharp: {
    title: "C# Engineer",
    src: Sharp,
  },
  asp: {
    title: "ASP NET Developer",
    src: Sharp,
  },
};

export const workExperience = {
  wisent: [
    {
      title: "Everact.io",
      src: Everact,
      description: "https://everact.io",
      position: workPositions.reactSenior,
    },
  ],
  dex: [
    {
      title: "DEX job",
      src: Dex,
      description: "https://job.dex-it.ru",
      position: workPositions.react,
    },
    {
      title: "Samocat Sharing",
      src: Samocat,
      position: workPositions.reactNative,
    },
    {
      title: "Luxxy",
      src: Luxxy,
      position: workPositions.reactNativeMiddle,
    },
    {
      title: "Nokia",
      src: Nokia,
      position: workPositions.reactMiddle,
    },
    {
      title: "PIK",
      src: Pik,
      position: workPositions.reactMiddle,
    },
  ],
  ihelp: [
    {
      title: "Corridor",
      src: Corridor,
      position: workPositions.react,
    },
    {
      title: "CRMWhatsApp",
      src: Crm,
      position: workPositions.asp,
    },
  ],
};
