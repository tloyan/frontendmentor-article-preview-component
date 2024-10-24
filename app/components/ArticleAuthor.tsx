import { Avatar } from "./Avatar";

export function ArticleAuthor({
  author,
  publishDate,
}: {
  author: { avatarSrc: string; fullname: string };
  publishDate: string;
}) {
  return (
    <div className="flex items-center space-x-4">
      <Avatar src={author.avatarSrc} alt={`${author.fullname} picture`} />
      <div>
        <p className="text-primary-1 text-[.8125rem] tracking-[.0075rem]">
          {author.fullname}
        </p>
        <p className="text-primary-3 text-[.8125rem] tracking-[.0075rem]">
          {publishDate}
        </p>
      </div>
    </div>
  );
}
