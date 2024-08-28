# Inable BE

## 1.핵심 라이브러리
### 1.1.JWT
- 사용자 인증 방식으로 JWT사용
```bash
$ npm install --save @nestjs/passport passport passport-jwt @nestjs/jwt
$ npm install --save-dev @types/passport-jwt
$ nest g module auth
$ nest g service auth
```

### 1.2.Prisma
- ORM 툴로 프리즈마 사용
- MemberDB(Mysql) 커넥션
```bash
$ npm install prisma --save-dev
$ npm install @prisma/client
```
#### 1.2.1.Prisma > DB스키마 가져오기
- 연결된 데이터베이스의 스키마를 schema.prisma에 가져옵니다.
- 로드한 스키마를 어플리케이션에 사용하기위해 prisma generate 커맨드를 사용합니다.
```bash
$ npx prisma introspect
$ npx prisma generate
```
#### 1.2.1.Prisma > DB에 스키마 반영하기
```bash
npx prisma migrate dev --name {{migration_info}}
```

## 2.실행
```bash
npm install
npm run start:dev
```

## 3.배포
- 도커라이징(member_db, auth_api)
- docker-compose를 이용하여 컨테이너 생성
