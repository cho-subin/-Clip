# CLIP

## 💻 프로젝트 소개
- 여러 쇼핑몰을 한 곳에 모아 사용자들이 좀 더 쉽게 다양한 쇼핑몰에 접근할 수 있도록 만든 쇼핑몰 사이트입니다.
<br/>

## 🧑‍🤝‍🧑 멤버
<table style="text-align: center">
<tr>
<td colspan="5">Front-End</td>
<td colspan="5">Back-End</td>
</tr>
<tr>
<td>육동영</a></td>
<td>김승규</a></td>
<td>조수빈</a></td>
<td>김희진</a></td>
<td>문지은</a></td>
<td>함다빈</a></td>
<td>문종현</a></td>
<td>민경원</a></td>
<td>유재준</a></td>
<td>김채현</a></td>
</tr>
<tr>
<td><img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/></td>
<td><img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/></td>
<td><img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/></td>
<td><img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/></td>
<td><img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/></td>
<td><img src="https://img.shields.io/badge/Springboot-6DB33F?style=flat-square&logo=Springboot&logoColor=white"/></td>
<td><img src="https://img.shields.io/badge/Springboot-6DB33F?style=flat-square&logo=Springboot&logoColor=white"/></td>
<td><img src="https://img.shields.io/badge/Springboot-6DB33F?style=flat-square&logo=Springboot&logoColor=white"/></td>
<td><img src="https://img.shields.io/badge/Springboot-6DB33F?style=flat-square&logo=Springboot&logoColor=white"/></td>
<td><img src="https://img.shields.io/badge/Springboot-6DB33F?style=flat-square&logo=Springboot&logoColor=white"/></td>
</table>

<br/>

## 📆 프로젝트 기간
- 2023.08 ~ 2023.09
<br/>

## 📖 사용기술 및 라이브러리
- `TypeScript`  `React` `StompJs` `Recoil`  `Axios` `Emotion`  `React-Query` 
<br/>

## 🔔 내가 참여한 주요 기능
### 공통 컴포넌트
- 프론트엔드 개발자들과의 협업을 위한 공통 컴포넌트 개발로 개발 리소스 절약 및 컴포넌트 추상화를 적용했습니다.
- 개발 리소스를 줄이기 위해 회의를 통해 공통으로 사용되는 컴포넌트를 선별 후 맡은 공통 컴포넌트를 개발했습니다.
- 개발 리로스 절약과 컴포넌트 추상화 및 단일 책임 원칙 기반으로 클린 코드를 작성하려고 노력했습니다.

#### 1. Button 공동 컴포넌트 ([소스코드](https://github.com/cho-subin/-Clip/blob/dev/src/components/common/Button/Button.tsx))
<details>
<summary>공동 컴포넌트 과정</summary>

<img width="500" alt="스크린샷 2023-10-23 오후 6 20 57" src="https://github.com/cho-subin/-Clip/assets/100771469/58c0ce50-8706-49b1-983d-d5a17fed6557">
<br/>
<br/> <img width="477" alt="스크린샷 2023-10-23 오후 6 26 06" src="https://github.com/cho-subin/-Clip/assets/100771469/70d4a573-b716-4ff6-982b-5fdc9be8557b">

- 피그마에서 사용할 버튼들을 모아서 비슷한 모양끼리 정리 후 정리한 버튼들을 토대로 variant, size, color,width를 기준으로 추상화 계획을 세웠습니다.
<br/> 
<br/> <img width="491" alt="스크린샷 2023-10-23 오후 6 42 17" src="https://github.com/cho-subin/-Clip/assets/100771469/be6abf53-1347-464a-8cc8-501af260f714">
<br/> <img width="387" alt="스크린샷 2023-10-23 오후 6 43 27" src="https://github.com/cho-subin/-Clip/assets/100771469/fc660405-6ccf-481a-b9ea-f90d8640b609">

- 이렇게 사용할 컴포넌트에 Button 컴포넌트 import와 props로 원하는 버튼의 설정을 내려주어 컴포넌트에 요구되는 버튼을 생성할 수 있었습니다.
</details>

#### 2. Catagory 공동 컴포넌트 ([소스코드](https://github.com/cho-subin/-Clip/blob/dev/src/components/common/Category/Category.tsx))
<details>
<summary>공동 컴포넌트 과정</summary>
<img width="500" alt="스크린샷 2023-10-23 오후 6 50 37" src="https://github.com/cho-subin/-Clip/assets/100771469/c0a1b79e-5987-43bd-bb69-a04e1183a4b0">
<br/>
  
- Catagory ui는 동일하고 안의 내용과 icon이 달라지기 때문에 icon, title, onClick(클릭했을때 이동할 주소), options(category의 하위 category list)를 기준으로 추상화 계획을 세웠습니다.
<br/> 
<br/> <img width="287" alt="스크린샷 2023-10-23 오후 7 08 00" src="https://github.com/cho-subin/-Clip/assets/100771469/02db9d8b-9ed4-4ffa-a8b7-b724634b6772">
<br/> <img width="287" alt="스크린샷 2023-10-23 오후 7 09 26" src="https://github.com/cho-subin/-Clip/assets/100771469/b0aa976f-0294-4c05-97ce-a700cac11649">

- 이렇게 사용할 컴포넌트에 category 컴포넌트 import와 props로 원하는 상위, 하위 카테고리의 설정을 내려주어 컴포넌트에 요구되는 카테고리들을 생성할 수 있었습니다.
</details>

### 모바일 퍼스트 ui
<img width="576" alt="스크린샷 2023-10-23 오후 7 29 57" src="https://github.com/cho-subin/Clip/assets/100771469/73153b7b-bdd5-4ca7-bcf9-9c335205eaa6">

- 유저가 쇼핑몰을 접속할때 웹 / 모바일 비중 데이터 관련 서치를 통해 모바일로 접속하는 유저가 약 2배이상 많다는것을 알게되었습니다.
- 그로인해 clip 프로젝트도 유저의 사용성, 접근성 향상을 위해 모바일 퍼스트 ui로 진행하게 되었습니다.

### TypeScript 채택
개발 생산성 향상 및 서비스 안정화를 위해 TypeScript를 채택했습니다. 그리고 컴포넌트에서 필요한 데이터에 대한 타입을 더 체계적으로 관리하기 위해, 컴포넌트 핵심 데이터 타입을 별도로 분리하여 관리하였습니다. 또한, omit 및 pick과 같은 TypeScript의 유틸리티 타입을 적극적으로 활용하여, 타입 관리를 더 효율적으로 수행하였습니다. 이를 통해 코드의 가독성을 향상시키고, 잠재적인 버그를 줄일 수 있었습니다. 

### 판매자와 구매자의 실시간 1:1 채팅
**1. StompJS를 이용한 실시간 채팅 구현**<br/>
상세페이지에서 실시간으로 판매자와 구매자 간에 메시지를 주고받을 수 있는 기능을 구현하는 것이 목표였습니다. 그래서 Stompjs 웹 소켓 프로토콜을 지원하는 라이브러리를 통해 WebSocket 객체를 생성하고 stompjs의 Client 객체를 초기화하여 서버와의 웹 소켓 연결을 설정했습니다. 그리고 subscribe() 함수를 사용하여 특정 주제에 대한 메시지를 구독하고 publish()함수를 사용하여 특정 주제에 메시지를 전송하여 상대방에게 메시지를 보낼 수 있었습니다. 프론트엔드 개발을 담당했기 때문에, 채팅창 UI를 구현하는 것도 저의 역할 중 하나였습니다. 사용자가 메시지를 입력하고 전송할 수 있는 입력창을 만들고, 수신된 메시지를 화면에 표시하는 기능을 구현했습니다. 이를 통해 사용자들은 서로에게 실시간으로 메시지를 주고받을 수 있었습니다.<br/>

**2. 서비스 로직과 UI 로직 분리**<br/>
커스텀 훅을 이용해서 소프트웨어 개발 중 중요한 원칙 중 하나인 단일 책임 원칙을 위해 비즈니스 논리와 데이터 처리에 관련된 서비스 로직과 사용자 인터페이스 상호작용과 화면 렌더링에 관련된 UI로직을 분리해 각자의 역할에 집중할 수 있도록 했습니다. 

### 상세페이지 리뷰 작성과 삭제 구현
**1. 리뷰 작성과 삭제 구현**<br/>
리뷰 작성 및 삭제 기능을 구현하여 사용자들이 실제 구매한 상품에 대한 리뷰를 작성하고 삭제할 수 있도록 구현하였습니다. 리뷰 작성 기능에서는 별점, 리뷰 내용, 그리고 이미지를 업로드하기 위해 FormData를 사용하였습니다. 이를 통해 사용자들은 자신의 경험과 평가를 다양한 요소로 표현할 수 있게 되었습니다. 또한, 신뢰성 있는 리뷰를 유지하고, 사용자들이 구매한 상품에 대한 경험을 바탕으로 리뷰를 작성할 수 있도록 유저가 상품을 구매한 경우에만 해당 상품에 대한 리뷰를 작성할 수 있도록 구현하였습니다.<br/>

**2. react query 적용**<br/>
React Query를 활용하여 리뷰 관련 데이터를 효율적으로 처리했습니다. **리뷰 작성, 삭제, 조회 등의 기능을 구현하면서 React Query의 강력한 기능을 활용하여 데이터 캐싱, 상태 관리, 비동기 API 호출 등을 원활하게 처리**했습니다. 이를 통해 애플리케이션의 성능과 사용자 경험을 크게 향상시킬 수 있었습니다.
<br/>
React Query의 캐싱 기능을 활용하여 중복된 API 요청을 최소화하고, 데이터를 로컬에 저장함으로써 불필요한 네트워크 요청을 줄였습니다. 또한, React Query의 **Query와 Mutation 컴포넌트를 통해 데이터 요청과 업데이트를 간단하고 효율적으로 관리**했습니다. 이를 통해 코드의 가독성과 유지보수성이 향상되었고, 개발 과정에서 생산성을 크게 높일 수 있었습니다.


## 🔔 프로젝트 기여도
https://github.com/supercoding-commerce/FE/graphs/contributors
