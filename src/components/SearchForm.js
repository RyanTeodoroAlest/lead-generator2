import React, { useState } from 'react';
import {
  Search,
  MapPin,
  Building2,
  Layers,
  UserCheck,
  UserX,
  Users,
  Hash,
  Filter,
  CheckCircle,
} from 'lucide-react';

const SearchForm = ({ onSearch, isLoading, searchParams }) => {
  const [formData, setFormData] = useState({
    localizacaoLeads: '',
    localizacaoHQ: '',
    industrias: [],
    cargosIncluidos: '',
    cargosExcluidos: '',
    tamanhosEmpresa: [],
    maximoLeads: 500,
    buscarApenas: false,
  });

  const [isIndustriaOpen, setIsIndustriaOpen] = useState(false);
  const [isTamanhoOpen, setIsTamanhoOpen] = useState(false);

  const industriaOptions = [
    'Tecnologia',
    'Marketing',
    'Serviços Financeiros',
    'Saúde',
    'Varejo',
    'Educação',
    'Manufatura',
  ];

  const tamanhoEmpresaOptions = [
    '1-10 funcionários',
    '11-50 funcionários',
    '51-200 funcionários',
    '201-500 funcionários',
    '501-1.000 funcionários',
    '1.001-5.000 funcionários',
    '+5.000 funcionários',
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleMultiSelectChange = (field, options) => {
    const values = Array.from(options).map(option => option.value);
    setFormData(prev => ({
      ...prev,
      [field]: values,
    }));
  };

  const toggleArrayValue = (field, value) => {
    setFormData(prev => {
      const hasValue = prev[field].includes(value);
      const updated = hasValue
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value];
      return {
        ...prev,
        [field]: updated,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(formData);
  };

  return (
    <div className="card">
      <div className="flex items-center mb-6">
        <Filter className="h-5 w-5 text-primary-500 mr-2" />
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Configuração da Busca</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Localização dos Leads e Sede */}
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <MapPin className="h-4 w-4 inline mr-1" />
              Localização dos Leads
            </label>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
              Localização do contato. Separar por vírgula.
            </p>
            <input
              type="text"
              placeholder="Ex: Brasil, São Paulo, Dublin"
              className="input-field"
              value={formData.localizacaoLeads}
              onChange={(e) => handleInputChange('localizacaoLeads', e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <Building2 className="h-4 w-4 inline mr-1" />
              Localização da Sede (HQ)
            </label>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
              Localização da empresa. Separar por vírgula.
            </p>
            <input
              type="text"
              placeholder="Ex: Brasil, United States"
              className="input-field"
              value={formData.localizacaoHQ}
              onChange={(e) => handleInputChange('localizacaoHQ', e.target.value)}
            />
          </div>
        </div>

        {/* Indústrias */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            <Layers className="h-4 w-4 inline mr-1" />
            Indústrias
          </label>
          <button
            type="button"
            onClick={() => setIsIndustriaOpen(prev => !prev)}
            className="w-full flex items-center justify-between px-3 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <span>
              {formData.industrias.length > 0
                ? `${formData.industrias.length} indústria(s) selecionada(s)`
                : 'Clique para selecionar uma ou mais indústrias'}
            </span>
            <svg
              className={`h-4 w-4 transform transition-transform duration-200 ${isIndustriaOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isIndustriaOpen && (
            <div className="mt-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg max-h-60 overflow-y-auto">
              {industriaOptions.map((option) => {
                const checked = formData.industrias.includes(option);
                return (
                  <label
                    key={option}
                    className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-gray-300 rounded"
                      checked={checked}
                      onChange={() => toggleArrayValue('industrias', option)}
                    />
                    <span>{option}</span>
                  </label>
                );
              })}
            </div>
          )}
        </div>

        {/* Cargos */}
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <UserCheck className="h-4 w-4 inline mr-1" />
              Cargos (Cargos Incluídos)
            </label>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
              Separar cargos por vírgula.
            </p>
            <input
              type="text"
              placeholder="Ex: CEO, Diretor, Gerente de Marketing"
              className="input-field"
              value={formData.cargosIncluidos}
              onChange={(e) => handleInputChange('cargosIncluidos', e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <UserX className="h-4 w-4 inline mr-1" />
              Cargos Excluídos
            </label>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
              Separar cargos a excluir por vírgula.
            </p>
            <input
              type="text"
              placeholder="Ex: Estagiário, Trainee, Assistente"
              className="input-field"
              value={formData.cargosExcluidos}
              onChange={(e) => handleInputChange('cargosExcluidos', e.target.value)}
            />
          </div>
        </div>

        {/* Tamanho da Empresa */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            <Users className="h-4 w-4 inline mr-1" />
            Tamanho da Empresa
          </label>
          <button
            type="button"
            onClick={() => setIsTamanhoOpen(prev => !prev)}
            className="w-full flex items-center justify-between px-3 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <span>
              {formData.tamanhosEmpresa.length > 0
                ? `${formData.tamanhosEmpresa.length} porte(s) selecionado(s)`
                : 'Clique para selecionar um ou mais portes'}
            </span>
            <svg
              className={`h-4 w-4 transform transition-transform duration-200 ${isTamanhoOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isTamanhoOpen && (
            <div className="mt-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg max-h-60 overflow-y-auto">
              {tamanhoEmpresaOptions.map((option) => {
                const checked = formData.tamanhosEmpresa.includes(option);
                return (
                  <label
                    key={option}
                    className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-gray-300 rounded"
                      checked={checked}
                      onChange={() => toggleArrayValue('tamanhosEmpresa', option)}
                    />
                    <span>{option}</span>
                  </label>
                );
              })}
            </div>
          )}
        </div>

        {/* Máximo de Leads */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            <Hash className="h-4 w-4 inline mr-1" />
            Máximo de Leads
          </label>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
            Máximo: 10.000 leads.
          </p>
          <input
            type="number"
            min="1"
            max="10000"
            step="100"
            className="input-field"
            value={formData.maximoLeads}
            onChange={(e) => handleInputChange('maximoLeads', Number(e.target.value))}
          />
        </div>

        {/* Checkbox */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="buscarApenas"
            className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-gray-300 rounded"
            checked={formData.buscarApenas}
            onChange={(e) => handleInputChange('buscarApenas', e.target.checked)}
          />
          <label htmlFor="buscarApenas" className="ml-2 text-sm text-gray-700 dark:text-gray-300 flex items-center">
            <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
            Buscar apenas leads com email qualificado
          </label>
        </div>

        {/* Botão de Busca */}
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full btn-primary flex items-center justify-center py-3 ${
            isLoading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Buscando Leads...
            </>
          ) : (
            <>
              <Search className="h-4 w-4 mr-2" />
              Buscar Leads
            </>
          )}
        </button>

        {/* Informação adicional */}
        <div className="text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Busca otimizada para vendas • Resultados em tempo real
          </p>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
