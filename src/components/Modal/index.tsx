import '../../styles/components/Modal/modal.sass'

import { X } from 'lucide-react'
import { ReactNode } from 'react'

interface ModalProps {
  children: ReactNode
  isOpen: boolean
  onClose: () => void
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) {
    return null
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}

        <button>
          <X onClick={onClose} className="close-icon" />
        </button>
      </div>
    </div>
  )
}
