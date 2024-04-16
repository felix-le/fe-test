import React from "react";
import { HeartIcon } from "@heroicons/react/24/solid";

const LINKS = [
  {
    id: 2,
    title: "Github",
    icon: "",
    link: "https://github.com/felix-le/fe-test",
  },
  {
    id: 1,
    title: "LinkedIn",
    icon: "",
    link: "https://www.linkedin.com/in/felix-le/",
  },
  {
    id: 3,
    title: "Email",
    icon: "",
    link: "mailto:mc.vietanh@gmail.com",
  },
];

const index = () => {
  return (
    <>
      <section className=" bg-black">
        <div className="w-full">
          <div className="flex items-center flex-wrap justify-center min-h-[120px]">
            <div className="block hover:opacity-50">
              <a href="/">
                <img
                  className="w-[168px] h-[68px]  "
                  src="https://www.blazesoft.ca/wp-content/themes/blazesoft/images/logo.svg"
                  alt=""
                />
              </a>
            </div>
            <div className="ml-5 flex flex-col text-white">
              <h2 className="text-2xl font-bold mb-1 text-center lg:text-left mt-8 lg:mt-0">
                Book Store
              </h2>

              <p className="text-sm  text-center lg:text-left mt-3 lg:mt-0 mb-1 flex ">
                <HeartIcon className="w-4" />
                <HeartIcon className="w-4" />
                <HeartIcon className="w-4" />
                &nbsp; Where you can find your favorite books &nbsp;
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
                      rel="noreferrer"
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
