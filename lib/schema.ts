export type ImageData = {
  id: number;
  download_url: string;
};

export type Products = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  disabled?: Boolean;
};
