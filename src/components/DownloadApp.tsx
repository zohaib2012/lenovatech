import { useInstallPrompt } from '../hooks/useInstallPrompt'
import { HiDownload } from 'react-icons/hi'

interface DownloadAppProps {
  variant?: 'navbar' | 'footer' | 'floating'
}

export default function DownloadApp({ variant = 'navbar' }: DownloadAppProps) {
  const { canInstall, isInstalled, install } = useInstallPrompt()

  if (isInstalled || !canInstall) return null

  if (variant === 'navbar') {
    return (
      <button
        className="btn btn-primary nav-cta"
        onClick={install}
        title="Install App"
      >
        <HiDownload size={16} style={{ marginRight: 6 }} />
        Download App
      </button>
    )
  }

  if (variant === 'footer') {
    return (
      <li>
        <button
          onClick={install}
          style={{
            background: 'none',
            border: 'none',
            color: 'inherit',
            cursor: 'pointer',
            padding: 0,
            font: 'inherit',
          }}
        >
          <HiDownload size={14} style={{ marginRight: 4 }} />
          Download App
        </button>
      </li>
    )
  }

  return (
    <button
      className="btn btn-primary"
      onClick={install}
      style={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 999,
        padding: '12px 20px',
        borderRadius: 12,
        fontSize: '0.85rem',
        boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
      }}
    >
      <HiDownload size={18} style={{ marginRight: 8 }} />
      Install App
    </button>
  )
}
