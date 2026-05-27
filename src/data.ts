// Handbook specific helper constants and utilities

export const RECOMMENDATIONS_2T = {
  ratio_1_40: {
    name: '1 en 40 (2.5%)',
    description: 'Relación recomendada por la mayoría de las marcas de hobbistas. Brinda excelente lubricación protectora.',
    percentage: 0.025
  },
  ratio_1_50: {
    name: '1 en 50 (2.0%)',
    description: 'Relación típica para marcas premium (Stihl, Husqvarna) usando aceites de altísima gama sintéticos.',
    percentage: 0.020
  }
};

export function calculateMixture(liters: number, ratio: '1_40' | '1_50'): number {
  const percentage = RECOMMENDATIONS_2T[`ratio_${ratio}`]?.percentage || 0.025;
  // returns milliliters of oil required
  return liters * 1000 * percentage;
}

export const COMMON_CHAINS = [
  { brand: 'Stihl Chica (MS 170 / 180)', pitch: '3/8', gauge: 1.1, links: 50, desc: 'Espada de 35 cm (14 pulgadas)' },
  { brand: 'Stihl Mediana (MS 180 / 210)', pitch: '3/8', gauge: 1.3, links: 55, desc: 'Espada de 40 cm (16 pulgadas)' },
  { brand: 'Hobbista Genérica Chica', pitch: '3/8', gauge: 1.3, links: 52, desc: 'Espada de 35 cm (14 pulgadas)' },
  { brand: 'Husqvarna Hobbista (120/130)', pitch: '3/8', gauge: 1.3, links: 52, desc: 'Espada de 35 cm (14 pulgadas) perfil bajo' },
  { brand: 'Motosierra China Flia 45cc/52cc', pitch: '.325', gauge: 1.5, links: 64, desc: 'Espada de 40 cm (16 pulgadas)' },
  { brand: 'Motosierra China Flia Grande 52cc/58cc', pitch: '.325', gauge: 1.5, links: 72, desc: 'Espada de 45 cm (18 pulgadas)' }
];
