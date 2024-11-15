import React, { createContext, PropsWithChildren, useContext } from "react";
type Avatar = {
  photo: string;
  name: string;
  description: string;
};

type Header = {
  avatar: Avatar;
  introduction: string;
  description: string;
};

type HeaderContext = {
  header: Header;
};

const HeaderContext = createContext<HeaderContext | undefined>(undefined);

const useHeaderContext = () => {
  const context = useContext(HeaderContext);

  if (!context)
    throw new Error("Header Context must be used in Header Provider");

  return context;
};

type HeaderProps = PropsWithChildren & {
  header: Header;
};

export default function Header({ header, children }: HeaderProps) {
  return (
    <HeaderContext.Provider value={{ header }}>
      <header className="flex w-full max-w-[60rem] flex-col gap-[2rem] rounded-[.4rem] p-[1.2rem] md:p-[2.4rem]">
        {children}
      </header>
    </HeaderContext.Provider>
  );
}

Header.Avatar = function () {
  const { header } = useHeaderContext();
  const { avatar } = header;

  return (
    <div className="flex items-center gap-[1.6rem]">
      <div className="relative h-[6.4rem] w-[6.4rem] flex-shrink-0 overflow-hidden rounded-full">
        <div className="absolute inset-0">
          <img className="object-cover" src={avatar.photo} />
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="text-[1.6rem] text-white">{avatar.name}</h1>
        <p className="text-[1.4rem] text-gray-500">{avatar.description}</p>
      </div>
    </div>
  );
};

Header.Description = function () {
  const { header } = useHeaderContext();
  const { introduction, description } = header;

  return (
    <div className="">
      <p className="text-gray-500">
        <span className="text-white">{introduction}</span> {description}
      </p>
    </div>
  );
};
