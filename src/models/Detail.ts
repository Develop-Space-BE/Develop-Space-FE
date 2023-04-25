export interface MAW {
  id: number | string | undefined;
  answer: string;
}

export interface DetailData {
  id: number | string | undefined;
  nickname: string;
  answer: string;
  likeCount: number;
  liked: boolean;
}
