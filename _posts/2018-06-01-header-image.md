---
title: Debugmode에서만 보이는 view
tags: Android
---

App을 만들때 Debug용으로 사용하기 편리한 view를 만들지만, release할 때는 보이지 않았으면 하는 기능들이 있다.

이러한 것들을 Debug모드에서만 보이게 설정해보자~~~ 


1. app의 gradle file을 설정한다.

```java

 buildTypes {
        release {
            minifyEnabled true
            signingConfig signingConfigs.release
            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
            zipAlignEnabled true
            debuggable false
            jniDebuggable false
            renderscriptDebuggable false
            buildConfigField "boolean", "DEBUG_MODE", "false"
            multiDexEnabled = true
        }
        debug {
            minifyEnabled false
            signingConfig signingConfigs.debug
            zipAlignEnabled true
            debuggable true
            jniDebuggable true
            renderscriptDebuggable true
            buildConfigField "boolean", "DEBUG_MODE", "true"
        }
    }

```

2. 소스코드에서 debug / release 모드 체크

```java
if(BuildConfig.DEBUG_MODE){
				//debug 일때
                
            }else{
				//release 일때
               
            }

```
