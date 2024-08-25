# Home Test App

배포 주소: [Deployment](https://frontend-simple-app.vercel.app/)

## 버전

- Node >= 20 (20.3.0)
- Npm >= 9 (9.6.7)

## 설치방법

```javascript
// 패키지 파일 다운로드
npm i
// 설치되지 않는 경우
npm install --legacy-peer-deps
// 실행
npm start
// 혹은
npm run start
```

## CI / CD 배포방법

- main 브랜치 머지시 자동 배포

## Features

### TypeScript

- 명시적인 타입 지정으로 변수, 함수등의 선언 의도를 명확하게 할 수 있기 때문에 사용했습니다.

### Eslint

- 코드의 버그를 조기에 발견하고, 일관된 코딩 스타일을 유지하여 코드 품질을 위해 사용했습니다.

## 폴더구조

```
./src
├── App.css
├── App.tsx
├── apis
│   ├── axios
│   │   ├── index.ts
│   │   ├── main.ts
│   │   └── type.ts
│   └── image
│       ├── index.ts
│       └── urls.ts
├── components
│   ├── Divider
│   │   ├── index.tsx
│   │   └── type.ts
│   ├── ErrorBoundary
│   │   ├── ErrorBoundary.tsx
│   │   └── index.ts
│   ├── Icon
│   │   ├── Icons
│   │   │   ├── AccountCircle.tsx
│   │   │   ├── Add.tsx
│   │   │   ├── AddCircle.tsx
│   │   │   ├── ArrowBack.tsx
│   │   │   ├── ArrowDown.tsx
│   │   │   ├── ArrowDownFill.tsx
│   │   │   ├── ArrowDownS.tsx
│   │   │   ├── ArrowDropDown.tsx
│   │   │   ├── ArrowDropDownFill.tsx
│   │   │   ├── ArrowDropLeft.tsx
│   │   │   ├── ArrowDropLeftFill.tsx
│   │   │   ├── ArrowDropRight.tsx
│   │   │   ├── ArrowDropRightFill.tsx
│   │   │   ├── ArrowDropUp.tsx
│   │   │   ├── ArrowDropUpFill.tsx
│   │   │   ├── ArrowLeftS.tsx
│   │   │   ├── ArrowLeftSFill.tsx
│   │   │   ├── ArrowRight.tsx
│   │   │   ├── ArrowRightS.tsx
│   │   │   ├── ArrowRightSFill.tsx
│   │   │   ├── ArrowUp.tsx
│   │   │   ├── ArrowUpS.tsx
│   │   │   ├── ArrowUpSFill.tsx
│   │   │   ├── ArrowUpdown.tsx
│   │   │   ├── DeleteFill.tsx
│   │   │   └── index.tsx
│   │   ├── PressableIcon
│   │   │   ├── constant.ts
│   │   │   ├── index.tsx
│   │   │   └── type.ts
│   │   ├── index.tsx
│   │   └── type.ts
│   ├── Masonry
│   │   ├── index.tsx
│   │   └── type.ts
│   ├── Menu
│   │   ├── MenuButton
│   │   │   ├── index.tsx
│   │   │   ├── type.ts
│   │   │   └── util.ts
│   │   ├── MenuList
│   │   │   ├── index.tsx
│   │   │   └── type.ts
│   │   ├── index.tsx
│   │   └── type.ts
│   ├── Scroll
│   │   ├── index.tsx
│   │   └── type.ts
│   ├── Spinner
│   │   ├── Spinner.tsx
│   │   └── index.ts
│   ├── Text
│   │   ├── index.tsx
│   │   └── type.ts
│   └── Toast
│       ├── index.tsx
│       └── type.ts
├── containers
│   ├── CatViewer
│   │   ├── CatViewerImageContainer.tsx
│   │   └── type.ts
│   └── WorkingHours
│       ├── WorkingHourWeekDayContainer.tsx
│       ├── WorkingHoursContainer.tsx
│       ├── WorkingHoursTimeSelector.tsx
│       └── type.ts
├── index.css
├── index.tsx
├── lib
│   ├── constant.ts
│   ├── list.ts
│   └── text.ts
├── logo.svg
├── pages
│   └── main
│       ├── CatViewer.tsx
│       ├── WorkingHours.tsx
│       └── index.ts
├── stores
│   ├── hooks.ts
│   ├── index.ts
│   ├── modal
│   │   ├── selector.ts
│   │   └── slice.ts
│   ├── toast
│   │   ├── selector.ts
│   │   └── slice.ts
│   └── workingHours
│       ├── selector.ts
│       └── slice.ts
├── themes
│   ├── ResetStyle.tsx
│   ├── colors.ts
│   ├── globalStyles.ts
│   └── style.ts
└── types
    ├── common.ts
    └── react.ts

```

## Eslint

- VsCode 확장 탭 내 Prettier ESLint 설치
- 작동되지 않는다면 User setting.json에 다음을 설정

```json
{
  "editor.defaultFormatter": "rvest.vs-code-prettier-eslint",
  "editor.formatOnType": false,
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "editor.formatOnSaveMode": "file",
  "files.autoSave": "onFocusChange",
  "vs-code-prettier-eslint.prettierLast": false
}
```

## 코드스니펫 설정 (선택)

### 설정방법

- 상단 애플로고 옆 Code 클릭 (Mac 기준 VsCode)
- 기본설정 내 사용자 코드 조각 구성 선택
- typescript.json / typescriptreact.json 내 아래 코드를 추가 혹은 설정

```
{
  "web-ui text component": {
			"prefix": "wtext",
			"body": [
				"<Text",
				"  fontSize=$1",
				"  fontWeight=$2",
				"  color={COLORS.$3}",
				">",
				"  $4",
				"</Text>"
			]
		},
  "web-ui divider component": {
			"prefix": "wdivider",
			"body": [
				"<Divider",
				"  horizontal={$1}",
				"  vertical={$2}",
				"  backgroundColor={$3}",
				"/>",
			]
		},
}
```

### 사용법

- 필요한 컴포넌트의 prefix를 입력

```
// ex text component
wtext
```

- 아래와 같이 자동완성 되며 import 하여 사용

```
    <Text
      fontSize=
      fontWeight=
      color={COLORS.}
    >

    </Text>
```
