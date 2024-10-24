
import { ArticlePreview } from "./components/ArticlePreview";

const article = {
  title:
    "Shift the overall look and feel by adding these wonderful touches to furniture in your home",
  description:
    "Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.",
  imgSrc: "/drawers.jpg",
  author: {
    avatarSrc: "/avatar-michelle.jpg",
    fullname: "Michelle Appleton",
  },
  publishDate: "28 Jun 2020",
};

export default function Home() {
  return (
    <main className="bg-primary-4 flex min-h-full flex-col items-center justify-center px-6 pt-[74px]">
      <ArticlePreview {...article} />
    </main>
  );
}
