const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dale-alerta-270525328/",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.75" />
        <path
          d="M7.5 10v6.2M7.5 7.6v.02M11.5 16.2v-3.6c0-1.4.9-2.4 2.2-2.4 1.3 0 2 .9 2 2.4v3.6"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/DeylAlrt",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 2.5c-5.25 0-9.5 4.25-9.5 9.5 0 4.2 2.73 7.77 6.51 9.03.48.09.65-.21.65-.46 0-.23-.01-.98-.01-1.78-2.65.49-3.34-.65-3.55-1.24-.12-.31-.63-1.24-1.08-1.5-.37-.2-.9-.68-.01-.7.83-.01 1.43.77 1.63 1.09.95 1.6 2.47 1.15 3.08.88.1-.68.37-1.15.68-1.42-2.36-.27-4.83-1.18-4.83-5.23 0-1.16.41-2.1 1.09-2.84-.11-.27-.47-1.38.1-2.87 0 0 .89-.29 2.92 1.08a9.9 9.9 0 0 1 5.32 0c2.03-1.37 2.92-1.08 2.92-1.08.57 1.49.21 2.6.1 2.87.68.74 1.09 1.67 1.09 2.84 0 4.06-2.48 4.96-4.84 5.23.38.33.71.96.71 1.95 0 1.41-.01 2.55-.01 2.9 0 .25.17.56.66.46A9.53 9.53 0 0 0 21.5 12c0-5.25-4.25-9.5-9.5-9.5Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/971521490149",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M6.4 17.6 4 21l3.5-1.9a8.4 8.4 0 1 0-1.1-1.5Z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
        <path
          d="M9 9.6c0-.6.4-1.6 1-1.6.5 0 .9.5 1.2 1.1.3.6.5 1 .3 1.4-.2.4-.5.5-.3.9.3.6 1.6 2.1 2.6 2.4.4.1.6-.2 1-.4.4-.2.8 0 1.3.3.5.3 1 .5 1 1s-.9 1.3-1.4 1.4c-.6.1-1.3.1-3-.7-1.5-.7-2.7-2-3.4-3.2-.3-.5-.6-1-.6-1.6Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/deyl.alrt/",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.75" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.75" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/AlphaKennyBody2",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M14.5 8.5h2V5.2c-.35-.05-1.5-.15-2.4-.15-2.4 0-4.1 1.47-4.1 4.16V11.5H7.5v3.5H10V21h3.2v-6h2.5l.4-3.5h-2.9V9.6c0-1 .27-1.1 1.3-1.1Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

export default function HeroSocials() {
  return (
    <ul className="flex flex-wrap items-center gap-3" aria-label="Social links">
      {SOCIALS.map((social) => (
        <li key={social.label}>
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            title={social.label}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-red hover:text-red active:scale-90"
          >
            {social.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}
