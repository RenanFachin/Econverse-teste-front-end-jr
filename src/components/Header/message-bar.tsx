import '../../styles/components/Header/message-bar.sass'

import { LucideIcon } from 'lucide-react'
import { ReactNode } from 'react'

interface MessageBarProps {
  children: ReactNode
  Icon: LucideIcon
}

export function MessageBar({ Icon, children }: MessageBarProps) {
  return (
    <div className="messages">
      <Icon size={20} />

      {children}
    </div>
  )
}
