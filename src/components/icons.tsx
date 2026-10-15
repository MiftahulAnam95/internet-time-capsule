import type { SVGProps } from "react";

/** Hand-drawn inline SVG icon set — 1.4px strokes, square joins,
 *  matching the hairline aesthetic of the archive. No emoji, no icon fonts. */

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "square" as const,
  strokeLinejoin: "miter" as const,
  "aria-hidden": true,
  focusable: false,
});

export const IconSearch = ({ size = 16, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <circle cx="10.5" cy="10.5" r="6" />
    <path d="M15 15l5 5" />
  </svg>
);

export const IconClose = ({ size = 16, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M5 5l14 14M19 5L5 19" />
  </svg>
);

export const IconArrowRight = ({ size = 16, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M4 12h15M13 6l6 6-6 6" />
  </svg>
);

export const IconArrowLeft = ({ size = 16, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M20 12H5M11 6l-6 6 6 6" />
  </svg>
);

export const IconArrowDown = ({ size = 16, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M12 4v15M6 13l6 6 6-6" />
  </svg>
);

export const IconBookmark = ({ size = 16, filled = false, ...p }: IconProps & { filled?: boolean }) => (
  <svg {...base(size)} fill={filled ? "currentColor" : "none"} {...p}>
    <path d="M6 3.5h12v17l-6-4.6-6 4.6z" />
  </svg>
);

export const IconLink = ({ size = 16, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M10 13.5a3.5 3.5 0 005 0l3-3a3.54 3.54 0 00-5-5l-1.2 1.2" />
    <path d="M14 10.5a3.5 3.5 0 00-5 0l-3 3a3.54 3.54 0 005 5l1.2-1.2" />
  </svg>
);

export const IconCheck = ({ size = 16, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M4 12.5l5 5L20 6.5" />
  </svg>
);

export const IconShuffle = ({ size = 16, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M3 6h4l10 12h4M3 18h4l3-3.6M14.5 9.5L17 6h4" />
    <path d="M18 3l3 3-3 3M18 15l3 3-3 3" />
  </svg>
);

export const IconLayers = ({ size = 16, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M12 3l9 5-9 5-9-5 9-5z" />
    <path d="M3 13l9 5 9-5" />
  </svg>
);

export const IconTimeline = ({ size = 16, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M3 12h18" />
    <circle cx="7" cy="12" r="2" />
    <circle cx="17" cy="12" r="2" />
    <path d="M7 6v4M17 14v4" />
  </svg>
);

export const IconMenu = ({ size = 16, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M3 7h18M3 12h18M3 17h18" />
  </svg>
);

export const IconExternal = ({ size = 14, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M14 4h6v6M20 4l-8.5 8.5" />
    <path d="M18 14v5.5H4.5V6H10" />
  </svg>
);

export const IconSort = ({ size = 16, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M7 4v16M7 20l-3-3M7 20l3-3" />
    <path d="M17 20V4M17 4l-3 3M17 4l3 3" />
  </svg>
);

export const IconArchive = ({ size = 16, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M3 5h18v4H3zM4.5 9v10h15V9" />
    <path d="M9.5 13h5" />
  </svg>
);

export const IconCompare = ({ size = 16, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M12 3v18" />
    <path d="M3 8h6l-3 5zM15 8h6l-3 5z" />
    <path d="M3 8l3-3 3 3M15 8l3-3 3 3" />
  </svg>
);

export const IconGithub = ({ size = 16, ...p }: IconProps) => (
  <svg {...base(size)} strokeWidth={1.2} {...p}>
    <path d="M9 20c-4 1.2-4-2.2-5.6-2.7M15 21.5v-3.3c0-.9-.2-1.6-.8-2.1 2.7-.3 5.1-1.3 5.1-5.6a4.3 4.3 0 00-1.2-3 4 4 0 00-.1-3s-1-.3-3.3 1.2a11.3 11.3 0 00-6 0C6.4 4.2 5.4 4.5 5.4 4.5a4 4 0 00-.1 3 4.3 4.3 0 00-1.2 3.1c0 4.2 2.4 5.2 5.1 5.5-.4.4-.7 1-.8 1.8V21" />
  </svg>
);
