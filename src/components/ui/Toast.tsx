import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Info, AlertTriangle } from 'lucide-react'

export interface ToastMessage {
  id: string
  title: string
  description?: string
  type?: 'success' | 'info' | 'warning'
}

interface ToastProps {
  toasts: ToastMessage[]
  onDismiss: (id: string) => void
}

export const ToastContainer: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  return (
    <div className="fixed bottom-6 right-6 z-[10000] flex flex-col gap-3 pointer-events-none">
      <AnimatePresence>
        {toasts.map((t) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            onClick={() => onDismiss(t.id)}
            className="pointer-events-auto flex items-start gap-3 bg-[#0d0d15]/95 backdrop-blur-md border border-[#ff442b]/40 rounded-xl p-4 shadow-[0_10px_35px_rgba(0,0,0,0.8)] text-slate-100 max-w-sm cursor-pointer hover:border-[#ff442b]"
          >
            {t.type === 'info' ? (
              <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            ) : t.type === 'warning' ? (
              <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            ) : (
              <CheckCircle2 className="w-5 h-5 text-[#ff442b] shrink-0 mt-0.5" />
            )}
            <div className="flex-1">
              <h4 className="font-space text-xs font-semibold uppercase tracking-wider text-white">
                {t.title}
              </h4>
              {t.description && (
                <p className="font-sans text-xs text-slate-400 mt-0.5">
                  {t.description}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
