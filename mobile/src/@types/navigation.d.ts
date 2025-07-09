// src/@types/navigation.d.ts
export type RootStackParamList = {
  Home: undefined;
  Points: { uf: string; city: string };
  Details: { point_id: number }; // exemplo com parâmetro, pode ser undefined se não quiser
};
