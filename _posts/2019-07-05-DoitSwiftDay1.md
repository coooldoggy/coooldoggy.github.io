---
title: Do it Swift Day1
tags: Swift
---

<h1> 아울렛 변수 </h1>
- @IBOutlet으로 정의된 변수를 아울렛 변수라고 부른다. 
- IB는 Interface Builder의 약자이다.
- 객체를 소스코드에서 참조하기 위해 사용하는 키워드이며, 주로 색상, 크기, 모양, 선의 두께, 텍스트 내용 등 객체의 속성을 제어하는데 사용한다.
- Strong/ Weak : 메모리 회수 정책을 나타내는 키워드. 일반적으로 객체를 참조하기 위한 아울렛 변수는 strong을 사용. weak로 선언된
  변수는 다른곳에서 참조하고 있더라도 시스템이 임의적으로 메모리에서 제거할 수 있음.
  
  ```java
    @IBOutlet weak var lblHello: UILabel!
    @IBOutlet weak var txtName: UITextField!
  ```
  
  
  
  

<h1> 액션 함수 </h1>
- @IBACtion으로 정의된 함수
- 객체의 이벤트를 제어하기 위해 사용하는 키워드
- 버튼을 누르거나, 피커가 선택되는 등, 특정 객체에서 원하는 이벤트가 발생했을 때 정해진 작업을 실행하기 위해 사용
- 끝에 붙는 !는 옵셔널 변수의 강제 언래핑을 의미한다.

```java

 @IBAction func btnSend(_ sender: UIButton) {
        lblHello.text = "Hello, " + txtName.text!
    }
    
```



<h1>ImageView의 Content Mode </h1>

1. Scale to Fill : 기본 설정 값으로, 이미지 뷰의 크기에 맞게 이미지의 가로, 세로 비율이 변경됨. 비율이 맞지 않으면 뭉개져 보임
2. Aspect Fit : 이미지의 가로 세로 비율을 유지하면서 이미지 뷰의 크기에 맞게 이미지 크기를 바꿈
3. Aspect Fill : 이미지의 비율을 유지하면서 이미지 뷰를 채움. 이미지 뷰와 이미지 비율이 맞지 않으면 이미지가 넘쳐 잘릴 수 있음
4. Center : 이미지의 원본크기를 유지하면서 이미지 중앙을 이미지뷰에 출력함
5. Top : 이미지의 원본크기를 유지한 채 이미지의 윗부분을 이미지 뷰에 출력함
6. Top Left : 이미지의 원본 크기를 유지한 채 이미지의 왼쪽 윗 부분을 이미지 뷰에 출력함 
