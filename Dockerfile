# 첫 번째 단계: Node.js 기반 이미지를 가져와서 build-stage 라는 별칭으로 지정
FROM node:19 AS build-stage

# Vue.js 애플리케이션을 정적 파일로 제공할 디렉토리 생성 및 이동
WORKDIR /app

# package.json 파일을 복사
COPY package*.json ./

# 앱에 필요한 종속성 설치
RUN npm install

# 애플리케이션의 소스 코드를 복사
COPY . .

# 애플리케이션을 빌드하여 정적 파일 생성
RUN npm run build

# 두 번째 단계: nginx 이미지를 가져와서 production-stage 별칭으로 지정
FROM nginx as production-stage

# 첫 번째 단계에서 빌드한 정적 파일을 nginx가 호스팅하는 디렉토리로 복사
COPY --from=build-stage /app/dist /usr/share/nginx/html

# nginx 기본 설정 파일을 복사
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 컨테이너에서 오픈할 포트를 지정 (nginx 기본 포트)
EXPOSE 80

# 필요한 구성요소
# 1. 소스코드: 애플리케이션의 작동에 필요한 소스코드를 가져와야 합니다.
# 2. 종속성: 애플리케이션에 필요한 라이브러리 및 패키지를 설치해야 합니다.
# 3. 설정 파일: 서버 구성(configuration)을 위해 필요한 설정 파일을 제공해야 합니다 (예: nginx.conf).

# nginx를 실행합니다 (백그라운드 실행 옵션 중단)
CMD ["nginx", "-g", "daemon off;"]