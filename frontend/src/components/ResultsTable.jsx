import { ExternalLink, Phone, MapPin, Star, Globe, Download } from 'lucide-react'

export default function ResultsTable({ results, stats, onExport, showOnlyWithoutWebsite }) {
  // Filtrar resultados se necessário
  const filteredResults = showOnlyWithoutWebsite 
    ? results.filter(lead => !lead.website)
    : results

  const opportunitiesCount = results.filter(lead => !lead.website).length

  if (filteredResults.length === 0) {
    return (
      <div className="bg-gray-800 rounded-xl p-8 text-center border border-gray-700">
        <p className="text-gray-400 text-lg">Nenhum resultado encontrado</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Estatísticas */}
      <div className="bg-gradient-to-r from-green-900/50 to-green-800/50 rounded-xl p-6 border border-green-700">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">
              🎯 {opportunitiesCount} oportunidade{opportunitiesCount !== 1 ? 's' : ''} encontrada{opportunitiesCount !== 1 ? 's' : ''}!
            </h3>
            <p className="text-green-200">
              {stats.total} empresa{stats.total !== 1 ? 's' : ''} no total • 
              Busca em {stats.execution_time}s
            </p>
          </div>
          <button
            onClick={onExport}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
          >
            <Download className="w-5 h-5" />
            Exportar {showOnlyWithoutWebsite ? 'Sem Site' : 'Todos'} para CSV
          </button>
        </div>
      </div>

      {/* Tabela */}
      <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-900">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  Nome
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  Telefone
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  Endereço
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  Website
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  Avaliação
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  Google Maps
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {filteredResults.map((lead, index) => (
                <tr 
                  key={lead.place_id || index}
                  className="hover:bg-gray-700/50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-white">
                      {lead.name}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {lead.phone ? (
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Phone className="w-4 h-4 text-primary-500" />
                        {lead.phone}
                      </div>
                    ) : (
                      <span className="text-gray-500 text-sm">-</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {lead.address ? (
                      <div className="flex items-start gap-2 text-sm text-gray-300 max-w-xs">
                        <MapPin className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                        <span className="line-clamp-2">{lead.address}</span>
                      </div>
                    ) : (
                      <span className="text-gray-500 text-sm">-</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {lead.website ? (
                      <a
                        href={lead.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-primary-400 hover:text-primary-300 transition"
                      >
                        <Globe className="w-4 h-4" />
                        <span className="truncate max-w-[150px]">Site</span>
                      </a>
                    ) : (
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-red-900/50 text-red-300 border border-red-700">
                        Sem site
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {lead.rating ? (
                      <div className="flex items-center gap-1 text-sm text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        {lead.rating.toFixed(1)}
                      </div>
                    ) : (
                      <span className="text-gray-500 text-sm">-</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {lead.maps_url ? (
                      <a
                        href={lead.maps_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-primary-400 hover:text-primary-300 transition"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Ver
                      </a>
                    ) : (
                      <span className="text-gray-500 text-sm">-</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
