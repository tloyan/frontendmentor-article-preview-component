'use client'
import { useState } from "react";

import { cn } from "@/app/lib/cn"

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
      <div className="flex items-center justify-between px-8 pb-5 md:p-0">
        <ArticleAuthor author={author} publishDate={publishDate} />
        <div>
          <div
            className={cn(
              "bg-primary-1 absolute inset-0 hidden items-center justify-between rounded-b-[.625rem] px-8",
              " md:inset-auto md:-top-20 md:right-[-109px] md:rounded-[.625rem] md:px-9 md:py-[18px]",
              active && "flex",
            )}
          >
            <ShareWithIcons />
            <ShareButton active={active} onClick={() => setActive(!active)} className="md:hidden" />
            <div className="bg-primary-1 absolute -bottom-2 left-[calc(50%-8px)] h-4 w-4 origin-center rotate-45 hidden md:block" />
          </div>
          <ShareButton active={active} onClick={() => setActive(!active)} />
        </div>
      </div>
    </div>
  );
}
