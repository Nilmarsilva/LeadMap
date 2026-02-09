import { Loader2 } from 'lucide-react'

export default function Loader({ message = 'Carregando...' }) {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <Loader2 className="w-12 h-12 text-primary-500 animate-spin mb-4" />
      <p className="text-gray-400 text-lg">{message}</p>
    </div>
  )
}
