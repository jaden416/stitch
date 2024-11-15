import React, { forwardRef } from "react";
import * as RadixPopover from "@radix-ui/react-popover";
import { AnimatePresence, motion } from "framer-motion";
import { Icons } from "./Icons";

const Popover = ({ children, ...props }: PopoverProps) => {
  return <RadixPopover.Root {...props}>{children}</RadixPopover.Root>;
};

interface PopoverTriggerProps
  extends React.ComponentPropsWithoutRef<typeof RadixPopover.Trigger> {}

const PopoverTrigger = forwardRef<
  React.ElementRef<typeof RadixPopover.Root>,
  PopoverTriggerProps
>(({ children, ...props }, ref) => {
  return <RadixPopover.Trigger {...props}>{children}</RadixPopover.Trigger>;
});

interface PopoverAnchorProps
  extends React.ComponentPropsWithoutRef<typeof RadixPopover.Anchor> {}

const PopoverAnchor = forwardRef<
  React.ElementRef<typeof RadixPopover.Root>,
  PopoverAnchorProps
>(({ children, ...props }, ref) => {
  return <RadixPopover.Anchor {...props}>{children}</RadixPopover.Anchor>;
});

interface PopoverContentProps
  extends React.ComponentPropsWithoutRef<typeof RadixPopover.Content> {
  active: boolean;
}

const PopoverContent = forwardRef<
  React.ElementRef<typeof RadixPopover.Content>,
  PopoverContentProps
>(({ children, active, ...props }, ref) => {
  const variants = {
    initial: { scale: 0.95, y: 40, opacity: 0 },
    animate: { scale: 1, y: 0, opacity: 1 },
  };

  const transition = {
    type: "spring",
    bounce: 0,
    duration: 0.6,
  };

  return (
    <AnimatePresence mode="wait">
      {active && (
        <RadixPopover.Content asChild forceMount sideOffset={10}>
          <motion.div
            variants={variants}
            transition={transition}
            initial="initial"
            animate="animate"
            className="bg-darkgrey shadow-shado flex w-[36rem] flex-col gap-y-[1.2rem] rounded-[1.6rem] px-[1.6rem] py-[2rem]"
          >
            <motion.div className="flex flex-col gap-y-[.8rem]">
              <motion.p className="font-gmedium pr-[.8rem] text-[1.4rem] leading-[1.25] tracking-[.025em] text-white">
                Stay in touch with{" "}
                <motion.span className="bg-green-rgba font-bitmap rounded-[12px] px-[.6rem] py-[.4rem] text-[2rem] text-[#00DDA6]">
                  stitch
                </motion.span>
              </motion.p>
              <motion.p className="font-glight pr-[.8rem] text-[1.4rem] leading-[1.25] tracking-[.025em] text-[#B8B8B8]">
                Contact me on Instagram, Twitch or Email:
              </motion.p>
            </motion.div>
          </motion.div>
        </RadixPopover.Content>
      )}
    </AnimatePresence>
  );
});

export { Popover, PopoverTrigger, PopoverAnchor, PopoverContent };
