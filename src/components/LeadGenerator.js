import React, { useState } from 'react';
import { Target } from 'lucide-react';
import Header from './Header';
import SearchForm from './SearchForm';
import ResultsDisplay from './ResultsDisplay';

const LeadGenerator = ({ user, onLogout }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useState({
    localizacaoLeads: '',
    localizacaoHQ: '',
    industrias: [],
    cargosIncluidos: '',
    cargosExcluidos: '',
    tamanhosEmpresa: [],
    maximoLeads: 500,
    buscarApenas: false,
  });

  const handleSearch = async (params) => {
    setIsLoading(true);
    setSearchParams(params);
    
    // Simular busca de leads
    setTimeout(() => {
      const primeiraLocalizacao = params.localizacaoLeads
        ? params.localizacaoLeads.split(',')[0].trim()
        : '';

      const mockResults = [
        {
          id: 1,
          nome: 'Tech Solutions Ltda',
          email: 'contato@techsolutions.com.br',
          telefone: '(11) 9999-8888',
          cidade: primeiraLocalizacao || 'São Paulo',
          segmento: 'Tecnologia',
          funcionarios: '50-100',
          score: 95
        },
        {
          id: 2,
          nome: 'Inovação Digital',
          email: 'vendas@inovacaodigital.com',
          telefone: '(11) 8888-7777',
          cidade: primeiraLocalizacao || 'São Paulo',
          segmento: 'Marketing Digital',
          funcionarios: '10-50',
          score: 87
        },
        {
          id: 3,
          nome: 'Consultoria Empresarial',
          email: 'info@consultoriaempresarial.com.br',
          telefone: '(11) 7777-6666',
          cidade: primeiraLocalizacao || 'São Paulo',
          segmento: 'Consultoria',
          funcionarios: '20-50',
          score: 82
        }
      ];
      
      setSearchResults(mockResults);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <Header user={user} onLogout={onLogout} />
      
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Target className="h-8 w-8 text-primary-500 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              Gerador de Leads Alest
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Configure sua busca de leads com filtros principais.
            <br />
            <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
              Mínimo de 500 leads por busca
            </span>
          </p>
          <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            <p>Logado como <span className="font-medium text-gray-700 dark:text-gray-200">{user?.name}</span></p>
            <p>{user?.email}</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <SearchForm 
              onSearch={handleSearch} 
              isLoading={isLoading}
              searchParams={searchParams}
            />
          </div>
          
          <div className="lg:col-span-2">
            <ResultsDisplay 
              results={searchResults} 
              isLoading={isLoading}
              searchParams={searchParams}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default LeadGenerator;
