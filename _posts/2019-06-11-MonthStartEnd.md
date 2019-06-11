---
title: 현재 월의 시작일과 마지막일 구하기
tags: Java
---

날짜를 이용해 검색하는 화면에서 Default로 현재 월의 시작일과 마지막일을 넣어 검색하고자 할 때,
원하는 DateFormat에 맞춰 출력하는 법을 찾지 못해 헤매이다 겨우 성공!

```java
        
        Calendar calendar = Calendar.getInstance();
        
        //현재 날짜로 설정
        int year = calendar.get(Calendar.YEAR);
        int month = calendar.get(Calendar.MONTH);
        
        //현재 달의 시작일과 마지막일 구하기
        int start = calendar.getActualMinimum(Calendar.DAY_OF_MONTH);
        int end = calendar.getActualMaximum(Calendar.DAY_OF_MONTH);
        
        //DateFormat에 맞춰 String에 담기
        
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd", Locale.KOREA);
        calendar.set(year, month, start);
        String startdate =  dateFormat.format(calendar.getTime());
        calendar.set(year, month, end);
        String enddate = dateFormat.format(calendar.getTime());
```

