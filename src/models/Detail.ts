export interface MAW {
  id: number | string | undefined;
  answer: string | undefined;
}

export interface DetailData {
  id: number | string | undefined;
  nickname: string;
  answer: string | undefined;
  likeCount: number;
  liked: boolean;
}

export interface EditAnswer {
  AnswerId: number | string | undefined;
  answer: string | undefined;
}
