<h1 align="left">
  <img src="https://github.com/ChloeLee01/lawmang_front/blob/main/src/assets/Logo3.png" alt="Lawmang Logo" width="40" />
  <span style="position: relative; top: -10px;">Lawmang Web Page v1.0</span>
</h1>


> **코드랩 아카데미 AICC 4기 2팀**  
> **개발기간: 2025. 01. 21 ~ 2025. 04. 15**


## 👩‍👩‍👧‍👦 웹개발팀 소개
> **이영선**, **황현지**, **천서영**, **박준호**, **김용주**


## 배포 주소
> **프론트 서버** : https://lawmang-front.vercel.app<br>
> **백엔드 깃허브 주소** : https://github.com/hyeonji423/lawmang_back


## 📚 목차

- [🏛️ 프로젝트 소개](#-프로젝트-소개)
- [🚀 시작 가이드](#-시작-가이드)
- [🧱 기술 스택](#-stacks)
- [🖥️ 화면 구성](#-화면-구성)
- [✨ 주요 기능](#-주요-기능)
- [📄 구성 파일](#-구성-파일)
- [🗂️ 아키텍쳐](#-아키텍쳐)


---
## 🏛️ 프로젝트 소개
“법은 여전히 어렵고 멀게 느껴집니다. 

Lawmang은 사용자가 자신의 사건을 정리하고, 쟁점을 이해하며, 스스로 판단할 수 있도록 돕는 AI 기반 법률지원 서비스입니다. 

GPT, LangChain, 벡터 검색을 활용해 기술의 복잡함은 감추고, ‘이해 중심’의 경험을 제공합니다.”


## 🚀 시작 가이드
### Requirements
For building and running the application you need:
- [Node.js v20.18.0](https://nodejs.org/ko/download/package-manager)
- [Npm 10.8.2](https://www.npmjs.com/package/npm/v/9.2.0)
### Installation
> **Frontend**
``` Frontend
$ git clone https://github.com/ChloeLee01/lawmang_front.git
$ cd lawmang_front
```
```
$ npm install
$ npm start
```

---
## 🧱 기술 스택

### Development
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)

### Tooling
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)

### Package Manager
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)


---
## 🖥️ 화면 구성
<table>
  <tr>
    <th style="background-color: #fff; text-align: center;">메인 페이지</th>
    <th style="background-color: #fff; text-align: center;">상담사례 페이지</th>
  </tr>
  <tr>
    <td><img width="380" src="https://github.com/ChloeLee01/lawmang_front/blob/main/src/assets/github/%EC%BA%A1%EC%B3%901.png"/></td>
    <td><img width="380" src="https://github.com/ChloeLee01/lawmang_front/blob/main/src/assets/github/%EC%BA%A1%EC%B3%902.png"/></td>
  </tr>
  <tr>
    <th style="background-color: #fff; text-align: center;">판례 페이지</th>
    <th style="background-color: #fff; text-align: center;">법률 서식 미리보기</th>
  </tr>
  <tr>
    <td><img width="380" src="https://github.com/ChloeLee01/lawmang_front/blob/main/src/assets/github/%EC%BA%A1%EC%B3%903.png"/></td>
    <td><img width="380" src="https://github.com/ChloeLee01/lawmang_front/blob/main/src/assets/github/%EC%BA%A1%EC%B3%904.png"/></td>
  </tr>
  <tr>
    <th style="background-color: #fff; text-align: center;">AI 리포트 페이지</th>
    <th style="background-color: #fff; text-align: center;">My 페이지</th>
  </tr>
  <tr>
    <td><img width="380" src="https://github.com/ChloeLee01/lawmang_front/blob/main/src/assets/github/%EC%BA%A1%EC%B3%905.png"/></td>
    <td><img width="380" src="https://github.com/ChloeLee01/lawmang_front/blob/main/src/assets/github/%EC%BA%A1%EC%B3%90%206.png"/></td>
  </tr>
</table>


---
## ✨ 주요 기능

### ✅ 챗봇 검색 기능  
* **법률용어 검색**: 일상 속에서 접하는 생소한 법률용어를 쉽고 간단하게 설명해드립니다.  
* **법률 상담**: 사용자 질문을 바탕으로 관련 법률 정보를 안내해드립니다.

### ✅ 판례 검색 및 요약 보기 기능  
* **판례 검색**: 키워드를 입력하면 관련 판례를 빠르게 검색할 수 있습니다.  
* **판례 요약 보기**: 복잡한 판례를 AI가 핵심만 정리해줘 한눈에 내용을 파악할 수 있습니다.

### ✅ 상담사례 검색 기능  
* **상담사례 검색**: 실제 상담 데이터를 기반으로 유사한 사례를 찾아볼 수 있어, 자신의 상황과 비교해볼 수 있습니다.

### ✅ 법률 서식 미리보기 및 다운로드  
* **서식 미리보기**: 필요한 법률 서식을 다운로드하기 전, 미리보기 모달에서 내용을 확인할 수 있습니다.  
* **서식 다운로드**: 필요한 서식을 파일로 내려받아 직접 활용할 수 있습니다.

### ✅ 메모 작성 및 열람 목록 기능  
* **메모 작성**: 중요한 법률용어나 상담 내용을 마이페이지에서 직접 정리하고 저장할 수 있습니다.  
* **열람 목록**: 최근에 확인한 법률 정보나 상담 사례를 자동으로 기록하여 다시 쉽게 찾아볼 수 있습니다.

### ✅ 법률상식 콘텐츠 제공  
* **법률 카드뉴스**: 자주 접하는 법률 상황을 카드뉴스 형식으로 쉽고 빠르게 이해할 수 있습니다.  
* **법률상식 유튜브 추천**: 다양한 사례와 주제를 담은 유튜브 영상으로 법률 지식을 자연스럽게 익힐 수 있습니다.


---
## 📄 구성 파일

| 기능                   | 설명                                       | 주요 파일/디렉토리                          |
|------------------------|--------------------------------------------|---------------------------------------------|
| 페이지 라우팅            | 전체 서비스의 라우팅을 관리                 | `App.js`, `index.js`                        |
| 화면 구성 컴포넌트       | 로그인, AI리포트, 상담 등 주요 UI 모듈 구성     | `components/*`                              |
| 챗봇 시스템 관리         | 챗봇 UI 및 테스트 관련 컴포넌트 구성           | `chatbot/*`, `chatbot/Chatbot_test/*`       |
| 홈 화면 구성            | 카드뉴스, FAQ, 유튜브 등 메인 요소 관리        | `Home/*`                                    |
| 정적 리소스 관리         | 이미지, 영상, 아이콘 등 정적 파일 관리         | `assets/*`                                  |
| 상수 및 데이터 파일      | 카드뉴스, 문서 구조, FAQ 등 프론트 고정 데이터 | `constants/*`                               |
| 상태 관리               | Redux 기반 전역 상태 관리                    | `redux/slices/*`, `redux/store.js`          |
| 스타일 및 설정           | Tailwind 설정, 전역 스타일, 린트 설정         | `tailwind.config.js`, `index.css`, `.eslintrc.js` |
| 정적 웹페이지 리소스     | HTML 템플릿, 파비콘, manifest 등              | `public/*`                                   |


---
## 🗂️ 아키텍쳐
### 디렉토리 구조
```bash
│
└── front : 프론트엔드
    │
    ├── README.md
    │
    ├── public
    │   ├── template_pdfs  
    │   ├── favicon.ico
    │   ├── index.html
    │   └── manifest.json
    ├── src
    │   ├── assets
    │   │   ├── github
    │   │   ├── template
    │   │   ├── icon-180.png
    │   │   ├── loading.gif
    │   │   ├── Logo1.PNG
    │   │   ├── main.video.mp4
    │   │   └── open_license.jpg
    │   │ 
    │   ├── chatbot
    │   │   ├── Chatbot_test
    │   │   └── Chatbot.jsx
    │   │
    │   ├── components
    │   │   ├── AIReport : AI Report 페이지 관련 컴포넌트
    │   │   ├── Auth : 로그인,회원가입 관련 컴포넌트
    │   │   ├── Consultation : 상담사례 페이지 관련 컴포넌트
    │   │   ├── MyLog : 마이 페이지의 메모, 열람목록 관련 컴포넌트
    │   │   ├── Precedent : 판례 페이지 관련 컴포넌트
    │   │   ├── Template : 법률 서식 페이지 관련 컴포넌트
    │   │   └── HighlightText.jsx
    │   │
    │   ├── constants
    │   │   ├── cardnewsdata.js
    │   │   ├── document_structure.json
    │   │   └── FAQdata.js
    │   │
    │   ├── Home
    │   │   ├── CardList.jsx
    │   │   ├── Cardnews.jsx
    │   │   ├── FAQ.jsx
    │   │   ├── Footer.jsx
    │   │   ├── Header.jsx
    │   │   ├── Main.jsx
    │   │   └── Youtube.jsx
    │   │
    │   ├── redux
    │   │   ├── slices
    │   │   └── store.js
    │   │
    │   ├── App.js
    │   ├── index.js
    │   └── index.css
    │ 
    ├── tailwind.config.js
    │
    ├── .eslintrc.js
    │
    └── package.json

```
