import React from "react";
import { cn } from "../../lib/utils";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({ className, title, description, header, icon }) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 border transition duration-200 hover:shadow-xl dark:border-white/[0.2]",
        className
      )}
    >
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon}
        <div className="mt-2 mb-2 font-sans font-bold">
          {title}
        </div>
        <div className="font-sans text-xs font-normal">
          {description}
        </div>
      </div>
    </div>
  );
};
