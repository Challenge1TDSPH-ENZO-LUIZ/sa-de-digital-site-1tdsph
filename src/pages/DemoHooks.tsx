import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCounter } from '../hooks/useCounter';
import { useLocalStorage } from '../hooks/useLocalStorage';
import Button from '../components/Button';
import Card from '../components/Card';

const DemoHooks: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [counter, setCounter] = useLocalStorage('demo-counter', 0);
  const { count, increment, decrement, reset } = useCounter(0);

  useEffect(() => {
    document.title = 'Demo de Hooks - FIAP Frontend';
  }, []);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleCounterChange = (value: number) => {
    setCounter(value);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Demonstração de Hooks
          </h1>
          <p className="text-xl text-gray-600">
            Exemplos práticos dos hooks utilizados no projeto
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* useState Demo */}
          <Card>
            <h3 className="text-xl font-semibold mb-4">useState Demo</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Digite seu nome:
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                  className="input-field"
                  placeholder="Seu nome aqui"
                />
              </div>
              {name && (
                <div className="p-4 bg-primary-50 rounded-lg">
                  <p className="text-primary-800">
                    Olá, <strong>{name}</strong>! 👋
                  </p>
                </div>
              )}
            </div>
          </Card>

          {/* useCounter Demo */}
          <Card>
            <h3 className="text-xl font-semibold mb-4">useCounter Hook</h3>
            <div className="space-y-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary-600 mb-4">
                  {count}
                </p>
                <div className="flex justify-center space-x-2">
                  <Button onClick={decrement} variant="outline" size="sm">
                    -
                  </Button>
                  <Button onClick={increment} size="sm">
                    +
                  </Button>
                  <Button onClick={reset} variant="secondary" size="sm">
                    Reset
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* useLocalStorage Demo */}
          <Card>
            <h3 className="text-xl font-semibold mb-4">useLocalStorage Hook</h3>
            <div className="space-y-4">
              <div className="text-center">
                <p className="text-lg text-gray-600 mb-2">
                  Contador persistente:
                </p>
                <p className="text-3xl font-bold text-secondary-600 mb-4">
                  {counter}
                </p>
                <div className="flex justify-center space-x-2">
                  <Button 
                    onClick={() => handleCounterChange(counter - 1)} 
                    variant="outline" 
                    size="sm"
                  >
                    -
                  </Button>
                  <Button 
                    onClick={() => handleCounterChange(counter + 1)} 
                    size="sm"
                  >
                    +
                  </Button>
                  <Button 
                    onClick={() => handleCounterChange(0)} 
                    variant="secondary" 
                    size="sm"
                  >
                    Reset
                  </Button>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Este valor persiste no localStorage
                </p>
              </div>
            </div>
          </Card>

          {/* useEffect Demo */}
          <Card>
            <h3 className="text-xl font-semibold mb-4">useEffect Demo</h3>
            <div className="space-y-4">
              <p className="text-gray-600">
                O título da página foi alterado para "Demo de Hooks - FIAP Frontend" 
                usando useEffect.
              </p>
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="text-green-800 text-sm">
                  ✅ useEffect executado na montagem do componente
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center">
          <Button
            onClick={() => navigate('/')}
            variant="outline"
            size="lg"
          >
            Voltar para Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DemoHooks;
