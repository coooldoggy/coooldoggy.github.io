# FastCampus - Kotlin 20200615



[TOC]



## Function

함수 : 명령의 로직을 구현하는 곳

코틀린 : 함수형 프로그래밍, 함수에 권한이나 의미를 더 크게 부여함



```kotlin
fun 함수명 (변수명 : 데이터형): 리턴값{
	함수 구현부 
}
```



Unit : 리턴 값이 없는 함수

인라인 함수 : 한줄로 표현가능한 함수

```kotlin
fun three(n : Int) = 3 *n
```

함수를 변수로 받는 함수 

```kotlin
fun HigherFunc(f: () -> Unit){
	f()
}
```



