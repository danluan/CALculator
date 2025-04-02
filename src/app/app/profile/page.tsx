"use client";

import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/Label";
import { Button } from "@/components/ui/button";
import { getUserProfile, updateUserProfile } from "@/app/actions/profile";

const ProfilePage = () => {
  const [email, setEmail] = useState('');
  const [calorieGoal, setCalorieGoal] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // Carregar dados do usuário quando a página for montada
  useEffect(() => {
    const loadUserProfile = async () => {
      try {
        setLoading(true);
        const userData = await getUserProfile();
        if (userData) {
          setEmail(userData.email || '');
          setCalorieGoal(userData.caloriesGoal?.toString() || '');
        }
      } catch (error) {
        setMessage('Erro ao carregar informações do perfil.');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadUserProfile();
  }, []);

  const handleSave = async (formData: FormData) => {
    try {
      setLoading(true);
      
      await updateUserProfile({
        email: formData.get('email') as string,
        calorieGoal: Number(formData.get('calorieGoal'))
      });
      
      setMessage('Informações atualizadas com sucesso!');
    } catch (error) {
      setMessage(`Erro ao atualizar informações: ${error instanceof Error ? error.message : 'Erro desconhecido'}`);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6">Editar Perfil</h1>
      
      {loading && <p className="text-gray-500">Carregando...</p>}
      
      <form action={handleSave}>
        <div className="mb-4">
          <label htmlFor="email">Email:</label>
          <Input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="calorieGoal">Meta de Calorias:</label>
          <Input
            type="number"
            id="calorieGoal"
            name="calorieGoal"
            value={calorieGoal}
            onChange={(e) => setCalorieGoal(e.target.value)}
            required
            className="mt-1"
          />
        </div>
        <Button 
          type="submit"
          disabled={loading}
          className="w-full"
        >
          {loading ? 'Salvando...' : 'Salvar'}
        </Button>
      </form>
      
      {message && (
        <p className={`mt-4 p-2 rounded ${message.includes('Erro') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
          {message}
        </p>
      )}
    </div>
  );
};

export default ProfilePage;
