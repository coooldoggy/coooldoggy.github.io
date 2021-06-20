---
layout: article
titles:
  en      : &EN       About
  en-GB   : *EN
  en-US   : *EN
  en-CA   : *EN
  en-AU   : *EN
  zh-Hans : &ZH_HANS  关于
  zh      : *ZH_HANS
  zh-CN   : *ZH_HANS
  zh-SG   : *ZH_HANS
  zh-Hant : &ZH_HANT  關於
  zh-TW   : *ZH_HANT
  zh-HK   : *ZH_HANT
  ko      : &KO       소개
  ko-KR   : *KO
key: page-about
---


```java
public class About {
	public static void main(String[] args) {
		System.out.println("what I love : ");
		ArrayList<String> items = loveitem();
		for(int i=0; i<items.size(); i++) {
			System.out.println(items.get(i));
		}
	}
	
	private static ArrayList<String> loveitem() {
		ArrayList<String> items = new ArrayList<>();
		items.add("cat🐱");
		items.add("swimming🏊🏻‍♀️");
		items.add("workout🏋🏻‍♀️");
		items.add("electronics📱");
		items.add("pizza🍕");
		
		return items;
	}
}
```


