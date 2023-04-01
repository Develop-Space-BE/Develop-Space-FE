import { instanceAxios } from "./apiConfig";

export const kakao = async (K) => {
  console.log(K)
  try {
    const data = await instanceAxios.get(`/member/kakaologin?code=${K}`)
    console.log(data)
    return data;
  } catch(error) {
    console.log(error)
  }
}