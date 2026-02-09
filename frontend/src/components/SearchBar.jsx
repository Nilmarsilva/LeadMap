import { useState } from 'react'
import { Search } from 'lucide-react'

export default function SearchBar({ onSearch, isLoading }) {
  const [query, setQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (query.trim().length >= 3) {
      onSearch(query)
    }
  }

  return (
    <div className="bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="search" className="block text-sm font-medium text-gray-300 mb-2">
            Digite o tipo de negócio e cidade
          </label>
          <div className="relative">
            <input
              id="search"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder='Ex: "advogado em São Paulo" ou "clínica odontológica em Recife"'
              className="w-full px-4 py-3 pl-12 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
              disabled={isLoading}
              minLength={3}
              required
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
          </div>
        </div>
        
        <button
          type="submit"
          disabled={isLoading || query.trim().length < 3}
          className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-gray-700 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
        >
          {isLoading ? 'Buscando...' : 'Buscar Empresas'}
        </button>
      </form>
    </div>
  )
}
