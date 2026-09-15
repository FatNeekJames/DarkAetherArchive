import type { AnchorHTMLAttributes } from 'react';

type SiteLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

/**
 * Internal navigation deliberately uses native document requests.
 *
 * The hosted archive serves every route correctly, but client-side routing can
 * be unavailable while a deployment's RSC assets settle. A normal anchor keeps
 * navigation reliable without changing right-click, keyboard, or copy-link
 * behaviour.
 */
export default function SiteLink({ href, ...props }: SiteLinkProps) {
  return <a href={href} {...props} />;
}
