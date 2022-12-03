import { WorkElement } from "./WorkElement";

type Props = {
  companyName: string;
  companySrc: string;
  companyDescription: string;

  functions: {
    title: string;
    src: string;
    description?: string;
  }[];

  projects: {
    title: string;
    src: string;
    description?: string;
  }[];
};
export const WorkItem = ({
  companyName,
  companySrc,
  companyDescription,
  functions,
  projects,
}: Props) => {
  return (
    <>
      <div className="flex items-center justify-around w-full">
        <WorkElement
          caption="The company"
          items={[
            {
              src: companySrc,
              title: companyName,
              description: companyDescription,
            },
          ]}
        />
        <WorkElement caption="The job title" items={functions} />
        <WorkElement caption="The project" items={projects} />
      </div>
    </>
  );
};
