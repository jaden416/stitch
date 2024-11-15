import React, { forwardRef } from "react";
import * as RadixTooltip from "@radix-ui/react-tooltip";
import { motion, AnimatePresence } from "framer-motion";

interface TooltipProps
  extends React.ComponentPropsWithoutRef<typeof RadixTooltip.Root> {
  href?: string;
  title: string;
  active: boolean;
  modal: boolean;
  handleClick: (href?: string) => void; // Made optional with ?
}

const Tooltip = forwardRef<
  React.ElementRef<typeof RadixTooltip.Trigger>,
  TooltipProps
>(({ modal, children, handleClick, ...props }, ref) => {
  const [open, setOpen] = React.useState(false);

  const variants = {
    initial: { y: 12, opacity: 0, filter: "blur(4px)" },
    animate: { y: 0, opacity: 1, filter: "blur(0px)" },
  };

  const transition = {
    type: "spring",
    stiffness: 170,
    damping: 24,
    mass: 1.2,
  };
  function handleOpen() {
    if (!modal) setOpen(!open);
  }
  function handleTrigger() {
    if (handleClick && props.href) handleClick(props.href);
    else handleClick();
  }

  const active = open && !modal;
  return (
    <RadixTooltip.Provider>
      <div className="relative h-full">
        {props.active && (
          <motion.div
            layoutId="active-tab-bg"
            style={{ borderRadius: 8 }}
            transition={transition}
            className="absolute left-0 top-0 aspect-square h-full"
          >
            <div
              style={{ borderRadius: 8 }}
              className="absolute inset-0 rounded-lg bg-[#a1a1a142] backdrop-blur-sm"
            />
          </motion.div>
        )}

        <RadixTooltip.Root
          open={active}
          onOpenChange={handleOpen}
          delayDuration={0}
        >
          <RadixTooltip.Trigger
            asChild
            className="z-100 relative flex h-[3.6rem] w-[3.6rem] cursor-pointer items-center justify-center"
            ref={ref}
            onClick={handleTrigger}
          >
            <motion.a
              whileTap={{ scale: 0.95 }}
              className="h-[2.4rem] w-[2.4rem]"
              href={props.href}
              onClick={(event) => {
                event.preventDefault();
              }}
            >
              {children}
            </motion.a>
          </RadixTooltip.Trigger>
          <AnimatePresence mode="wait">
            {active && (
              <RadixTooltip.Portal forceMount>
                <RadixTooltip.Content asChild key="tooltip" sideOffset={16}>
                  <motion.div
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    exit="initial"
                    className="rounded-[1000px] px-[.8rem] py-[.2rem] font-bitmap text-[2rem] text-white dark:bg-neutral-800"
                  >
                    {props.title}
                  </motion.div>
                </RadixTooltip.Content>
              </RadixTooltip.Portal>
            )}
          </AnimatePresence>
        </RadixTooltip.Root>
      </div>
    </RadixTooltip.Provider>
  );
});

export { Tooltip };
