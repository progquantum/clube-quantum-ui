export type AuthLayoutProps = {
  title?: string;
  description?: string;
  backgroundImage: string;
  backgroundPosition?: 'left' | 'right';
  bancoUm?: boolean;
};

export type ContainerProps = {
  backgroundPosition: 'left' | 'right';
};

export type ContentProps = {
  windowWidth: number;
};
