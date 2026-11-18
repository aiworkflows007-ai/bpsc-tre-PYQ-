import React, { memo } from 'react'

export interface EducationalWatermarkBgProps {
  isMuted?: boolean
  className?: string
}

// Crisp inline SVGs (stroke-based, 1.5 strokeWidth, zero external requests)
function BookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      <path d="M12 6v10" />
    </svg>
  )
}

function NotebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  )
}

function GradCapIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  )
}

function FountainPenIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m12 19 7-7 3 3-7 7-3-3z" />
      <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="m2 2 7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  )
}

function PencilIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
      <path d="m15 5 4 4" />
    </svg>
  )
}

function PiIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 7h16" />
      <path d="M8 7v11a2 2 0 0 0 2 2" />
      <path d="M16 7v13" />
    </svg>
  )
}

function SigmaIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M19 4H5l7 8-7 8h14" />
    </svg>
  )
}

function SqrtIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 12h3l3 8 5-16h7" />
    </svg>
  )
}

function DeltaIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3 2 21h20L12 3z" />
    </svg>
  )
}

function CompassIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="5" r="2" />
      <path d="m9 7-5 14" />
      <path d="m15 7 5 14" />
      <path d="M7 16h10" />
    </svg>
  )
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="10" r="7" />
      <path d="M12 3a10 10 0 0 0 0 14 10 10 0 0 0 0-14z" />
      <path d="M5 10h14" />
      <path d="M12 17v4" />
      <path d="M8 21h8" />
    </svg>
  )
}

function ClipboardIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="14" height="18" x="5" y="4" rx="2" />
      <path d="M9 2h6v4H9z" />
      <path d="m9 13 2 2 4-4" />
    </svg>
  )
}

interface WatermarkItemConfig {
  id: string
  Icon: React.FC
  top: string
  left?: string
  right?: string
  size: number
  rotation: number
  animType: 1 | 2 | 3 | 4
  duration: string
  delay: string
  color: string
  opacity: number
  desktopOnly?: boolean
}

const WATERMARK_ITEMS: WatermarkItemConfig[] = [
  // 1. Top-Left: Open Book (Mobile + Desktop)
  {
    id: 'wm-book-tl',
    Icon: BookIcon,
    top: '6%',
    left: '3%',
    size: 46,
    rotation: -12,
    animType: 1,
    duration: '22s',
    delay: '0s',
    color: '#1d4ed8',
    opacity: 0.065
  },
  // 2. Top-Center-Left: Pi Symbol (Desktop only)
  {
    id: 'wm-pi-tcl',
    Icon: PiIcon,
    top: '11%',
    left: '24%',
    size: 38,
    rotation: 8,
    animType: 2,
    duration: '26s',
    delay: '2s',
    color: '#1e293b',
    opacity: 0.055,
    desktopOnly: true
  },
  // 3. Top-Right: Graduation Cap (Mobile + Desktop)
  {
    id: 'wm-grad-tr',
    Icon: GradCapIcon,
    top: '8%',
    right: '4%',
    size: 48,
    rotation: 14,
    animType: 3,
    duration: '24s',
    delay: '1s',
    color: '#1d4ed8',
    opacity: 0.065
  },
  // 4. Top-Center-Right: Delta Symbol (Desktop only)
  {
    id: 'wm-delta-tcr',
    Icon: DeltaIcon,
    top: '14%',
    right: '25%',
    size: 36,
    rotation: -6,
    animType: 4,
    duration: '20s',
    delay: '3s',
    color: '#1e293b',
    opacity: 0.055,
    desktopOnly: true
  },
  // 5. Upper-Mid Left: Square Root (Mobile + Desktop)
  {
    id: 'wm-sqrt-uml',
    Icon: SqrtIcon,
    top: '30%',
    left: '4%',
    size: 40,
    rotation: 10,
    animType: 2,
    duration: '25s',
    delay: '4s',
    color: '#1e293b',
    opacity: 0.06
  },
  // 6. Upper-Mid Center: Fountain Pen (Desktop only)
  {
    id: 'wm-pen-umc',
    Icon: FountainPenIcon,
    top: '33%',
    left: '46%',
    size: 44,
    rotation: -18,
    animType: 1,
    duration: '28s',
    delay: '2s',
    color: '#1d4ed8',
    opacity: 0.05,
    desktopOnly: true
  },
  // 7. Upper-Mid Right: Globe (Mobile + Desktop)
  {
    id: 'wm-globe-umr',
    Icon: GlobeIcon,
    top: '28%',
    right: '4%',
    size: 44,
    rotation: -10,
    animType: 3,
    duration: '21s',
    delay: '5s',
    color: '#1d4ed8',
    opacity: 0.06
  },
  // 8. Center-Left: Sigma Symbol (Desktop only)
  {
    id: 'wm-sigma-cl',
    Icon: SigmaIcon,
    top: '48%',
    left: '16%',
    size: 40,
    rotation: 12,
    animType: 4,
    duration: '23s',
    delay: '1.5s',
    color: '#1e293b',
    opacity: 0.055,
    desktopOnly: true
  },
  // 9. Center-Right: Geometry Compass (Desktop only)
  {
    id: 'wm-compass-cr',
    Icon: CompassIcon,
    top: '50%',
    right: '18%',
    size: 44,
    rotation: 15,
    animType: 1,
    duration: '27s',
    delay: '3.5s',
    color: '#1d4ed8',
    opacity: 0.055,
    desktopOnly: true
  },
  // 10. Lower-Mid Left: Notebook (Mobile + Desktop)
  {
    id: 'wm-notebook-lml',
    Icon: NotebookIcon,
    top: '64%',
    left: '4%',
    size: 44,
    rotation: -8,
    animType: 3,
    duration: '22s',
    delay: '6s',
    color: '#1d4ed8',
    opacity: 0.06
  },
  // 11. Lower-Mid Center: Clipboard (Desktop only)
  {
    id: 'wm-clip-lmc',
    Icon: ClipboardIcon,
    top: '67%',
    left: '38%',
    size: 42,
    rotation: 6,
    animType: 2,
    duration: '24s',
    delay: '4.5s',
    color: '#1e293b',
    opacity: 0.05,
    desktopOnly: true
  },
  // 12. Lower-Mid Right: Pencil (Mobile + Desktop)
  {
    id: 'wm-pencil-lmr',
    Icon: PencilIcon,
    top: '66%',
    right: '4%',
    size: 40,
    rotation: 22,
    animType: 4,
    duration: '20s',
    delay: '2s',
    color: '#1e293b',
    opacity: 0.06
  },
  // 13. Bottom-Left Center: Pi Symbol (Desktop only)
  {
    id: 'wm-pi-blc',
    Icon: PiIcon,
    top: '82%',
    left: '18%',
    size: 38,
    rotation: -14,
    animType: 1,
    duration: '25s',
    delay: '5s',
    color: '#1e293b',
    opacity: 0.055,
    desktopOnly: true
  },
  // 14. Bottom-Center: Open Book (Desktop only)
  {
    id: 'wm-book-bc',
    Icon: BookIcon,
    top: '85%',
    left: '58%',
    size: 46,
    rotation: 8,
    animType: 3,
    duration: '26s',
    delay: '1s',
    color: '#1d4ed8',
    opacity: 0.055,
    desktopOnly: true
  },
  // 15. Bottom-Right: Graduation Cap (Mobile + Desktop)
  {
    id: 'wm-grad-br',
    Icon: GradCapIcon,
    top: '87%',
    right: '5%',
    size: 46,
    rotation: -16,
    animType: 2,
    duration: '23s',
    delay: '3s',
    color: '#1d4ed8',
    opacity: 0.065
  },
  // 16. Bottom-Left Edge: Delta Symbol (Mobile + Desktop)
  {
    id: 'wm-delta-ble',
    Icon: DeltaIcon,
    top: '86%',
    left: '4%',
    size: 38,
    rotation: 12,
    animType: 4,
    duration: '21s',
    delay: '0.5s',
    color: '#1e293b',
    opacity: 0.06
  }
]

export const EducationalWatermarkBg: React.FC<EducationalWatermarkBgProps> = memo(
  ({ isMuted = false, className = '' }) => {
    return (
      <div
        className={`edu-watermark-bg ${isMuted ? 'watermark-muted' : ''} ${className}`.trim()}
        aria-hidden="true"
      >
        {WATERMARK_ITEMS.map((item) => {
          const { Icon } = item
          return (
            <div
              key={item.id}
              className={`edu-watermark-item edu-float-type-${item.animType} ${
                item.desktopOnly ? 'edu-desktop-only' : ''
              }`}
              style={{
                top: item.top,
                ...(item.left ? { left: item.left } : {}),
                ...(item.right ? { right: item.right } : {}),
                width: `${item.size}px`,
                height: `${item.size}px`,
                color: item.color,
                opacity: item.opacity,
                animationDuration: item.duration,
                animationDelay: item.delay,
                ['--base-rotation' as any]: `${item.rotation}deg`
              }}
            >
              <Icon />
            </div>
          )
        })}
      </div>
    )
  }
)

EducationalWatermarkBg.displayName = 'EducationalWatermarkBg'

export default EducationalWatermarkBg
