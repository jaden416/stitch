import React from "react";
import { Tooltip } from "./components/Tooltip.tsx";
import { Icons } from "./components/Icons.tsx";
import {
  Popover,
  PopoverTrigger,
  PopoverAnchor,
  PopoverContent,
} from "./components/Popover.tsx";

function App() {
  const [popoverContent, setPopoverContent] = React.useState<boolean>(false);
  const handleClick = () => {};
  return (
    <nav className=" justify-center pb-[2rem]">
      <Popover open={popoverContent}>
        <PopoverAnchor className="relative z-30 flex items-center gap-1.5 rounded-[1.2rem] p-2">
          {links.map((link, index) => {
            return (
              <Tooltip
                active={index == 1}
                handleClick={handleClick}
                title={link.title}
                href={link.href}
                key={link.title}
                modal={popoverContent}
              >
                {link.children}
              </Tooltip>
            );
          })}
          <PopoverTrigger asChild>
            <Tooltip
              handleClick={handleClick}
              title="Contact"
              active={popoverContent}
              modal={popoverContent}
              href="/"
            >
              <Icons.email
                className="z-50 h-[2.4rem] w-[2.4rem]"
                color="#545964"
              />
            </Tooltip>
          </PopoverTrigger>
          <PopoverContent
            active={popoverContent}
            sideOffset={10}
          ></PopoverContent>
        </PopoverAnchor>
      </Popover>
    </nav>
  );
}

export default App;
const links = [
  {
    href: "/",
    title: "Home",
    children: (
      <Icons.home className="z-50 h-[2.4rem] w-[2.4rem]" color="#545964" />
    ),
  },
  {
    href: "/work",
    title: "Work",
    children: (
      <Icons.keyboard className="z-50 h-[2.4rem] w-[2.4rem]" color="#545964" />
    ),
  },
];
