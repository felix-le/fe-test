export interface IBook {
  id?: number;
  name?: string;
  price?: number;
  description?: string;
  category?: string;
  thumbnail?: string;
  deleteFn?: () => void;
}
