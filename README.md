# 자바스크립트 NODEJS기반 REST API 만들기
## 배열 , 모델 , *페이징*
## HOW TO MAKE AND KNOWS
### 폴더를 하나 만들어 cmd로 연결해 (php , npm , nodejs)를 설치한다


  ## HTTP 메소드를 이용하여 데이터를 호출/추가/삭제/수정할수 있다
  ### 1.GET - 데이터를 호출할떄
  ### 2.POST - 데이터를 추가할때
  ### 3.DELETE - 데이터를 삭제할떄
  ### 4.PUT - 데이터를 수정할때
  
  
  ### MVC패턴 model , view , controller
  
  
  ## DB rest-api 구성
 ### id firstName lastName email password createdAt updatedAt

## tableplus - db mysql 프로그램
## postman -개발한 API를 테스트하고, 테스트 결과를 공유하여 API 개발의 생산성을 높여주는 플랫폼
## nodemon - 파일이 변경되었을때 자동적으로 서버를 재실행시키는 명령어
## fake - 더미테이터를 관리하는 라이브러리


## DB명령어
### npm start - 서버를 실행시킨다
### sequelize - 데이터베이스에 필요한 명령어들을 보여준다
### https://sequelize.org/master/ - sequelize 공식문서
### https://jeonghwan-kim.github.io/sequalize-%EC%BF%BC%EB%A6%AC/

----------------------------------------------------------------------------------------------------
## restapi 페이징
### https://digitalbourgeois.tistory.com/54
### 사용자의 요청 정보에 대해 많은 양의 정보를 리스트 형태로 서버가 응답해야 하는 경우 페이징 처리가 필요하다.


### 한 페이지당 보여주는 페이지수 
### limit and offset = 페이지를 몇개까지 , 페이지를 몇개 뒤부터 시작하는 명령어
### totalpagecount = totalperpage / countperpage
###  `` - 벡터사인을 시용해서 ${}어떤 값을 콘솔창으로 확인할수있다
### underflow & overflow
### 페이지가 api서버가 가지고있는 갯수를 넘거나 그보다 적을떄

---------------------------------------------------------------------------------------------------------
## restapi 배포
