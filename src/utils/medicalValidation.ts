// Types pour la validation médicale
export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  timestamp: string;
}

export interface PatientData {
  fullName?: string;
  dateOfBirth?: string;
  phoneNumber?: string;
  emergencyContact?: string;
  email?: string;
  address?: string;
}

export interface PrescriptionData {
  medications?: Array<{
    name?: string;
    dosage?: string;
    frequency?: string;
    duration?: string;
    instructions?: string;
  }>;
  doctorId?: string;
  patientId?: string;
  diagnosis?: string;
}

export interface ConsultationData {
  symptoms?: string[];
  diagnosis?: string;
  treatment?: string;
  notes?: string;
  vitalSigns?: {
    bloodPressure?: string;
    heartRate?: number;
    temperature?: number;
    weight?: number;
  };
}

// Validation des données patient
const validatePatientData = (data: PatientData): { errors: string[]; warnings: string[] } => {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Validation du nom complet
  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.push('Le nom complet doit contenir au moins 2 caractères');
  } else if (data.fullName.trim().length < 5) {
    warnings.push('Le nom complet semble incomplet');
  }

  // Validation de la date de naissance
  if (!data.dateOfBirth) {
    errors.push('La date de naissance est requise');
  } else {
    const birthDate = new Date(data.dateOfBirth);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    
    if (isNaN(birthDate.getTime())) {
      errors.push('Format de date de naissance invalide');
    } else if (age < 0 || age > 120) {
      errors.push('Date de naissance invalide (âge entre 0 et 120 ans)');
    } else if (age < 18) {
      warnings.push('Patient mineur - consentement parental requis');
    }
  }

  // Validation du numéro de téléphone
  if (!data.phoneNumber) {
    errors.push('Le numéro de téléphone est requis');
  } else {
    const phoneRegex = /^(\+33|0)[1-9](\d{8})$/;
    if (!phoneRegex.test(data.phoneNumber.replace(/\s/g, ''))) {
      errors.push('Format de numéro de téléphone français invalide');
    }
  }

  // Validation du contact d'urgence
  if (!data.emergencyContact) {
    errors.push('Le contact d\'urgence est requis');
  }

  // Validation de l'email
  if (data.email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      errors.push('Format d\'email invalide');
    }
  } else {
    warnings.push('Email non fourni - recommandé pour les communications');
  }

  return { errors, warnings };
};

// Validation des prescriptions
const validatePrescriptionData = (data: PrescriptionData): { errors: string[]; warnings: string[] } => {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Validation des médicaments
  if (!data.medications || data.medications.length === 0) {
    errors.push('Au moins un médicament doit être prescrit');
  } else {
    data.medications.forEach((med, index) => {
      if (!med.name || med.name.trim().length < 2) {
        errors.push(`Médicament ${index + 1}: nom requis (minimum 2 caractères)`);
      }
      
      if (!med.dosage) {
        errors.push(`Médicament ${index + 1}: dosage requis`);
      }
      
      if (!med.frequency) {
        errors.push(`Médicament ${index + 1}: fréquence requise`);
      }
      
      if (!med.duration) {
        errors.push(`Médicament ${index + 1}: durée requise`);
      }

      // Vérifications supplémentaires
      if (med.name && med.name.length < 3) {
        warnings.push(`Médicament ${index + 1}: nom très court, vérifier l'orthographe`);
      }

      if (med.dosage && !/^\d+/.test(med.dosage)) {
        warnings.push(`Médicament ${index + 1}: dosage sans quantité numérique`);
      }
    });
  }

  // Validation du diagnostic
  if (!data.diagnosis || data.diagnosis.trim().length < 5) {
    errors.push('Diagnostic requis (minimum 5 caractères)');
  }

  // Validation des IDs
  if (!data.doctorId) {
    errors.push('ID du médecin requis');
  }

  if (!data.patientId) {
    errors.push('ID du patient requis');
  }

  return { errors, warnings };
};

// Validation des consultations
const validateConsultationData = (data: ConsultationData): { errors: string[]; warnings: string[] } => {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Validation des symptômes
  if (!data.symptoms || data.symptoms.length === 0) {
    errors.push('Au moins un symptôme doit être décrit');
  } else {
    data.symptoms.forEach((symptom, index) => {
      if (!symptom || symptom.trim().length < 3) {
        errors.push(`Symptôme ${index + 1}: description trop courte`);
      }
    });
  }

  // Validation du diagnostic
  if (!data.diagnosis || data.diagnosis.trim().length < 5) {
    errors.push('Diagnostic requis (minimum 5 caractères)');
  }

  // Validation du traitement
  if (!data.treatment || data.treatment.trim().length < 10) {
    errors.push('Plan de traitement requis (minimum 10 caractères)');
  }

  // Validation des signes vitaux
  if (data.vitalSigns) {
    const { bloodPressure, heartRate, temperature, weight } = data.vitalSigns;

    if (bloodPressure) {
      const bpRegex = /^\d{2,3}\/\d{2,3}$/;
      if (!bpRegex.test(bloodPressure)) {
        errors.push('Format de tension artérielle invalide (ex: 120/80)');
      } else {
        const [systolic, diastolic] = bloodPressure.split('/').map(Number);
        if (systolic > 200 || diastolic > 120) {
          warnings.push('Tension artérielle élevée détectée');
        }
      }
    }

    if (heartRate !== undefined) {
      if (heartRate < 40 || heartRate > 200) {
        errors.push('Fréquence cardiaque invalide (40-200 bpm)');
      } else if (heartRate < 60 || heartRate > 100) {
        warnings.push('Fréquence cardiaque hors norme');
      }
    }

    if (temperature !== undefined) {
      if (temperature < 35 || temperature > 42) {
        errors.push('Température invalide (35-42°C)');
      } else if (temperature > 37.5) {
        warnings.push('Température élevée détectée');
      }
    }

    if (weight !== undefined) {
      if (weight < 1 || weight > 300) {
        errors.push('Poids invalide (1-300 kg)');
      }
    }
  }

  return { errors, warnings };
};

// Fonction principale de validation
export const validateMedicalData = (
  data: PatientData | PrescriptionData | ConsultationData, 
  type: 'patient-info' | 'prescription' | 'consultation'
): ValidationResult => {
  let errors: string[] = [];
  let warnings: string[] = [];

  try {
    switch (type) {
      case 'patient-info': {
        const patientValidation = validatePatientData(data as PatientData);
        errors = patientValidation.errors;
        warnings = patientValidation.warnings;
        break;
      }

      case 'prescription': {
        const prescriptionValidation = validatePrescriptionData(data as PrescriptionData);
        errors = prescriptionValidation.errors;
        warnings = prescriptionValidation.warnings;
        break;
      }

      case 'consultation': {
        const consultationValidation = validateConsultationData(data as ConsultationData);
        errors = consultationValidation.errors;
        warnings = consultationValidation.warnings;
        break;
      }

      default:
        errors.push('Type de validation non reconnu');
    }
  } catch (error) {
    errors.push('Erreur lors de la validation des données');
    console.error('Erreur de validation:', error);
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
    timestamp: new Date().toISOString()
  };
};

// Validation spécifique pour les urgences
export const validateEmergencyData = (data: {
  type: string;
  description: string;
  location?: string;
}): ValidationResult => {
  const errors: string[] = [];
  const warnings: string[] = [];

  if (!data.type || data.type.trim().length === 0) {
    errors.push('Type d\'urgence requis');
  }

  if (!data.description || data.description.trim().length < 10) {
    errors.push('Description de l\'urgence requise (minimum 10 caractères)');
  }

  if (!data.location) {
    warnings.push('Localisation non fournie - recommandée pour les urgences');
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
    timestamp: new Date().toISOString()
  };
};

// Validation des données de consentement
export const validateConsentData = (data: {
  consentType: string;
  granted: boolean;
}): ValidationResult => {
  const errors: string[] = [];
  const warnings: string[] = [];

  const validConsentTypes = ['medical', 'data', 'marketing'];
  
  if (!validConsentTypes.includes(data.consentType)) {
    errors.push('Type de consentement invalide');
  }

  if (typeof data.granted !== 'boolean') {
    errors.push('Statut de consentement invalide');
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
    timestamp: new Date().toISOString()
  };
};