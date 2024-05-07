import Link from "next/link";

const Service = ({
  href,
  index,
  title,
  number,
  sub1,
  sub2,
  sub3,
}: {
  href: string;
  index: number;
  title: string;
  number: string;
  sub1: string;
  sub2: string;
  sub3: string;
}) => {
  return (
    <div className="project transition-all ease-in w-full group">
      <Link className="flex w-full" href={href}>
        <div className="w-full flex flex-col">
          <div className="flex flex-row w-full justify-between items-start">
            <div className="flex flex-row space-x-5 md:space-x-20">
              <h4
                id="sub"
                className="text-white/60 font-inter font-normal md:-mt-4"
              >
                {number}
              </h4>
              <div className="flex flex-col items-start text-start md:mb-5">
                <h2 className=" font-epilogue font-medium text-4xl md:text-[80px]">
                  {title}
                </h2>
              </div>
            </div>
          </div>

          <div className=" hidden md:block md:px-28 md:-mt-0">
            <div className="flex flex-row items-center gap-10 w-full">
              <div
                className="flex flex-row items-start md:items-center gap-4"
                id="sub"
              >
                <p className=" font-archivo font-normal text-start">{sub1}</p>
              </div>
              <div className="flex flex-row items-center gap-4" id="sub">
                <div className="h-4 w-4 aspect-square rounded-full bg-white" />
                <p className=" font-archivo font-normal text-start">{sub2}</p>
              </div>
              <div className="flex flex-row items-center gap-4" id="sub">
                <div className="h-4 w-4 aspect-square rounded-full bg-white" />
                <p className=" font-archivo font-normal text-start">{sub3}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Service;
