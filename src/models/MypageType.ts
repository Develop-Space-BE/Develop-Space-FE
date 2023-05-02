export interface MypageProps {
  bookmarkP: boolean;
  commentP: boolean;
  likeP: boolean;
}

export interface UserImpormation {
  id: number;
  email: string;
  nickname: string;
  profileImg: string;
}

export interface Comment {
  id: string | number;
  nickname: string;
  answer: string;
  content: string;
}
