import type { MetaFunction } from "react-router";
import { Button } from "@heroui/react";

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
        <Button
          className="rounded-full"
          variant="primary"
          onPress={() =>
            window.open(siteConfig.links.docs, "_blank", "noopener,noreferrer")
          }
        >
          Documentation
        </Button>
        <Button
          className="rounded-full"
          variant="tertiary"
          onPress={() =>
            window.open(siteConfig.links.github, "_blank", "noopener,noreferrer")
          }
        >
          <GithubIcon size={20} />
          GitHub
        </Button>
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
