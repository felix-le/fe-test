import React from "react";

interface IContentBox {
  children?: React.ReactNode;
}

const ContentBox = ({ children }: IContentBox) => {
  return (
    <div className="container m-auto h-full">
      <div className=" w-full bg-[#13214A13] h-full relative py-8">
        <div className="h-full transition-all  duration-75 ease-out px-8 py-0  overflow-auto flex flex-col bg-opacity-8 rounded-md">
          {children}
        </div>
        {/* <div className="h-[80px] relative bottom-0">&nbsp;</div> */}
      </div>
    </div>
  );
};

export default ContentBox;
