# TRE Ready design system

## Foundations

| Token | Value | Use |
|---|---:|---|
| Ink | `#102A43` | navigation, headings, primary actions |
| Teal | `#147D75` | selected / correct / productive actions |
| Gold | `#D99A2B` | progress and emphasis |
| Canvas | `#F7F5F0` | page background |
| Surface | `#FFFFFF` | cards and question paper |
| Muted | `#667085` | supporting copy |
| Danger | `#B42318` | destructive/error state |

Typography uses system sans-serif with `Noto Sans Devanagari` fallbacks. Headings are 700 weight with 1.1 line-height; reading copy uses 1.65 line-height. Spacing follows 4, 8, 12, 16, 24, 32, 48, 64px. Radius: 10px controls, 16px cards, 22px feature surfaces. Shadows are subtle and reserved for floating paper surfaces.

## Interaction rules

- Primary buttons are navy, high contrast, 44px minimum height; secondary buttons are bordered.
- Visible keyboard focus uses a 3px teal ring. Motion is limited to short color/shadow transitions and disabled for reduced-motion.
- Breakpoints: 640px (phone), 900px (tablet), 1120px (desktop). The app collapses navigation and peripheral panels before compressing question text.
- Skeleton/empty/error patterns use clear text and a direct recovery action. Demo errors are not fabricated.
- Charts use labels and values, never colour alone.
