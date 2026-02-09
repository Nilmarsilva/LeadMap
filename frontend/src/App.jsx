import { useState } from 'react'
import axios from 'axios'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import ResultsTable from './components/ResultsTable'
import Loader from './components/Loader'
import { AlertCircle } from 'lucide-react'

// Configurar URL base da API
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api'

function App() {
  const [results, setResults] = useState([])
  const [stats, setStats] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [showOnlyWithoutWebsite, setShowOnlyWithoutWebsite] = useState(true)

  const handleSearch = async (query) => {
    setIsLoading(true)
    setError(null)
    setResults([])
    setStats(null)

    try {
      const response = await axios.post(`${API_URL}/search`, { query })
      
      if (response.data.success) {
        setResults(response.data.data)
        setStats(response.data.stats)
      }
    } catch (err) {
      console.error('Erro na busca:', err)
      setError(
        err.response?.data?.detail || 
        'Erro ao buscar empresas. Verifique sua conexão e tente novamente.'
      )
    } finally {
      setIsLoading(false)
    }
  }

  const handleExport = async () => {
    try {
      const leadsToExport = showOnlyWithoutWebsite 
        ? results.filter(lead => !lead.website)
        : results

      const response = await axios.post(
        `${API_URL}/export`,
        { leads: leadsToExport },
        { responseType: 'blob' }
      )

      // Criar link para download
      const url = window.URL.createObjectURL(new Blob([response.data]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', 'leadmap_export.csv')
      document.body.appendChild(link)
      link.click()
      link.remove()
      window.URL.revokeObjectURL(url)
    } catch (err) {
      console.error('Erro ao exportar:', err)
      setError('Erro ao exportar CSV. Tente novamente.')
    }
  }

  return (
    <div className="min-h-screen bg-gray-950">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="space-y-8">
          {/* Área de Busca */}
          <SearchBar onSearch={handleSearch} isLoading={isLoading} />

          {/* Filtro */}
          {results.length > 0 && (
            <div className="flex items-center gap-3 bg-gray-800 rounded-lg p-4 border border-gray-700">
              <input
                type="checkbox"
                id="filter-website"
                checked={showOnlyWithoutWebsite}
                onChange={(e) => setShowOnlyWithoutWebsite(e.target.checked)}
                className="w-4 h-4 text-primary-600 bg-gray-900 border-gray-600 rounded focus:ring-primary-500"
              />
              <label htmlFor="filter-website" className="text-sm text-gray-300 cursor-pointer">
                Mostrar apenas empresas sem website
              </label>
            </div>
          )}

          {/* Estados */}
          {isLoading && <Loader message="Buscando empresas no Google Maps..." />}
          
          {error && (
            <div className="bg-red-900/20 border border-red-700 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-semibold text-red-400 mb-1">Erro</h3>
                  <p className="text-red-300">{error}</p>
                </div>
              </div>
            </div>
          )}

          {/* Resultados */}
          {!isLoading && !error && results.length > 0 && stats && (
            <ResultsTable 
              results={results} 
              stats={stats}
              onExport={handleExport}
              showOnlyWithoutWebsite={showOnlyWithoutWebsite}
            />
          )}

          {/* Estado Inicial */}
          {!isLoading && !error && results.length === 0 && (
            <div className="bg-gray-800 rounded-xl p-12 text-center border border-gray-700">
              <div className="max-w-md mx-auto space-y-4">
                <div className="text-6xl mb-4">🔍</div>
                <h2 className="text-2xl font-bold text-white">
                  Pronto para encontrar leads?
                </h2>
                <p className="text-gray-400">
                  Digite um termo de busca acima para encontrar empresas sem site e começar a prospectar!
                </p>
                <div className="text-sm text-gray-500 mt-6">
                  <p>💡 Exemplos de busca:</p>
                  <ul className="mt-2 space-y-1">
                    <li>"advogado em São Paulo"</li>
                    <li>"clínica odontológica em Recife"</li>
                    <li>"pizzaria em Belo Horizonte"</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Rodapé */}
      <footer className="bg-gray-900 border-t border-gray-800 mt-16">
        <div className="container mx-auto px-4 py-6 text-center text-gray-500 text-sm">
          LeadMap © 2025 - Encontre empresas sem site e conquiste novos clientes
        </div>
      </footer>
    </div>
  )
}

export default App
