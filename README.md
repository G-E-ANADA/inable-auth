# Inable BE

## JWT

```bash
$ npm install --save @nestjs/passport passport passport-jwt @nestjs/jwt
$ npm install --save-dev @types/passport-jwt
$ nest g module auth
$ nest g service auth


```

## Prisma 사용

### 설치

```bash
$ npm install prisma --save-dev
$ npm install @prisma/client
```

### DB스키마 가져오기

- 연결된 데이터베이스의 스키마를 schema.prisma에 가져옵니다.
- 로드한 스키마를 어플리케이션에 사용하기위해 prisma generate 커맨드를 사용합니다.

```bash
$ npx prisma introspect
$ npx prisma generate
```

### DB에 스키마 반영하기

```bash
npx prisma migrate dev --name {{migration_info}}
```
