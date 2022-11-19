import Image from "next/image";

type Props = {
  companyName: string;
  companySrc: string;
  companyDescription: string;
  functionName: string;
  functionSrc: string;
  projectName: string;
  projectSrc: string;
  projectDescription?: string;
};
export const WorkItem = ({
  companyName,
  companySrc,
  companyDescription,
  functionName,
  functionSrc,
  projectName,
  projectSrc,
  projectDescription,
}: Props) => {
  return (
    <div className="shadow-3xl rounded-xl flex justify-center">
      <div className="flex items-center justify-around py-14 w-full">
        <div className="max-w-[232px] flex flex-col justify-between h-full">
          <h3 className="text-3xl leading-10 tracking-normal font-medium text-center mb-8">
            The company
          </h3>
          <Image
            alt={companyName}
            src={companySrc}
            fill
            className="relative max-w-[213px] max-h-[221px]"
          />
          <div className="mt-7">
            <p className="text-2xl leading-9 text-center">{companyName}</p>
            <p className="text-lg leading-5 mt-2.5 text-center font-[Inter]">
              {companyDescription}
            </p>
          </div>
        </div>
        <div className="max-w-[232px] flex flex-col justify-between h-full">
          <h3 className="text-3xl leading-10 tracking-normal font-medium text-center mb-8">
            The job title
          </h3>
          <Image
            alt={functionName}
            src={functionSrc}
            fill
            className="relative max-w-[232px] max-h-[232px]"
          />
          <p className="text-2xl leading-9 text-center">{functionName}</p>
        </div>
        <div className="max-w-[232px] flex flex-col justify-between h-full">
          <h3 className="text-3xl leading-10 tracking-normal font-medium text-center mb-8">
            The project
          </h3>
          <Image
            alt={projectName}
            src={projectSrc}
            fill
            className="relative max-w-[179px] max-h-[179px] h-full"
          />
          <div>
            <p className="text-2xl leading-9 text-center">{projectName}</p>
            {projectDescription && (
              <p className="text-lg leading-5 mt-2.5 text-center font-[Inter]">
                {projectDescription}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
