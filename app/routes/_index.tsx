import type { MetaFunction } from "react-router";

import { GithubIcon } from "components/icons";
import { subtitle, title } from "components/primitives";
import { siteConfig } from "config/site";

export const meta: MetaFunction = () => {
  return [
    { title: "HeroUI + React Router App" },
    { name: "description", content: "Welcome to HeroUI!" },
  ];
};

export default function Index() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg justify-center text-center">
        <span className={title()}>Make&nbsp;</span>
        <span className={title({ color: "blue" })}>beautiful&nbsp;</span>
        <br />
        <span className={title()}>
          websites regardless of your design experience.
        </span>
        <div className={subtitle({ class: "mt-4" })}>
          Beautiful, fast and modern React UI library.
        </div>
      </div>

      <div className="flex gap-3">
        <a
          className="button button--primary button--md rounded-full"
          href={siteConfig.links.docs}
          rel="noopener noreferrer"
          target="_blank"
        >
          Documentation
        </a>
        <a
          className="button button--tertiary button--md rounded-full"
          href={siteConfig.links.github}
          rel="noopener noreferrer"
          target="_blank"
        >
          <GithubIcon size={20} />
          GitHub
        </a>
      </div>

      <div className="mt-8">
        <div className="flex items-center gap-2 rounded-xl bg-surface px-4 py-2 shadow-surface">
          <pre className="font-mono text-sm font-medium">
            Get started by editing{" "}
            <code className="inline h-fit whitespace-nowrap rounded-sm bg-accent/20 px-2 py-1 font-mono text-sm font-normal text-accent">
              app/routes/_index.tsx
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
