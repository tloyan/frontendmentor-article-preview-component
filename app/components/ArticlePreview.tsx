import Image from "next/image";

import { ArticleFooter } from "./ArticleFooter";

export function ArticlePreview({
  title,
  description,
  imgSrc,
  author,
  publishDate,
}: {
  title: string;
  description: string;
  imgSrc: string;
  author: {
    avatarSrc: string;
    fullname: string;
  };
  publishDate: string;
}) {
  return (
    <article className="flex flex-col rounded-[10px] bg-white shadow-[0_40px_40px_-10px_rgba(201,213,225,.5)] max-w-[400px] lg:max-h-[280px] lg:max-w-[730px] lg:flex-row">
      <div className="relative w-full shrink-0 h-[14rem] overflow-hidden rounded-t-[10px] lg:h-[280px] lg:w-[285px] lg:rounded-none lg:rounded-l-[10px]">
        <Image
          src={imgSrc}
          alt="article picture"
          width={660}
          height={558}
          className="mb-[-14.6%] mt-[-4.6%] w-full bg-cover bg-left lg:m-0 lg:hidden lg:h-full"
        />
        <Image
          src={imgSrc}
          alt="article picture"
          fill
          className="mb-[-14.6%] mt-[-4.6%] hidden h-auto w-full lg:m-0 lg:block lg:object-cover lg:object-left"
        />
      </div>
      <div className="space-y-5 lg:px-10">
        <div className="space-y-3 px-8 pt-9 lg:px-0">
          <p className="text-primary-1 font-bold tracking-[.0125rem] lg:text-xl lg:leading-[1.4rem] lg:leading-[1.75rem] lg:tracking-[0.015625rem]">
            {title}
          </p>
          <p className="text-primary-2 text-[.8125rem] tracking-[.0075rem]">
            {description}
          </p>
        </div>
        <ArticleFooter author={author} publishDate={publishDate} />
      </div>
    </article>
  );
}
