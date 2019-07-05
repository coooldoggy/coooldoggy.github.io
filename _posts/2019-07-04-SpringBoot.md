---
title: Spring Boot 강의 노트
tags: SpringBoot
---

<h1>Dependency Injection(의존성 주입) </h1>


[![Video Label](http://img.youtube.com/vi/Eqi-hYX50MI/0.jpg)](https://youtu.be/EEqi-hYX50MI?t=0s)

Spring Boot에서 @AutoWired @Component를 쓰는 이유는 객체간의 의존성을 줄여 유지보수가 용이하게 하기 위함이다.


<h1> Hello World 출력 </h1>

- @RestController : 해당 클래스가 REST 컨트롤러 기능을 수행하도록 한다
- @RequestMapping : 해당 메소드를 실행할 수 있는 주소를 설정한다.

```java
@RestController
public class HelloController {

    @RequestMapping("/")
    public String hello(){
        return "Hello World!";
    }
}
```
 ![my alternate text](/assets/helloworld.png)
 
 - @SpringBootApplication : 세개의 어노테이션으로 구성되어 있음
    1. @EnableAutoConfiguration : 다양한 설정들이 자동으로 완료됨
    2. @ComponentScan : 컴포넌트 검색 기능을 활성화해서 자동으로 여러가지 컴포넌트 클래스를 검색하고, 검색된 컴포넌트 및 빈 클래스를 스프링 애플리케이션 
       컨텍스트에 등록하는 역할을 함. 
    3. @Configuration : 자바 기반 설정 파일임을 의미한다. @SpringBootApplication에  직접적으로 포함되어 있지 않고, @SpringBootConfiguration이        라는 어노테이션에 포함되어있는데 이 어노테이션이 @SpringBootApplication에 포함되어 있음.
    
    
<h1> MVC Pattern </h1>

- Model, View, Controller 의 구조
- Model : 애플리케이션의 정보, 즉 데이터를 의미
- View : 사용자 인터페이스, 사용자가 보고 사용하는 화면
- Controller : 모델과 뷰의 중계역할, 사용자의 요청을 파악하고 그에 맞는 결과를 사용자에게 돌려준다.


 ![my alternate text](/assets/mvc.png)

 ![my alternate text](/assets/Spingmvc.png)
 
 - View : 사용자가 보는 화면 또는 결과
 - Controller : 사용자가 브라우저를 통해서 요청을 하면 그 요청을 처리할 컨트롤러를 호출함. 컨트롤러는 사용자의 요청을 처리하기 위한 비즈니스 로직을 호출하고, 
                그 결과값을 사용자에게 전달해 주는 역할을 함
 - Service : 사용자의 요청을 처리하기 위한 비즈니스 로직이 수행 됨. 일반적으로 서비스 영역은 서비스 인터페이스와 이 인터페이스의 구현체로 나누어 진다.
 - DAO : Data Access Object의 약자. 데이터베이스에 접속해서 비즈니스 로직 실행에 필요한 쿼리 호출
 - DB : 데이터베이스. 애플리케이션에서 발생한 모든 정보가 저장되어 있음. 
 
 

    
    
