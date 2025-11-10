import React from 'react';
import { Users, Mail, Phone, MapPin, Building, Star, Download, Eye, Hash, Layers, UserCheck, UserX, CheckCircle } from 'lucide-react';

const ResultsDisplay = ({ results, isLoading, searchParams }) => {
  if (isLoading) {
    return (
      <div className="card">
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">Buscando seus leads...</h3>
          <p className="text-gray-600 dark:text-gray-300">Isso pode levar alguns segundos</p>
        </div>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="card">
        <div className="text-center py-12">
          <Users className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">Pronto para buscar leads!</h3>
          <p className="text-gray-600 dark:text-gray-300">Configure os filtros ao lado e clique em "Buscar Leads"</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header dos Resultados */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 flex items-center">
              <Users className="h-5 w-5 text-primary-500 mr-2" />
              Leads Encontrados
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {results.length} leads qualificados encontrados
            </p>
          </div>

          <div className="flex space-x-2">
            <button className="btn-secondary flex items-center text-sm">
              <Eye className="h-4 w-4 mr-1" />
              Visualizar
            </button>
            <button className="btn-primary flex items-center text-sm">
              <Download className="h-4 w-4 mr-1" />
              Exportar
            </button>
          </div>
        </div>

        {/* Resumo da Busca */}
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-6 transition-colors duration-300">
          <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-3">Parâmetros da Busca:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            {searchParams.localizacaoLeads && (
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary-500" />
                <div>
                  <p className="font-medium text-gray-800 dark:text-gray-100">Localização dos Leads</p>
                  <p className="text-gray-600 dark:text-gray-300">{searchParams.localizacaoLeads}</p>
                </div>
              </div>
            )}
            {searchParams.localizacaoHQ && (
              <div className="flex items-start space-x-2">
                <Building className="h-4 w-4 mt-0.5 text-primary-500" />
                <div>
                  <p className="font-medium text-gray-800 dark:text-gray-100">Localização da Sede</p>
                  <p className="text-gray-600 dark:text-gray-300">{searchParams.localizacaoHQ}</p>
                </div>
              </div>
            )}
            {searchParams.industrias && searchParams.industrias.length > 0 && (
              <div className="flex items-start space-x-2">
                <Layers className="h-4 w-4 mt-0.5 text-primary-500" />
                <div>
                  <p className="font-medium text-gray-800 dark:text-gray-100">Indústrias</p>
                  <p className="text-gray-600 dark:text-gray-300">{searchParams.industrias.join(', ')}</p>
                </div>
              </div>
            )}
            {searchParams.cargosIncluidos && (
              <div className="flex items-start space-x-2">
                <UserCheck className="h-4 w-4 mt-0.5 text-primary-500" />
                <div>
                  <p className="font-medium text-gray-800 dark:text-gray-100">Cargos Incluídos</p>
                  <p className="text-gray-600 dark:text-gray-300">{searchParams.cargosIncluidos}</p>
                </div>
              </div>
            )}
            {searchParams.cargosExcluidos && (
              <div className="flex items-start space-x-2">
                <UserX className="h-4 w-4 mt-0.5 text-primary-500" />
                <div>
                  <p className="font-medium text-gray-800 dark:text-gray-100">Cargos Excluídos</p>
                  <p className="text-gray-600 dark:text-gray-300">{searchParams.cargosExcluidos}</p>
                </div>
              </div>
            )}
            {searchParams.tamanhosEmpresa && searchParams.tamanhosEmpresa.length > 0 && (
              <div className="flex items-start space-x-2">
                <Users className="h-4 w-4 mt-0.5 text-primary-500" />
                <div>
                  <p className="font-medium text-gray-800 dark:text-gray-100">Tamanho da Empresa</p>
                  <p className="text-gray-600 dark:text-gray-300">{searchParams.tamanhosEmpresa.join(', ')}</p>
                </div>
              </div>
            )}
            {searchParams.maximoLeads && (
              <div className="flex items-start space-x-2">
                <Hash className="h-4 w-4 mt-0.5 text-primary-500" />
                <div>
                  <p className="font-medium text-gray-800 dark:text-gray-100">Máximo de Leads</p>
                  <p className="text-gray-600 dark:text-gray-300">{searchParams.maximoLeads.toLocaleString('pt-BR')}</p>
                </div>
              </div>
            )}
            {searchParams.buscarApenas && (
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 mt-0.5 text-green-500" />
                <div>
                  <p className="font-medium text-gray-800 dark:text-gray-100">Qualidade</p>
                  <p className="text-gray-600 dark:text-gray-300">Apenas leads com email qualificado</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Lista de Leads */}
      <div className="grid gap-4">
        {results.map((lead) => (
          <div key={lead.id} className="card hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <Building className="h-5 w-5 text-gray-400 mr-2" />
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{lead.nome}</h4>
                  <div className="ml-auto flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{lead.score}%</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <Mail className="h-4 w-4 mr-2 text-primary-500" />
                      <span className="font-medium">{lead.email}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <Phone className="h-4 w-4 mr-2 text-primary-500" />
                      <span>{lead.telefone}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                      <span>{lead.cidade}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <Users className="h-4 w-4 mr-2 text-gray-400" />
                      <span>{lead.funcionarios} funcionários</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                    {lead.segmento}
                  </span>
                  
                  <div className="flex space-x-2">
                    <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                      Ver Detalhes
                    </button>
                    <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                      Adicionar à Lista
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer com Estatísticas */}
      <div className="card bg-gradient-to-r from-primary-50 to-orange-50 dark:from-primary-900/20 dark:to-orange-900/20 border-primary-200 dark:border-primary-700">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">{results.length}</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Leads Encontrados</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
              {Math.round(results.reduce((acc, lead) => acc + lead.score, 0) / results.length)}%
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Score Médio</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
              {results.filter(lead => lead.score > 85).length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Alta Qualidade</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsDisplay;
