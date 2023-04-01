import { useEffect, useState } from "react";

interface useIntersectionObserverProps {
  root?: null;
  // root는 대상 객체의 가시성을 확인할 때 사용되는 뷰포트 요소다. 대상 객체의 상위 요소여야 한다.
  // 기본값은 브라우저의 뷰포트이며 null이거나 지정하지 않을 때 기본값으로 설정된다.
  rootMargin?: string;
  // rootmargin은 root가 가진 여백으로 css의 margin 속성과 유사하다.
  // root 요소 각 측멱은 수축시키거나 증가시키며 교차성을 계산하기 전에 적용된다.
  // px이나 %로 줄 수 있으며, 기본값은 0이다.
  threshold?: number;
  // threshold는 콜백이 실행될 대상 요소의 가시성 퍼센티지를 나타낸다.
  // 0은 요소가 1픽셀이라도 보이자마자 콜백을 실행하고 1.0은 요소의 모든 픽셀이 화면에 노출되기 전까지 콜백을 실행시키지 않는다.
  // 0부터 1.0까지 있으며 기본값은 0이다.
  onIntersect: IntersectionObserverCallback;
}

const useIntersectionObserver = ({
  root,
  rootMargin,
  threshold,
  onIntersect,
}: useIntersectionObserverProps) => {
  const [target, setTarget] = useState<HTMLElement | null | undefined>(null);

  // observer 등록
  // target이라는 상태값이 잇으면 IntersetionObserver를 생성해 observer에 담음
  useEffect(() => {
    if (!target) return;

    const observer: IntersectionObserver = new IntersectionObserver(
      onIntersect,
      { root, rootMargin, threshold }
    );
    // observer 관찰 시작
    observer.observe(target);
    // observer 관찰 종료
    return () => observer.unobserve(target);
  }, [onIntersect, root, rootMargin, target, threshold]);

  return { setTarget };
  // target 변경이 가능하게 setTarget을 넘겨줍니다.
};

export default useIntersectionObserver;
