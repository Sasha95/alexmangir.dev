import { Caption } from "@/components/Caption";
import { Card } from "@/components/Card";
import { CardPortfolio } from "@/components/CardPortfolio";
import siteMetadata from "@/data/siteMetadata";
import Image from "next/image";

export const Portfolio = () => {
  return (
    <div className="mt-40">
      <Caption title1={"My"} title2={"Portfolio"} />
      <div className="flex w-full justify-between	">
        <Card
          className={
            "bg-white shadow-3xl rounded-xl w-[346px] pl-4 flex flex-col items-center"
          }
        >
          <CardPortfolio
            alt="SendPay"
            image={siteMetadata.sendPay}
            bgColor={""}
            header={
              <div className="flex items-center font-semibold text-2xl text-cornflower mt-[19px] ml-4 mb-4">
                <Image
                  alt="icon"
                  src={siteMetadata.emojiOne}
                  width={51}
                  height={51}
                />
                <p className="ml-3.5">Sendpay</p>
              </div>
            }
          />
        </Card>
        <Card
          className={
            "bg-white shadow-3xl rounded-xl w-[346px] pl-4 flex flex-col items-center justify-end"
          }
        >
          <CardPortfolio
            alt="E-Commerce"
            bgColor={""}
            image={siteMetadata.eCommerce}
            header={
              <div className="flex items-center font-semibold text-2xl text-[#4581F6] mt-[26px] mb-4">
                <p className="ml-3.5">E-Commerce</p>
              </div>
            }
          />
        </Card>
        <Card
          className={
            "bg-white shadow-3xl rounded-xl w-[346px] pl-4 flex flex-col items-center  justify-end"
          }
        >
          <CardPortfolio
            bgColor={""}
            alt="BeatsLearning"
            image={siteMetadata.beatsLearning}
            header={
              <div className="flex items-center font-semibold text-2xl text-black mt-[26px] mb-4">
                <p className="ml-3.5">Beats Learning</p>
              </div>
            }
          />
        </Card>
      </div>
    </div>
  );
};
