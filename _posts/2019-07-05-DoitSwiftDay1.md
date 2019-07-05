---
title: Do it Swift Day1
tags: Swift
---

<h1> 기본 문법 </h1>
- 끝에 붙는 !는 옵셔널 변수의 강제 언래핑을 의미한다.
- 변수 선언 뒤에 물음표가 붙는 것은 초기값을 선언하지 않은 경우 값이 없을 수 있다는 의미로 붙여주는 것이다. 옵셔널이라는 개념으로 변수가 nil이거나
  값의 존재여부를 알 수 없다는 것을 의미한다.
- let는 상수, var는 변수




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



<h1>ImageView에 image파일 설정하기 </h1>

```java
//변수의 선언
 var imgOn : UIImage?
 
   override func viewDidLoad() {
       super.viewDidLoad()
       imgOn = UIImage(named: "lamp_on.png")
       imgView.image = imgOn
   }
```
- viewDidLoad 함수 : 내가 만든 뷰를 불러왔을 때 호출되는 함수. 부모 클래스인 UIViewController클래스에 선언되어 있음. 뷰가 불러지고 난 후에
  실행하고자 하는 기능이 필요할 때 이 함수내에 코드를 입력하면 된다.
  
  
  <h1> switch toggle </h1>

```java
@IBAction func switchImageOnOff(_ sender: UISwitch) {
        if sender.isOn {
            imgView.image = imgOn
        }else{
            imgView.image = imgOff
        }
    }
```

- sender.isOn : Toggle Switch가 켜져있는 상태

 <h1> 배열의 선언 </h1>
 
 배열을 선언하는 법과 배열의 사이즈를 가져오는 법
 
```java
  var imageName = ["01.png", "02.png", "03.png", "04.png", "05.png", "06.png"]
  imageName.count   
```

  
  
  
  <h1> 기본 데이터 자료형 </h1>
  
  | 타입                 | 특징                                                                      | 예제                     |
|----------------------|---------------------------------------------------------------------------|--------------------------|
| Bool                 | 참 또는 거짓을 표현                                                       | True, False              |
| Int, Int32, Int64    | 분수를 제외한 큰수를 표현하는데 32 또는 64비트 음수나 양수의 정수값 사용  | 4, 543, -674837, 5745    |
| Int8, Int16          | 분수를 제외한 작은수를 표현하는데 8 또는 16비트 음수나 양수의 정수값 사용 | -23, 58, 145             |
| UInt, UInt32, UInt64 | 분수를 제외한 큰수를 표현하는데 32 또는 64비트 양수 값 사용               | 5, 132, 10023            |
| UInt8, UInt16        | 분수를 제외한 작은수를 표현하는데 8또는 16비트 양수 값 사용               | 35, 86, 254              |
| Float, Double        | 음수 또는 양수의 부동 소수점 또는 분수 포함 가능                          | 11.542, -3002.5899, 17.0 |
| Character            | 단일 글자나 숫자 또는 다른 부호를 큰따옴표로 묶어서 표현                  | "T", "*", "3"            |
| String               | 일련의 문자를 큰따옴표로 묶어서 표현                                      | "Fish", "Hi"             |
  
  
  

 
  


