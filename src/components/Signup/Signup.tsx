import React, { useState } from 'react';

interface User {
  name?: string;
  email?: string;
  role?: string;
  password?: string;
}

interface SignupProps {}

const Signup: React.FC<SignupProps> = () => {
    const [formData, setFormData] = useState<Partial<User>>({
        email: '',
        password: '',
        role: 'patient',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev: Partial<User>) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formData.role) {
            alert('Veuillez sélectionner un type d\'utilisateur.');
            return;
        }
        // TODO: Implement backend API call to register user
        // API call would go here
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
            >
                <h2 className="text-2xl font-bold text-center mb-6">Inscription</h2>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email || ''}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Mot de passe
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password || ''}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                        Type d'utilisateur
                    </label>
                    <select
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="patient">Patient</option>
                        <option value="doctor">Docteur</option>
                        <option value="pharmacist">Pharmacien</option>
                        <option value="ambulancier">Ambulancier</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-primary text-white py-2 px-4 rounded-md hover:bg-blue-header"
                >
                    S'inscrire
                </button>
            </form>
        </div>
    );
};

export default Signup;
