import { instanceAxios } from "./apiConfig";

export const kakao = async (K) => {
  try {
    const data = await instanceAxios.get(`/member/kakaologin?code=${K}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
