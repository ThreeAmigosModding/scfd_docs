import { buttonVariants } from "./ui/button";
import { DownloadIcon, ShoppingCartIcon } from "lucide-react";
import type { ReactNode } from "react";

interface BtnProps {
  icon?: ReactNode;
  children?: ReactNode;
  link?: string;
  label?: string;
}

const Btn = ({ children, icon, link }: BtnProps) => {
  return (
    <div className="h-fit w-fit">
      <a
        href={link}
        className={
          "group inline-flex no-underline items-center justify-center rounded-md p-2 font-medium transition-colors duration-100 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring border bg-fd-secondary text-fd-secondary-foreground hover:bg-fd-accent hover:text-fd-accent-foreground px-2.5 py-2 text-xs gap-2 [&_svg]:size-3.5 [&_svg]:text-fd-muted-foreground shadow-sm"
        }
      >
        <div>{icon}</div>
        {children}
      </a>
    </div>
  );
};

function GithubBtn(props: BtnProps) {
  return (
    <Btn
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          className="group text-fd-secondary-foreground group-hover:text-fd-accent-foreground"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2a4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6c-.6.6-.6 1.2-.5 2V21"
          />
        </svg>
      }
      link={props.link}
    >
      {props.label || "Github"}
    </Btn>
  );
}

function DownloadBtn(props: BtnProps) {
  return (
    <Btn
      icon={
        <DownloadIcon className="group text-fd-secondary-foreground group-hover:text-fd-accent-foreground" />
      }
      link={props.link}
    >
      {props.label || "Download"}
    </Btn>
  );
}

function StoreBtn(props: BtnProps) {
  return (
    <Btn
      icon={
        <ShoppingCartIcon className="group text-fd-secondary-foreground group-hover:text-fd-accent-foreground" />
      }
      link={props.link}
    >
      {props.label || "Purchase"}
    </Btn>
  );
}

const ResourceLinks = ({
  repo,
  resource,
}: {
  repo?: string;
  resource?: string;
}) => {
  const github = `https://github.com/scuffedlabs/${repo}`;
  const store = `https://scuffedlabs.com/resources/${resource}`;
  const download = repo
    ? `https://github.com/scuffedlabs/${repo}/release/latest`
    : "https://portal.cfx.re";

  return (
    <div className="flex flex-row gap-2">
      <DownloadBtn link={download} />
      {repo && <GithubBtn link={github} />}
      {resource && <StoreBtn link={store} />}
    </div>
  );
};

export default ResourceLinks;
