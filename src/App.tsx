import Header from "./components/Header";
import s from "./assets/stitch.png";
import { Tooltip } from "./components/Tooltip.tsx";
import {
  Popover,
  PopoverTrigger,
  PopoverAnchor,
  PopoverContent,
} from "./components/Popover.tsx";

import { Icons } from "./components/Icons.tsx";

function App() {
  const [popoverContent, setPopoverContent] = React.useState<boolean>(false);

  return (
    <nav className="fixed bottom-0 left-1/2 z-50 flex w-full -translate-x-1/2 justify-center pb-[2rem]">
      <Popover open={popoverContent}>
        <PopoverAnchor className="bg-darkgrey shadow-shado relative z-30 flex items-center gap-1.5 rounded-[1.2rem] p-2">
          {links.map((link) => {
            return (
              <Tooltip
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
              title="Contact"
              active={popoverContent}
              modal={popoverContent}
              href="/"
            >
              <Icons.email
                className="z-50 h-[2.4rem] w-[2.4rem]"
                color="white"
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
      <Icons.home className="z-50 h-[2.4rem] w-[2.4rem]" color="white" />
    ),
  },
  {
    href: "/work",
    title: "Work",
    children: (
      <Icons.keyboard className="z-50 h-[2.4rem] w-[2.4rem]" color="white" />
    ),
  },
];
