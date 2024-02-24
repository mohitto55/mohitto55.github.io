---
title : "[C++] push_back VS emplace_back 정리"
categories: cpp
tags: [C++, std, iterator, push_back, emplace_back, vector]
---

Vector와 같은 컨테이너를 사용 할 때 요소를 삽입할 때 보통 `push_back`혹은 `emplace_back`이 있다.

## push_back
`push_back`함수는 값을 넣을 때 임시객체를 만들고 값을 복사 한 후 넣는다. 이 과정에서 임시 객체는 삭제되는데 생성자와 파괴자를 불러서 결과적으론 불필요한 연산을 하게 된다.

## emplace_back
![Pasted image 20231118233923](https://github.com/mohitto55/mohitto55.github.io/assets/154340583/4b8d30f1-47bc-45e7-b81b-e32e6e5835b5)

`emplace_back`함수는 factor template을 이용하여 삽입 변수에 따라 스스로 삽입 객체를 만들 수 있다.

이는 불 필요한 임시객체를 만들 필요가 없다.
C++17 이상부터는 삽입된 객체의 reference를 반환한다.


## emplace_back 사용의 안좋은 예
```cpp
std::vector<std::vector<int>> foo_bar;
for_bar.emplace_back(20); // no issue
```
위를 만약 `push_back`으로 넣고 싶다면 다음과 같이 사용해라
```cpp
vector<int> v{1, 2}; 
foo_bar.push_back(std::move(v));
```

if you writing next code
```cpp
foo_bar.push_back(10);
foo_bar.emplace_back(20);
```
`emplace_back`에 
하지만 아래 처럼 사용시 문제 없다.

```cpp
vector<item_t> items;
items.emplace_back("abc", 3);
cout << "item[0] : " << items[0].aa
```


## 언제 사용해야 할 까
1. 이동 코스크가 작을 때
2. 삽입 값을 reference를 반활 할 때


> https://hgu-can.tistory.com/entry/C-stdvector-pushback-vs-emplaceback-%EC%B0%A8%EC%9D%B4%EC%A0%90
> https://openmynotepad.tistory.com/10
> https://gumeo.github.io/post/emplace-back/