import { FacebookIcon, TwitterIcon, PinterestIcon } from "./Icon";

export function ShareWithIcons() {
  return (
    <div className="flex items-center space-x-5">
      <p className="text-primary-3 text-[.8125rem] uppercase tracking-[.313rem]">
        share
      </p>
      <Icons />
    </div>
  );
}

function Icons() {
  return (
    <div className="flex items-center justify-center space-x-4">
      <FacebookIcon />
      <TwitterIcon />
      <PinterestIcon />
    </div>
  );
}
