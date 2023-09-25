'use strict';

/* react-for-beginners-2019 */





///* 13.0 - Deploying to Github Pages */
{
    // 배포
    //  1. gh-pages 설치
    //      - gh-pages는 웹사이트를 github page 도메인에 나타나게 해줌
    //      - github에 업로드하는 것을 허가해주는 모듈
    //          => npm i gh-pages

    //  2. URL
    //      - https://sjin7777.github.io/react-test2019

    //  3. github에 연결
    //      3-1. 확인
    //          => git remote -v
    //      3-2. 원하는 repo가 아닐경우
    //          => git remote remove origin
    //      3-3. 원하는 repo 추가
    //          => git remote add origin https://github.com/sjin7777/react-test2019.git
    //          => git remote set-url origin https://github.com/sjin7777/react-test.git

    //  4. .gitignore 파일에서 /build 제거

    //  5. gh-pages 실행
    //          => npm i gh-pages

    //  6. 웹사이트 탭 제목 변경
    //      - public > index.html > title 태그
    //      - 원하는 값으로 변경
    //          => Movie App

    //  7. package.JSON 설정 
    //      6-1. hompe page 추가
    //              => , "homepage": "https://sjin7777.github.io/react-test2019"
    //      6-2. "scripts" 부분에 추가
    //              => , "deploy": "gh-pages"
    //      6-3. build 폴더 생성하고 받기 (폴더 안에는 작성했던 코드들이 최소화 되어 있음)
    //              => npm run build
    //      6-4. build 폴더를 gh-pages에 업로드해야 하므로 수정
    //              => , "deploy": "gh-pages -d build"
    //      6-5. "scripts" 부분에 추가
    //              => , "predeploy" : "npm run build"
    //      6-6. deploy를 호출할 때마다, npm이 predeploy를 먼저 호출해줌
    //          - build 폴더를 생성하고 받자마자 업로드하기 위함
    //          - deploy는 predeploy를 호출하여 run build가 수행되고, gh-pages가 publish됨
    //              => npm run deploy

    //  8. 브라우저, github에서 확인
    //      - https://sjin7777.github.io/react-test2019


}




///* 13.1 - Are we done? */