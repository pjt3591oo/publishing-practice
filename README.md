# 위시켓 리스트 플러그인

* 빌드

```
$ npm run build
```


* 스크립트 추가

```
<script src="./static/javascripts/mungView_plugin.js" ></script>
```

* 생성자 호출

```javascript
<script>
    const a = new MungView_plugin.view({
      el: '#view',
      data: [
        {
          title: '3D Viewer Panel 개발',   // 제목
          badges: ['verified', 'premium'], // 뱃지(신원정보 인증-verified, 평가 우수자-premium)
          price: "₩ 예상금액 8,000,000원", // 예상금액
          estimatedPeriod: "| 예상기간 60일", // 예상기간
          date: "| 등록일자 2020.04.14", // 등록일자
          explain: '[ 본 프로젝트는 클라이언트가 위시켓 이용요금을 부담합니다. ] [ 클라이언트가 직접 발주한 프로젝트입니다. ] <프로젝트 진행 방식> 자사 사무실에서 상주하여 근무가 가능한 개발자 1명을 모집하고 있습니다. - 근무 방식 : 주 5일 출근(상주) - 프로젝트 대금 지급 : 월 단위 지급 모집 인원 : 1명 - 10년 이상 : 1명 (상급이상 투입)', // 프로젝트 설명
          category: '디자인 > 어플리케이션', // 카테고리
          tags: ['Android', 'Ios', 'Node.js'], // 관련기술
          deadLine: '마감 2주전', // 남은시간
          joined: '총 1명 지원', // 지원자
          view: '아주많음',      // 노출 정도
          commends: 1,        // 댓글 수
          like: 3             // 좋아요
        }, {
          title: '3D Viewer Panel 개발',   // 제목
          badges: ['verified', 'premium'], // 뱃지(신원정보 인증-verified, 평가 우수자-premium)
          price: "₩ 예상금액 8,000,000원", // 예상금액
          estimatedPeriod: "| 예상기간 60일", // 예상기간
          date: "| 등록일자 2020.04.14", // 등록일자
          explain: '[ 본 프로젝트는 클라이언트가 위시켓 이용요금을 부담합니다. ] [ 클라이언트가 직접 발주한 프로젝트입니다. ] <프로젝트 진행 방식> 자사 사무실에서 상주하여 근무가 가능한 개발자 1명을 모집하고 있습니다. - 근무 방식 : 주 5일 출근(상주) - 프로젝트 대금 지급 : 월 단위 지급 모집 인원 : 1명 - 10년 이상 : 1명 (상급이상 투입)', // 프로젝트 설명
          category: '디자인 > 어플리케이션', // 카테고리
          tags: ['Android', 'Ios', 'Node.js'], // 관련기술
          deadLine: '마감 2주전', // 남은시간
          joined: '총 1명 지원', // 지원자
          view: '아주많음',      // 노출 정도
          commends: 1,        // 댓글 수
          like: 3             // 좋아요
        }, {
          title: '3D Viewer Panel 개발',   // 제목
          badges: ['verified', 'premium'], // 뱃지(신원정보 인증-verified, 평가 우수자-premium)
          price: "₩ 예상금액 8,000,000원", // 예상금액
          estimatedPeriod: "| 예상기간 60일", // 예상기간
          date: "| 등록일자 2020.04.14", // 등록일자
          explain: '[ 본 프로젝트는 클라이언트가 위시켓 이용요금을 부담합니다. ] [ 클라이언트가 직접 발주한 프로젝트입니다. ] <프로젝트 진행 방식> 자사 사무실에서 상주하여 근무가 가능한 개발자 1명을 모집하고 있습니다. - 근무 방식 : 주 5일 출근(상주) - 프로젝트 대금 지급 : 월 단위 지급 모집 인원 : 1명 - 10년 이상 : 1명 (상급이상 투입)', // 프로젝트 설명
          category: '디자인 > 어플리케이션', // 카테고리
          tags: ['Android', 'Ios', 'Node.js'], // 관련기술
          deadLine: '마감 2주전', // 남은시간
          joined: '총 1명 지원', // 지원자
          view: '아주많음',      // 노출 정도
          commends: 1,        // 댓글 수
          like: 3             // 좋아요
        }, {
          title: '3D Viewer Panel 개발',   // 제목
          badges: ['verified', 'premium'], // 뱃지(신원정보 인증-verified, 평가 우수자-premium)
          price: "₩ 예상금액 8,000,000원", // 예상금액
          estimatedPeriod: "| 예상기간 60일", // 예상기간
          date: "| 등록일자 2020.04.14", // 등록일자
          explain: '[ 본 프로젝트는 클라이언트가 위시켓 이용요금을 부담합니다. ] [ 클라이언트가 직접 발주한 프로젝트입니다. ] <프로젝트 진행 방식> 자사 사무실에서 상주하여 근무가 가능한 개발자 1명을 모집하고 있습니다. - 근무 방식 : 주 5일 출근(상주) - 프로젝트 대금 지급 : 월 단위 지급 모집 인원 : 1명 - 10년 이상 : 1명 (상급이상 투입)', // 프로젝트 설명
          category: '디자인 > 어플리케이션', // 카테고리
          tags: ['Android', 'Ios', 'Node.js'], // 관련기술
          deadLine: '마감 2주전', // 남은시간
          joined: '총 1명 지원', // 지원자
          view: '아주많음',      // 노출 정도
          commends: 1,        // 댓글 수
          like: 3             // 좋아요
        }
      ]
    })
    
  </script>
```