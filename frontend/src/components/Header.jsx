import { Map } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-gray-900 to-gray-800 border-b border-gray-700 shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-3">
          <div className="bg-primary-600 p-2 rounded-lg">
            <Map className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">LeadMap</h1>
            <p className="text-sm text-gray-400">Encontre empresas sem site e conquiste novos clientes</p>
          </div>
        </div>
      </div>
    </header>
  )
}
