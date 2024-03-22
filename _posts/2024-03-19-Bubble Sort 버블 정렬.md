---
title : "[Algorithm] Bubble Sort 버블정렬 알고리즘"
categories: algorithm
tags: [Algorighm, Sort, 정렬, Bubble Sort, 버블정렬]
---

## Bubble Sort
버블 정렬 알고리즘은 정렬 알고리즘 중 하나로 느리지만 간단하여 자주 쓰이는 알고리즘이다.

## 원리
- Index 0 부터 시작해서 n-i까지 비교해 자신 보다 작은 값을 보면 Swap
- 한 회차에 한번도 정렬이 안됐으면 정렬을 종료한다.

## 시간 복잡도

$$(n-1) + (n-2)... = \frac{n(n-1)}{2} = O(N^2)$$

- 비교 횟수
	- i가 n-2 일 때 비교횟수 : <font color='dodgerred'>n-2</font>
	- i가 n-1 일 때 비교횟수 : <font color='dodgerred'>n-1</font>
	- i가 1 일 때 비교횟수 : <font color='dodgerred'>1</font>

- 교환 횟수
	- 모두 정렬 되어 있을 경우 횟수 0
	- 평균 $$\frac{3n(n-1)}{4}$$

## 코드
```cpp
public void BubbleSort(){
	bool sorting = false;
	for(int last = 1; last < size && (sorting == true); last++){
		sorting = false;
		for(int cur = 0; cur < size - last; cur++){
			if(data[cur] > data[cur+1]){
				swap(data[cur], data[cur+1]);
				sorting = true;
			}
		}
	}
}
```

---

<div class="Reference">
<div class="callout-header"> </div>
<p>
<a href="https://ko.wikipedia.org/wiki/%EB%B2%84%EB%B8%94_%EC%A0%95%EB%A0%AC">https://ko.wikipedia.org/wiki/%EB%B2%84%EB%B8%94_%EC%A0%95%EB%A0%AC</a>
</p>
</div>