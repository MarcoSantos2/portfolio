import type { ComponentPropsWithoutRef } from 'react';

type ExternalLinkProps = Omit<ComponentPropsWithoutRef<'a'>, 'target' | 'rel'>;

export function ExternalLink(props: ExternalLinkProps) {
  return <a {...props} target="_blank" rel="noopener" aria-description="Opens in a new tab" />;
}
