type IconProps = {
  className?: string;
};

export function WelcomeIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A2 2 0 013 15.382V6.618a2 2 0 011.553-1.894L9 2m0 18l6-3m-6 3V2m6 15l5.447 2.724A2 2 0 0021 18.382V9.618a2 2 0 00-1.553-1.894L15 5m0 14V5" />
    </svg>
  );
}

export function RolesIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" d="M8.5 14.5c.667-1 1.667-1.5 3.5-1.5s2.833.5 3.5 1.5" />
      <circle cx="9" cy="10" r="1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="10" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ModerationIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 4v6c0 4.418-3.134 8.084-7 9-3.866-.916-7-4.582-7-9V7l7-4z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function EmbedIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <rect x="4" y="5" width="16" height="14" rx="2" />
      <path strokeLinecap="round" d="M8 9h8M8 13h5" />
    </svg>
  );
}

export function SetupIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 16v-2m8-6h2M4 12H2m15.07-5.07l1.42-1.42M5.51 18.49l-1.42 1.42m0-12.02l1.42 1.42M18.49 18.49l1.42 1.42" />
      <circle cx="12" cy="12" r="3.5" />
    </svg>
  );
}

export function VoiceIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14a3 3 0 003-3V6a3 3 0 10-6 0v5a3 3 0 003 3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-14 0M12 18v3" />
    </svg>
  );
}

export function CommandsIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <rect x="5" y="5" width="14" height="14" rx="3" />
      <path strokeLinecap="round" d="M9 9l6 6M15 9l-6 6" />
    </svg>
  );
}

export function DocsIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.5V19M12 6.5C10.5 5.5 8.5 5 6.5 5.5 5 6 4 7.5 4 9.5v9.5h16V9.5c0-2-1-3.5-2.5-4S13.5 5.5 12 6.5z" />
    </svg>
  );
}

export function SupportIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4-.8L3 20l.8-3.2A7.96 7.96 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  );
}

export type MenuIconName =
  | "welcome"
  | "roles"
  | "moderation"
  | "embed"
  | "setup"
  | "voice"
  | "commands"
  | "docs"
  | "support";

const iconMap = {
  welcome: WelcomeIcon,
  roles: RolesIcon,
  moderation: ModerationIcon,
  embed: EmbedIcon,
  setup: SetupIcon,
  voice: VoiceIcon,
  commands: CommandsIcon,
  docs: DocsIcon,
  support: SupportIcon,
};

export function MenuIcon({ name, className }: { name: MenuIconName; className?: string }) {
  const Icon = iconMap[name];
  return <Icon className={className} />;
}
