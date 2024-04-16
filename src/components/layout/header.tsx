import React from "react";
import { HeartIcon } from "@heroicons/react/24/solid";

const LINKS = [
  {
    id: 1,
    title: "LinkedIn",
    icon: "",
    link: "https://www.linkedin.com/in/felix-le/",
  },
  {
    id: 2,
    title: "Github",
    icon: "",
    link: "https://github.com/felix-le?tab=overview&from=2020-12-01&to=2020-12-31",
  },
  {
    id: 3,
    title: "Email",
    icon: "",
    link: "mailto:mc.vietanh@gmail.com",
  },
  {
    id: 5,
    title: "Resume",
    icon: "",
    link: "https://drive.google.com/file/d/1aAxJ-K2SPUz4FiEI2SFTmTvjE-W8eP2s/view?usp=sharing",
  },
  {
    id: 6,
    title: "Address",
    icon: "",
    link: "https://maps.app.goo.gl/9emuhkhXEkGBvUni9",
  },
];

const index = () => {
  return (
    <>
      <section className="  bg-white">
        <div className="w-full">
          <div className="flex items-center flex-wrap justify-center">
            <div className="block hover:opacity-50">
              <img
                className="w-[168px] h-[168px] rounded-[50%]"
                src="https://flowercompany.ca/cdn/shop/files/Rectangle_105_1.jpg?v=1678091725"
                alt=""
              />
            </div>
            <div className="ml-5 flex flex-col">
              <h2 className="text-2xl font-bold text-primary mb-1 text-center lg:text-left mt-8 lg:mt-0">
                Felix Le
              </h2>
              <p className="text-center lg:text-left mt-3 lg:mt-0 mb-1 ">
                Full Stack Developer with{" "}
                <span className="text-brand-react"> React </span>,
                <span className="text-brand-typescript"> TypeScript </span>,
                <span className="text-brand-next"> NextJS </span>,
                <span className="text-brand-node"> NodeJS </span>,
                <span className="text-brand-expressjs"> ExpressJS</span>
              </p>
              <p className="text-sm text-primary text-center lg:text-left mt-3 lg:mt-0 mb-1 flex ">
                <HeartIcon className="w-4" />
                <HeartIcon className="w-4" />
                <HeartIcon className="w-4" />
                &nbsp;Professional, Hard Working, Friendly, Innovative,
                Adaptable.&nbsp;
                <HeartIcon className="w-4" />
                <HeartIcon className="w-4" />
                <HeartIcon className="w-4" />
              </p>
              <ul className="flex p-0 m-0 mt-3 lg:mt-2 lg:justify-start justify-center flex-wrap text-center">
                {LINKS.map((link) => (
                  <li
                    key={link.id}
                    className="first:ml-0 ml-10  text-center lg:text-left "
                  >
                    <a
                      target="_blank"
                      href={link.link}
                      className="text-base text-blue font-medium hover:opacity-50 underline "
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
