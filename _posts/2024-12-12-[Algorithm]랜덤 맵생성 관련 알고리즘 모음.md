---
title : "[Algorithm] 절차적 맵생성 관련 알고리즘 정리"
categories: algorithm
tags: [algorithm, 알고리즘, 절차적 맵 생성, 푸아송 디스크, BSP, 셀룰러 오토마타, 펄린 노이즈]
---

# 맵 구조 생성 알고리즘
## 1. BSP 알고리즘
### 개념
- 공간을 재귀적으로 분할하여 트리 구조로 표현한다.
- 맵 전체를 큰 사각형으로 시작하여 이를 점점 더 작은 사각형으로 나눕니다.
- 각 사각형에 방을 배치하고, 이후 이웃하는 방들을 연결하는 통로를 생성합니다.

### 장단점
- 장점
    - 만들기 쉽다.
- 단점
    - 직사각형의 단조로운 구조를 가진다.
- 예시 : https://www.youtube.com/watch?v=FO12bZD3a5M

## 2. 셀룰러 오토마타(세포 자동자)

![a](https://github.com/user-attachments/assets/01457887-9591-47fd-a1fb-14990fcc6592)

### 개념

- 세포들이 주변에 있는 세포에 따라 자신의 상태를 변화시키는 알고리즘이다.
    - 맨 처음 세포들의 초기 상태를 벽, 빈공간으로 설정한다.
- 그후 세포를 업데이트해서 주변 세포들의 상태에 따라 세포를 새로운 상태로 업데이트한다.
    - 예를들어 자기 주변 세포들 중 벽 상태 세포가 4개 이상이면 자신도 벽으로 변한다.

### 장단점

- 장점
    - 섬, 동굴같은 구조의 맵을 생성하기 좋다.
- 단점
    - 원하는 모양의 방을 만들기 어렵다.
    - 직각 형태의 방을 만들기 힘들다.

### 예시

- https://www.youtube.com/watch?v=v7yyZZjF1z4
    - 셀룰러 오토마타 기본 개념
- https://www.youtube.com/watch?v=yOgIncKp0BE
    - 2D 마칭스퀘어를 이용한 벽 구조 생성
- https://www.youtube.com/watch?v=xYOG8kH2tF8
    - **BFS, DFS**를 이용한 방 영역 설정
- https://www.youtube.com/watch?v=eVb9kQXvEZM
    - 가장 가까운 방끼리 복도 연결
    - 방의 가장 외각 Tile들끼리 거리를 비교해서 가장 가운 곳끼리 연결한다.

## 3. TinyKeep 알고리즘

![a](https://github.com/user-attachments/assets/8a783d8c-f7a2-4f25-8671-6cdeb875607c)

- 맨 처음 방을 한곳에 몰아넣고 충돌 처리를 시켜서 밀어냅니다.
- 그 후 선별한 각 방들 중심점을 기준으로 **들로네 삼각분할**을 합니다.
- 들로네 삼각분할로 만든 선들을 이용해 **최소 신장트리**를 수행합니다.
    - 최소 신장트리는 사이클이 없으면서 모든 정점이 연결되는 트리로 모든 방이 연결된 방 구조를 생성할 수 있습니다.
    - 최소 신장트리는 크루스칼, 프림 알고리즘 두 방식이 있는데 프림이 좀 더 빠릅니다.

### 예시

- https://www.youtube.com/watch?v=rBY2Dzej03A&t=300s
    - 2D, 3D 맵 생성 알고리즘
- https://www.youtube.com/watch?v=t2ZQvJKrptc
    - 엔터더 건전 모작

## 4. PerlinNoise

![a](https://github.com/user-attachments/assets/45986986-d11b-446a-bcb9-72ffccb00916)

- 단순히 무작위 값을 나열한 노이즈가 아니라, 연속적으로 변화하는 값의 패턴의 노이즈를 생성한다.
- 주파수(Frequency), 옥타브(octave) 등 파라미터로 모양을 조정할 수 있다.
- **1. Scale**
    - **설명**:
        - 노이즈의 세부 패턴 크기를 제어합니다. 작은 값을 사용할수록 패턴이 확대되어 더 거친 구조를, 큰 값을 사용할수록 세부적이고 조밀한 패턴을 생성합니다.
    - **용도**:
        - 지형 생성에서 산맥 크기 또는 높낮이를 조정할 때 사용.
- **2. Frequency**
    - **설명**:
        - 노이즈 함수가 얼마나 자주 반복되는지를 나타내는 값입니다. 높은 주파수는 더 세부적인 패턴을, 낮은 주파수는 더 넓고 완만한 패턴을 생성합니다.
    - **용도**:
        - 여러 주파수를 조합하여 복잡한 형태의 노이즈를 생성(Octave 구조와 결합)합니다.
- **3. Amplitude**
    - **설명**:
        - 노이즈 값의 진폭, 즉 노이즈 패턴의 높낮이를 조정합니다.
        - 높은 진폭은 강한 대비를, 낮은 진폭은 더 부드러운 패턴을 만듭니다.
    - **용도**:
        - 지형의 고도 또는 물결 높이를 조정할 때 사용.
- **4. Octaves**
    - **설명**:
        - 노이즈의 "세부 레벨"을 나타냅니다. 각 옥타브는 주파수와 진폭이 다른 노이즈 계층을 추가합니다.
        - 높은 옥타브 수는 더 복잡하고 세밀한 패턴을 생성합니다.
    - **용도**:
        - 자연스러운 텍스처 생성에서 중요한 요소로, 다중 계층 효과를 제공합니다.
- **5. Persistence**
    - **설명**:
        - 옥타브 간 진폭의 감소 비율을 나타냅니다.
        - 1에 가까운 값은 각 옥타브가 비슷한 영향을 미치며, 작은 값은 고주파 노이즈의 영향을 줄입니다.
    - **용도**:
        - 세부 패턴의 강도와 전체적인 부드러움 조정.
- **6. Lacunarity**
    - **설명**:
        - 옥타브 간 주파수의 증가 비율을 나타냅니다.
        - 기본값은 2로 설정되며, 값이 커질수록 고주파 패턴이 더 복잡해집니다.
    - **용도**:
        - 세밀한 구조와 큰 구조 간의 균형을 조정.
- **7. Seed**
    - **설명**:
        - 노이즈의 난수 시드를 설정하여 생성되는 패턴의 고유성을 결정합니다.
        - 동일한 시드 값은 동일한 결과를 재생성합니다.
    - **용도**:
        - 특정 노이즈 패턴을 재현하거나 고유한 텍스처를 생성.
- **8. Offset**
    - **설명**:
        - 노이즈 패턴의 기준점을 조정하여 출력 패턴을 이동합니다.
    - **용도**:
        - 다른 영역에서 새로운 패턴을 만들거나 패턴의 시작점을 조정.

```
for (int y = 0; y < mapHeight; y++) {
	for (int x = 0; x < mapWidth; x++) {

		float amplitude = 1;
		float frequency = 1;
		float noiseHeight = 0;

		for (int i = 0; i < octaves; i++) {
			float sampleX = (x-halfWidth) / scale * frequency + octaveOffsets[i].x;
			float sampleY = (y-halfHeight) / scale * frequency + octaveOffsets[i].y;

			float perlinValue = Mathf.PerlinNoise (sampleX, sampleY) * 2 - 1;
			noiseHeight += perlinValue * amplitude;

			amplitude *= persistance;
			frequency *= lacunarity;
		}

		if (noiseHeight > maxNoiseHeight) {
			maxNoiseHeight = noiseHeight;
		} else if (noiseHeight < minNoiseHeight) {
			minNoiseHeight = noiseHeight;
		}
		noiseMap [x, y] = noiseHeight;
	}
}

```

### 장점

- 알아두면 써먹을 곳이 많다.
- 지형 지물 생성 범위를 지정할 때 더 활용하기 좋다.
    - 펄린 노이즈로 특정 값 이상인 부분은 특정 바이옴으로 만들거나 낭떠러지로 표현할수 있다.

### 예시

- https://www.youtube.com/watch?v=RDQK1_SWFuc
- https://www.youtube.com/watch?v=NGc5VyhB-Fs
- https://1217pgy.tistory.com/7

# 지오메트리

## 보로노이와 들로네 삼각분할

![a](https://github.com/user-attachments/assets/df59ced5-9a4b-40e5-a9c8-6b5729d753db)

- 예전에 정리한 PPT
    - https://www.slideshare.net/slideshow/ss-251207958/251207958#8
- 아주 좋은 강좌 링크
    - https://www.habrador.com/tutorials/math/13-voronoi/
    - 깃허브
        - https://github.com/Habrador/Computational-geometry

## DCEL(Double-Connected Edge List)

![a](https://blog.kakaocdn.net/dn/nWvmp/btrvtcI04R6/XqXcOAljphmTWbtMWxju40/img.png)

위 깃허브에선 DCEL을 이용해서 들로네 삼각분할, 보로노이 다이어그램을 구현해서 DCEL 설명을 남긴다.

**DCEL** 이중 연결 가장자리 목록 혹은 **half-edge data structure** 라고도 불리는 이것은 
일반적으로 위처럼 폴리곤이 Face Vertex Edge 3개의 요소로 이루어지는 구조를 뜻하는데 각 요소의 뜻은 다음과 같다.

**Face** - 폴리곤의 내부
**Vertex** - 폴리곤의 정점
**Edge** - 폴리곤의 가장자리

![a](https://blog.kakaocdn.net/dn/c3VIrf/btrvl9gseEJ/vMstY7fARLOXpOsacKQVA0/img.png)

DCEL은 위와같은 모습이 되는데 한 폴리곤의 내부가 시계방향 혹은 반시계방향으로 정렬되 있는데 만약 모서리가 면의 경계에 있다면 그 위치에 있는 모서리는 두개이고 각 모서리를 가진 폴리곤의 회전 방향은 정 반대이다.

방향만 다른 같은 모서리가 두개있는 것이 마치 한 모서리를 반으로 가른것 같아서 half-Edge라고도 불리는 것 같다.
폴리곤을 이루는 각 요소는 다음과 같은 데이터를 가지고 있는데

**Face -** 폴리곤을 이루는 한 Edge
**Vertex -** 자신이 포함된 폴리곤의 Face, 위에 사진상에선 한 위치에 여러개의 정점이 있는데 하나로 중첩해서 구현해도 상관없다. 오히려 많은 DCEL 자료에선 여러개의 정점으로 소개하지 않는다.
**Edge -** p1Vertex, p2Vertex, prevEdge, nextEdge, oppositeEdge

Face1의 경우 E1, E2, E3중에 하나를 가지게 되고
Vertex1은 E2를 가지게 되고
Edge1은 p1으로 V3 p2로 V1 prevEdge는 E3 nextEdge는 E2 oppositeEdge는 E4가 된다.

DCEL은 도형 기하학에서 쓰이기 좋은데 예를 들어 한 메쉬가 있다고 가정했을 때 메쉬의 한 triangle를 구하려고하면 하나하나 일일이 찾는 브루트 포스 방식이 아니라 DCEL 폴리곤 데이터를 이용해 원하는 triangle을 찾아간다면 찾는데 걸리는 시간이 획기적으로 줄어들 수 있다.

### 참고자료

https://www.ics.uci.edu/~goodrich/teach/geom/notes/DCEL.pdf

# 그 밖에
## 푸아송디스크
![a](https://github.com/user-attachments/assets/2589b7d9-594e-4249-b1d6-f4fb63619a0b)
- 점을 고르게 분포시키는 알고리즘이다.
- 일반적인 랜덤 분포는 커다란 빈 부분이 생기거나 완전히 겹쳐지는 문제가 생긴다
- 각 점 사이의 거리는 최소 거리 이상이여야한다.

### 예시

- https://www.youtube.com/watch?v=7WcmyxyFO7o&t=352s
    - 푸아송 디스크 구현
- https://www.youtube.com/watch?v=NGc5VyhB-Fs
    - 펄린 노이즈, 푸아송 디스크를 이용해 랜덤맵에 나무심기

<br>
---
<br>

<div class="Reference">
<div class="callout-header"> </div>
<p>
<a href=""></a>
</p>
</div>