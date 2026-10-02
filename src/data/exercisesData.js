export const initialExercises = [
  {
    id: "1",
    name: "Press de Banca con Barra",
    category: "Pecho",
    sets: 4,
    reps: "10-12 repeticiones",
    duration: 12,
    mediaUrl: 
"https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=500",
    videoUrl: "https://www.youtube.com/watch?v=example1",
    additionalImageUrls: [
      
"https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=500"
    ],
    description: "Ejercicio compuesto enfocado en el desarrollo de los músculos pectorales, tríceps y deltoides anteriores."
  },
  {
    id: "2",
    name: "Sentadillas libres",
    category: "Piernas",
    sets: 4,
    reps: "8-10 repeticiones",
    duration: 15,
    mediaUrl: 
"https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=500",
    videoUrl: "https://www.youtube.com/watch?v=example2",
    additionalImageUrls: [
      
"https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=500"
    ],
    description: "Ejercicio fundamental para el tren inferior que trabaja cuádriceps, glúteos, isquiotibiales y la zona core."
  },
  {
    id: "3",
    name: "Dominadas",
    category: "Espalda",
    sets: 3,
    reps: "Al fallo",
    duration: 10,
    mediaUrl: 
"https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=500",
    videoUrl: "https://www.youtube.com/watch?v=example3",
    additionalImageUrls: [],
    description: "Ejercicio con el peso corporal ideal para fortalecer el dorsal ancho, los bíceps y mejorar la fuerza de agarre."
  }
];

export const weeklyRoutine = {
  Lunes: { title: "Piernas y Pecho", exerciseIds: ["1", "2"] },
  Martes: { title: "Espalda", exerciseIds: ["3"] },
  Miércoles: { title: "Descanso / Cardio", exerciseIds: [] },
  Jueves: { title: "Piernas y Pecho", exerciseIds: ["1", "2"] },
  Viernes: { title: "Espalda", exerciseIds: ["3"] },
  Sábado: { title: "Libre", exerciseIds: [] },
  Domingo: { title: "Descanso Total", exerciseIds: [] }
};
