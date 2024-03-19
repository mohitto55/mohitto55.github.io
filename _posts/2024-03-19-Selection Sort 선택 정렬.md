---
title : "[Algorithm] Selection Sort 선택정렬 알고리즘"
categories: algorithm
tags: [Algorighm, Sort, 정렬, Selection Sort, 선택정렬]
---

## Selection Sort
선택정렬 알고리즘은 제자리 정렬 알고리즘 중 하나로 입력 데이터 외 추가 데이터가 필요하지 않은 알고리즘이다.

## 원리
- 정렬하고자 하는 데이터 중 가장 큰 데이터의 맨 끝 데이터랑 교환
1. 0번 째 Index부터 N-i까지 차례로 순회한다.
2. 순회를 하던 중 값이 Index < Index +1 일 경우 가장 큰 값을 Index + 1이라 한다.
3. 순회를 마쳤으면 마지막 값이랑 <font color='dodgerred'>가장 큰 값</font>이랑 교환한다.
4. i를 1 올리고 다시 0부터 순회한다.

## 시간 복잡도

$$(n-1) + (n-2)... = \frac{n(n-1)}{2} = O(N^2)$$

- 비교 횟수
- i가 n-2 일 때 비교횟수 : <font color='dodgerred'>n-2</font>
- i가 n-1 일 때 비교횟수 : <font color='dodgerred'>n-1</font>
- i가 1 일 때 비교횟수 : <font color='dodgerred'>1</font>

- 교환 횟수
	- 외부 루프의 실행 횟수와 동일
	- Swap시 3번의 데이터 이동 발생

## 코드
```cpp
public void SelectionSort(){
	for(int last = 0; last < size; last++){
		int largestIndex = 0;
		for(int cur = 0; cur < size - last; cur++){
			if(data[largestIndex] > data[cur]){
				largestIndex = cur;
			}
		}
		swap(data[largestIndex], data[cur]);
	}
}
```

---

<div class="Reference">
<div class="callout-header"> </div>
<p>
<a href="https://gmlwjd9405.github.io/2018/05/06/algorithm-selection-sort.html">https://gmlwjd9405.github.io/2018/05/06/algorithm-selection-sort.html</a>
<a href="https://ko.wikipedia.org/wiki/%EC%84%A0%ED%83%9D_%EC%A0%95%EB%A0%AC">https://ko.wikipedia.org/wiki/%EC%84%A0%ED%83%9D_%EC%A0%95%EB%A0%AC</a>
</p>
</div>