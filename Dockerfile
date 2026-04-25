# 1. 빌드 스테이지 (Build Stage)
# 기존 AdoptOpenJDK는 공식 지원이 종료(Deprecated)되었으므로, 
# 공식 후속 프로젝트인 Eclipse Temurin의 JDK 11을 사용합니다.
FROM eclipse-temurin:11-jdk AS builder
WORKDIR /app

# 소스코드 전체 복사 및 빌드
COPY . .
# 테스트를 생략하여 빌드 속도를 높이려면 -DskipTests를 추가하는 것이 좋습니다.
RUN ./mvnw clean package -DskipTests

# 2. 실행 스테이지 (Run Stage)
# 실행할 때는 무거운 JDK 대신 가벼운 JRE 환경을 사용하여 이미지 용량을 대폭 줄입니다.
FROM eclipse-temurin:11-jre
WORKDIR /deploy

# 빌드 스테이지(builder)에서 생성된 jar 파일만 실행 환경으로 복사합니다.
# 이름이 길면 관리하기 불편하므로 직관적인 app.jar로 이름을 변경해 줍니다.
COPY --from=builder /app/goraku-api-server/target/goraku-api-server-1.0.1.jar ./app.jar

# 8085 포트를 외부로 노출하겠다고 명시합니다 (문서화 및 포트 매핑 용도)
EXPOSE 8085

# 추가할 스프링 옵션 환경 변수
ENV SPRING_OPTION=""

# 애플리케이션 실행
# sh -c 를 사용해 환경변수($SPRING_OPTION)가 정상적으로 치환되도록 합니다.
ENTRYPOINT ["sh", "-c", "java $SPRING_OPTION -jar app.jar"]