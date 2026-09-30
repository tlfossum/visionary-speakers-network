import { useEffect, useState, type CSSProperties, type ReactNode } from 'react'

// Renders an email link only after the component has mounted in a browser, so
// the address never appears in prerendered HTML and never appears as a whole
// string in the JS bundle. Address harvesters overwhelmingly read raw HTML and
// do not run scripts (Mortensen honeypot, updated 2026-08: JavaScript-assembled
// addresses were harvested by 0 of 742 spammers). The old general address was
// harvested from these pages in September 2026; this is the replacement path.
//
//   <Email user="write" host={TLF} />                      -> write at terrylfossum dot com
//   <Email user="speaking" host={TLF}>Email Terry</Email>  -> custom label
//   <Email user="vip" host={SA} subject="Wire transfer" body="Hi Terry" />
//
// Never write a full address as a string literal anywhere in src again; use
// emailAddress()/mailtoHref() inside event handlers if you need the string.

export const TLF = ['terrylfossum', 'com'] as const
export const SA = ['thestageadvantage', 'com'] as const
type Host = readonly string[]

export function emailAddress(user: string, host: Host): string {
  return user + String.fromCharCode(64) + host.join('.')
}

export function mailtoHref(user: string, host: Host, subject?: string, body?: string): string {
  const params: string[] = []
  if (subject) params.push('subject=' + encodeURIComponent(subject))
  if (body) params.push('body=' + encodeURIComponent(body))
  return 'mailto:' + emailAddress(user, host) + (params.length ? '?' + params.join('&') : '')
}

// The bare address as text, revealed after mount. Use it inside a label when
// the link needs other content too:  <Email ...><Icon /> <Addr user="x" host={TLF} /></Email>
export function Addr({ user, host }: { user: string; host: Host }) {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    setReady(true)
  }, [])
  return <>{ready ? emailAddress(user, host) : user + String.fromCharCode(64) + '\u2026'}</>
}

type Props = {
  user: string
  host: Host
  subject?: string
  body?: string
  className?: string
  style?: CSSProperties
  children?: ReactNode
}

export default function Email({ user, host, subject, body, className, style, children }: Props) {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    setReady(true)
  }, [])
  if (!ready) {
    // Same markup on the server and on the first client render (no hydration
    // mismatch); the label shows without the domain until the effect runs.
    return <span className={className} style={style}>{children ?? user + String.fromCharCode(64) + '\u2026'}</span>
  }
  return (
    <a href={mailtoHref(user, host, subject, body)} className={className} style={style}>
      {children ?? emailAddress(user, host)}
    </a>
  )
}
