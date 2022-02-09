export interface Dataset {
  borderColor?: string;
  backgroundColor?: string;
  label: string;
  data: Array<{ x: number; y: number; }>
}