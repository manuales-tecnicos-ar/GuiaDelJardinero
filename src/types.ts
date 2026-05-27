export interface ChainSpecification {
  pitch: '3/8' | '.325' | '.404' | '1/4';
  gauge: 1.1 | 1.3 | 1.5 | 1.6;
  links: number;
}

export interface MixtureResult {
  gasolineLiters: number;
  oilMilliliters: number;
  ratio: string;
}

export interface LoomStatus {
  id: string;
  title: string;
  status: 'ok' | 'warning' | 'danger';
  message: string;
}
