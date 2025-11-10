import React from 'react';
import { ShieldCheck } from 'lucide-react';

const LoginScreen = ({ onLogin }) => {
  const handleGoogleLogin = () => {
    // Simulação de login com Google
    onLogin({
      name: 'Yan Pereira',
      email: 'yan.pereira@alest.com.br',
      provider: 'Google',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4">
      <div className="card max-w-md w-full text-center space-y-6">
        <div className="flex justify-center">
          <ShieldCheck className="h-12 w-12 text-primary-500" />
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Acesse sua conta</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Faça login com sua conta Google para acessar o Gerador de Leads Alest.
          </p>
        </div>
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center space-x-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 font-medium py-3 rounded-lg shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 533.5 544.3"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="#4285F4" d="M533.5 278.4c0-17.4-1.5-34.1-4.3-50.3H272v95.1h147.1c-6.3 33.8-25 62.5-53.4 81.7v68.1h86.3c50.4-46.4 81.5-114.9 81.5-194.6z" />
            <path fill="#34A853" d="M272 544.3c72.6 0 133.6-24 178.1-65.5l-86.3-68.1c-24 16.1-54.7 25.5-91.8 25.5-70.6 0-130.3-47.7-151.7-111.6H32.9v69.9C77.2 482.2 168.1 544.3 272 544.3z" />
            <path fill="#FBBC05" d="M120.3 324.6c-10.4-33.8-10.4-70 0-103.8V150.9H32.9c-42.4 84.4-42.4 184.7 0 269.1l87.4-69.9z" />
            <path fill="#EA4335" d="M272 107.7c39.5 0 75.1 13.6 103.3 40.4l77.4-77.4C405.6 24.3 344.6 0 272 0 168.1 0 77.2 62.1 32.9 150.9l87.4 69.9C141.7 155.4 201.4 107.7 272 107.7z" />
          </svg>
          <span>Entrar com Google</span>
        </button>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Ao continuar, você concorda com os Termos de Uso e a Política de Privacidade da Alest.
        </p>
      </div>
    </div>
  );
};

export default LoginScreen;
