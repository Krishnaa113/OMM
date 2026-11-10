// Simple line icons (original), stroke uses currentColor.
const P = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' }

const paths = {
  phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />,
  search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></>,
  arrow: <path d="m9 6 6 6-6 6" />,
  down: <path d="m6 9 6 6 6-6" />,
  up: <path d="M12 19V5M5 12l7-7 7 7" />,
  check: <path d="M4 12.5 9 17.5 20 6.5" />,
  user: <><circle cx="12" cy="12" r="10" /><circle cx="12" cy="10" r="3" /><path d="M6.2 18.5a7 7 0 0 1 11.6 0" /></>,
  chat: <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" />,
  tag: <><path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8z" /><circle cx="7.5" cy="7.5" r="1.5" /></>,
  globe: <><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" /></>,
  passport: <><rect x="4" y="2" width="16" height="20" rx="2" /><circle cx="12" cy="10" r="4" /><path d="M8 10h8M12 6c-1.5 2-1.5 6 0 8M12 6c1.5 2 1.5 6 0 8M8 18h8" /></>,
  visa: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 7l1.5 3.5L10 7M12 7v3.5M14 10.5c1.5 0 1.5-1.8 0-1.8s-1.5-1.7 0-1.7M16.5 10.5 17.5 7l1 3.5" /><circle cx="8.5" cy="15.5" r="1.8" /><path d="M13 14h5M13 17h4" /></>,
  money: <><rect x="2" y="6" width="20" height="12" rx="2" transform="rotate(-20 12 12)" /><circle cx="12" cy="12" r="3" /><path d="M12 10.5v3" /></>,
  interview: <><circle cx="12" cy="7" r="3.5" /><path d="M5 21v-2a7 7 0 0 1 14 0v2" /><rect x="8" y="14" width="8" height="6" rx="1" /><path d="M2 4h5v3H4l-2 2z" /></>,
  officer: <><path d="M7 7h10l-1-3H8z" /><circle cx="12" cy="11" r="3.5" /><path d="M5 21a7 7 0 0 1 14 0" /><rect x="2" y="13" width="5" height="7" rx="1" /></>,
  quote: <path d="M4 5h6v6l-3 7H4l2-7H4zM14 5h6v6l-3 7h-3l2-7h-2z" fill="currentColor" stroke="none" />,
  calling: <><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" /><path d="M15 2a7 7 0 0 1 7 7M15 6a3 3 0 0 1 3 3" /></>,
  fb: <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H7v4h3v8h4v-8h3l1-4h-4V8z" fill="currentColor" stroke="none" />,
  tw: <path d="M4 4l16 16M20 4 4 20" />,
  ig: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" /></>,
  in: <><path d="M4 9h4v11H4zM6 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM10 9h4v1.5c.6-1 1.8-1.8 3.5-1.8 3 0 3.5 2 3.5 4.6V20h-4v-5.5c0-1.3-.3-2.3-1.6-2.3S14 13.2 14 14.5V20h-4z" fill="currentColor" stroke="none" /></>,
  dbl: <path d="m6 6 6 6-6 6M13 6l6 6-6 6" />,
}

export default function Icon({ name, size = 24, className }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} {...P} aria-hidden="true">
      {paths[name]}
    </svg>
  )
}
