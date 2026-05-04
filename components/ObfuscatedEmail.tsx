"use client";

import { useEffect, useState } from "react";

type Props = {
  user: string;
  domain: string;
  className?: string;
};

export default function ObfuscatedEmail({ user, domain, className }: Props) {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    setRevealed(true);
  }, []);

  if (!revealed) {
    return (
      <span className={className}>
        {user} <span aria-hidden="true">[at]</span> {domain}
      </span>
    );
  }

  const address = `${user}@${domain}`;
  return (
    <a className={className} href={`mailto:${address}`}>
      {address}
    </a>
  );
}
