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

실행 결과 : ![my alternate text](/assets/helloworld.png)
