import React, { useState } from 'react';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function LogIn() {
  const [studentCode, setStudentCode] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Código Estudiantil:', studentCode);
    console.log('Contraseña:', password);
    // Aquí iría la lógica para enviar los datos al servidor
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 flex items-center justify-center bg-white p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="flex justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LogIn%20(3)-jNpreiI1hOFh8Ep9rHkQnGFOmL0c7z.png"
              alt="UCP Logo"
              className="h-20 w-auto"
            />
          </div>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="student-code" className="block text-sm font-medium text-gray-700">
                  Código Estudiantil
                </label>
                <Input
                  id="student-code"
                  name="student-code"
                  type="text"
                  required
                  className="mt-1"
                  placeholder="Ej. 123456"
                  value={studentCode}
                  onChange={(e) => setStudentCode(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Contraseña
                </label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="mt-1"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-purple-600 hover:text-purple-500">
                Olvidé mi contraseña
              </a>
            </div>
            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
              Ingresar
            </Button>
          </form>
        </div>
      </div>
      <div className="w-1/2 bg-cover bg-center" style={{backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LogIn%20(3)-jNpreiI1hOFh8Ep9rHkQnGFOmL0c7z.png')`}}>
      </div>
    </div>
  );
}