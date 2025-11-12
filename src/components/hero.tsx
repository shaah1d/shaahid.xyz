import { siteConfig } from "@/config/site.config";
import { portfolioConfig } from "@/config/portfolio.config";
import { Socials } from "@/components/socials";
import Link from "next/link";
import ThemeToggler from "@/components/theme/theme-toggler";
import { Rss } from "lucide-react";
import { Button } from "@/components/ui/button";
import { skillsConfig } from "@/config/skills.config";
import {
  Glimpse,
  GlimpseContent,
  GlimpseDescription,
  GlimpseImage,
  GlimpseTitle,
  GlimpseTrigger,
} from '@/components/ui/kibo-ui/glimpse';
import { glimpse } from '@/components/ui/kibo-ui/glimpse/server';


export default async function Hero() {
    const data = await glimpse('https://manifestbyshaahid.vercel.app/');

  return (
    <section className="w-full flex flex-col lg:min-h-[calc(100vh-7rem)]">
      <Link href="/">
        <span className="font-mono text-sm underline">{siteConfig.name}</span>
      </Link>
      <div className="flex justify-between items-center mt-6">
        <h1 className="head-text-sm">{portfolioConfig.name}</h1>
        <div className="flex items-center gap-2">
          <Button size="icon" variant="ghost" className="rounded-full" asChild>
            {/* TODO: add rss feed */}
            <Link href="/rss.xml">
              <Rss size={18} />
              <span className="sr-only">rss feed</span>
            </Link>
          </Button>
          <ThemeToggler />
        </div>
      </div>
      <h3 className="mt-2 text-lg">
        {portfolioConfig.tagline} <span className="sr-only">tagline</span>
      </h3>
<p className="my-6 max-w-2xl text-foreground/80">
  20yo, CSE Student (05'27). I&apos;m a Full Stack Developer &amp; Smart Contract Engineer.
Lately, I&apos;ve been working on
{' '}
  <Glimpse closeDelay={0} openDelay={0}>
    <GlimpseTrigger asChild>
      <a
        className="font-medium text-primary underline"
        href="https://manifestbyshaahid.vercel.app"
      >
        Kolophon
      </a>
    </GlimpseTrigger>
    <GlimpseContent className="w-80">
      <GlimpseImage src={data.image ?? '/kolophon.png'} />
      <GlimpseTitle>{data.title}</GlimpseTitle>
      <GlimpseDescription>{data.description}</GlimpseDescription>
    </GlimpseContent>
  </Glimpse>{' '}
  — a fast growing, plug and play AI agent system for businesses.
 I design and develop full-stack web apps with seamless UI and secure smart contracts. my focus: products that look great and work even better.
</p>


      <Socials />
      <div className="hidden md:flex flex-col text-sm space-y-2 rounded max-w-2xl text-foreground/70 my-7">
        {skillsConfig.map((skill) => (
          <p key={skill.category}>
            <span className="font-semibold text-primary/90">
              {skill.category}:
            </span>{" "}
            {skill.technologies.join(", ")}
          </p>
        ))}
      </div>
    </section>
  );
}
