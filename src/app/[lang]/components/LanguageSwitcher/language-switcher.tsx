"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n } from "@/lib/i18n";

import type { Locale } from "@/lib/i18n";

export const LanguageSwitcher = () => {
  const pathName = usePathname();

  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div>
      <section className="flex gap-4">
        {i18n.locales.map((locale) => {
          return (
            <span key={locale}>
              <Link href={redirectedPathName(locale)}>{locale}</Link>
            </span>
          );
        })}
      </section>
    </div>
  );
}