'use client'
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { useState } from "react";

import { ArticleAuthor } from "./ArticleAuthor";
import { ShareButton } from "./ShareButton";
import { ShareWithIcons } from "./ShareWithIcons";

export function ArticleFooter({
  author,
  publishDate,
}: {
  author: { avatarSrc: string; fullname: string };
  publishDate: string;
}) {
  const [active, setActive] = useState(false);
  return (
    <div className="relative">
      <div
        className={twMerge(
          clsx(
            "bg-primary-1 absolute inset-0 hidden items-center justify-between rounded-b-[10px] px-8",
            active && "flex md:hidden",
          ),
        )}
      >
        <ShareWithIcons />
        <ShareButton active={active} onClick={() => setActive(!active)} />
      </div>
      <div className="flex items-center justify-between px-8 pb-5 md:p-0">
        <ArticleAuthor author={author} publishDate={publishDate} />
        <div>
          <div
            className={clsx(
              "bg-primary-1 absolute -top-20 right-[-109px] hidden rounded-[.625rem] px-9 py-[18px]",
              active && "md:block",
            )}
          >
            <ShareWithIcons />
            <div className="bg-primary-1 absolute -bottom-2 left-[calc(50%-8px)] h-4 w-4 origin-center rotate-45" />
          </div>
          <ShareButton active={active} onClick={() => setActive(!active)} />
        </div>
      </div>
    </div>
  );
}