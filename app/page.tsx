'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    endereco: '',
  });
  
  const [feedback, setFeedback] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Simulação de validação e envio de dados
    if (formData.nome && formData.email) {
      setFeedback('Cadastro realizado com sucesso!');
      setFormData({ nome: '', email: '', telefone: '', endereco: '' }); // Limpar o formulário
    } else {
      setFeedback('Por favor, preencha todos os campos obrigatórios.');
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24" style={{ backgroundColor: '#1a1a1a' }}>
      <div className="max-w-md w-full p-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-center text-2xl font-semibold mb-6" style={{ color: '#FFA500' }}>Cadastro de Clientes</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input 
              type="text" 
              name="nome" 
              value={formData.nome} 
              onChange={handleChange} 
              placeholder="Nome Completo" 
              className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:border-orange-500" 
              required 
            />
          </div>
          <div className="mb-4">
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="E-mail" 
              className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:border-orange-500" 
              required 
            />
          </div>
          <div className="mb-4">
            <input 
              type="tel" 
              name="telefone" 
              value={formData.telefone} 
              onChange={handleChange} 
              placeholder="Telefone" 
              className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:border-orange-500" 
            />
          </div>
          <div className="mb-6">
            <input 
              type="text" 
              name="endereco" 
              value={formData.endereco} 
              onChange={handleChange} 
              placeholder="Endereço" 
              className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:border-orange-500" 
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-orange-500 text-white font-semibold py-3 rounded-lg hover:bg-orange-600 transition"
          >
            Cadastrar
          </button>
        </form>
        {feedback && <p className="mt-4 text-center text-red-400">{feedback}</p>}
      </div>

      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-gray-800 to-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          By{' '}
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={100}
            height={24}
            priority
          />
        </a>
      </div>
    </main>
  );
}
