export type User = {
  email: string;
  password: string;
  role: string;
  // Ajoute d'autres champs si besoin
};

export type UserRole = 'patient' | 'doctor' | 'admin';
