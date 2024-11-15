import * as React from "react";
import {
  createRootRoute,
  Outlet,
  useRouter,
  useRouterState,
} from "@tanstack/react-router";

import { Tooltip } from "../components/Tooltip.tsx";
import {
  Popover,
  PopoverTrigger,
  PopoverAnchor,
  PopoverContent,
} from "../components/Popover.tsx";

import { Icons } from "../components/Icons.tsx";
import Button from "../components/Button.tsx";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const router = useRouter();
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  const handleRoute = (newValue: string) => {
    router.navigate({ to: newValue });
    console.log("clicks");
  };

  const [popoverContent, setPopoverContent] = React.useState<boolean>(false);

  const handlePopoverContent = () => {
    setPopoverContent(!popoverContent);
  };

  return (
    <>
      <nav className="fixed bottom-0 left-1/2 z-50 flex w-full -translate-x-1/2 justify-center pb-[2rem]">
        <Popover open={popoverContent} onOpenChange={handlePopoverContent}>
          <PopoverAnchor className="relative z-30 flex items-center gap-1.5 rounded-[1.2rem] bg-darkgrey p-2 shadow-shado">
            {links.map((link) => {
              return (
                <Tooltip
                  handleClick={() => handleRoute(link.href)}
                  title={link.title}
                  href={link.href}
                  active={pathname === link.href && !popoverContent}
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
                handleClick={handlePopoverContent}
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
            <PopoverContent active={popoverContent} sideOffset={10}>
              <Button title="Email me">
                <Icons.email
                  className="z-50 flex h-full w-full items-center justify-center"
                  color="white"
                />
              </Button>
              <Button>
                <Icons.twitch className="z-50 h-full w-full" color="white" />
              </Button>
            </PopoverContent>
          </PopoverAnchor>
        </Popover>
      </nav>
      <Outlet />
    </>
  );
}

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
