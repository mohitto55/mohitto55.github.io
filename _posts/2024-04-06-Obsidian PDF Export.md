---
title : "[Obsidian] CSS 적용하며 PDF로 내보내는법"
categories: obsidian
tags: [css, html, Obsidian, PDF, 옵시디언]
---

## PDF 출력
![image](https://github.com/mohitto55/mohitto55.github.io/assets/154340583/10ba20e0-7a36-4e9f-98d0-46aea8136612)

옵시디언을 통해 내용을 정리하고 다양한 기능들을 이용해 꾸민뒤 PDF로 변환해야할 때가 있다. 그런데 이상하게도 css로 열심히 꾸며도 PDF로 출력만 하면은 제대로 적용이 되지 않은채 변환되곤한다.

![image](https://github.com/mohitto55/mohitto55.github.io/assets/154340583/ee11d162-e739-44b9-b083-f7a466eb63c9)*같은 내용 다른 느낌*

어떻게든 CSS를 제대로 적용시키고 싶어서 ITEXT로 PDF로 변환도 해보고 기존 CSS를 수정하는 등 여러 시행착오를 거쳐서 변환 전 모습과 거의 비슷하게 만드는데 성공했다.

## 원인
옵시디언에선 일반적인 노트에서 적용되는 css와 PDF 출력시 적용되는 css가 따로 있다. 그렇게 PDF로 적용되는 CSS는 <font color='dodgerred'>@media print</font>라는 body 안에 작성되어야 한다. 나의 경우 AnuPpuccin 테마를 이용중인데 이 테마는 PDF 출력시 css 적용 기능을 대부분 지원하지 않고 있다. 왜 그런가 하니

> afaik this is an issue with the default theme as well, though i've made some adjustments to make it more readable in dark mode. the major problem is that the white background cannot be changed with any kind of CSS.
> - [아누푸친 개발자](https://github.com/AnubisNekhet/AnuPpuccin/issues/48)

요약하면 흰 배경을 바꾸는 기능이 없다고 하는 것인데 아마 많은 기능이 이런 이유로 지원되지 않는 듯 싶다. 그런데 찾아보니 배경 색을 바꾸는 기능이 존재하였는데 테마 개발자가 몰랐든지 뭔가 이유가 있지 않을까 싶다.

## PDF 출력 전용 CSS 작성
```css
@media print{
}
```
PDF에서 적용되는 css를 작성하기 위해선 `@media print`안에서 작성해야 한다. 그럼 이안에 테마에서 쓰는 css를 모두 복사 붙여넣기 하면 되는 것 아닌가 싶지만 아쉽게도 되지 않았다. 그래서 내용을 모두 하나 하나 작성해야하는데 다행히도 누군가 템플릿을 하나 작성해주었다.

```css
/* Obsidian snippet to style output of pdf exports
 */

@media print {

  /* set your preferred fonts here.
   */

  :root {
    --body-font-family: "Newsreader Text", TimesNewRoman, "Times New Roman", Times, Baskerville, Georgia, serif;
    --header-font-family: "Century Gothic", CenturyGothic, AppleGothic, sans-serif;
    --code-font-family: MonoLisa, Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace;
  }

  body {
    width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
    background: none;
  }

  /* If you find your font settings ae not being used for an element,
   * Add it below. You can fund the element by inspecting the document
   * in "Reading" mode in the console.
   */
  body, p, li, div.callout {
    line-height: 1.4;
    word-spacing: 1.1pt;
    letter-spacing: 0.2pt;
    font-family: var(--body-font-family);
    font-size: 12pt
  }

  /* */

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--header-font-family);
    font-weight: normal !important
  }

  h1 {
    font-size: 19pt !important
  }

  h2 {
    font-size: 17pt !important
  }

  h3 {
    font-size: 15pt !important
  }

  h4, h5, h6 {
    font-size: 12pt !important
  }

  code, code[class*="language-"],
  pre, pre[class*="language-"] {
    font-size: 10pt;
    font-family: var(--code-font-family);
    color: black !important;
    background: none !important;
  }

  pre,
  code span,
  code {
    color: black !important
  }

  code {
    border: 1px solid darkgray !important;
    padding: 0 0.2em !important;
    line-height: initial !important;
    border-radius: 4px !important
  }

  pre {
    border: 1px solid darkgray !important;
    margin: 1em 0px !important;
    padding: 0.5em !important;
    border-radius: 4px !important
  }

  pre > code {
    font-size: 12px !important;
    border: none !important;
    border-radius: 0 !important;
    border-radius: 4px !important
  }

  blockquote {
    margin: 1.3em;
    padding: 1em;
    font-size: 10pt;
    color: darkslategray !important
  }

  hr {
    background-color: #ccc
  }

  img {
    display:block;
    margin: 1em 0
  }

  a img {
    border: none
  }

  table {
    margin: 1px;
    text-align: left
  }

  th {
    border-bottom: 1px aolis #333
  }

  td {
    border-bottom: 1px solid #333
  }

  th,td, tr {
    padding: 4px 10px 4px 0;
    color: black !important;
    background: none !important
  }

  tfoot {
    font-style: italic
  }

  caption {
    background: #fff;
    margin-bottom: 2em;
    text-align: left
  }

  thead {
    display: table-header-group
  }

  tr {
    page-break-inside: avoid
  }

  a {
    text-decoration: none;
    color: black !important
  }


  a[aria-label]::after {
    display: inline !important;
    content: " (" attr(aria-label) ")" !important;
    color: slategray !important;
    font-size: 70% !important;
  }

  a[class="tag"] {
    font-weight: bold;
    font-family: var(--font-monospace);
    background: none
  }

  .callout {
    background: none;
    border-width: 1px;
    border-color: rgba(var(--callout-color), 0.75)
  }

  /* -=-=-=-=-=-=-
   * Specific to custom checkboxes in @kepano's minimal theme
   */
  li[data-task="/"]>input:checked::after,
  input[type=checkbox]:checked::after {
    background-color: black
  }

  input[type=checkbox]:checked {
    background: none
  }

  ul>li.task-list-item[data-task="x"] {
    color: black
  }

  li[data-task="!"]>input:checked::after,
  li[data-task="*"]>input:checked::after,
  li[data-task='"']>input:checked::after,
  li[data-task="l"]>input:checked::after,
  li[data-task="b"]>input:checked::after,
  li[data-task="i"]>input:checked::after,
  li[data-task="S"]>input:checked::after,
  li[data-task="I"]>input:checked::after,
  li[data-task="p"]>input:checked::after,
  li[data-task="c"]>input:checked::after,
  li[data-task="f"]>input:checked::after,
  li[data-task="k"]>input:checked::after,
  li[data-task="w"]>input:checked::after,
  li[data-task="u"]>input:checked::after,
  li[data-task="d"]>input:checked::after,
  li[data-task="?"]>input:checked::after {
    background: none !important;
    -webkit-mask-image: none !important
  }
  /* -=-=-=-=-=-=- */

}
```
[CSS 템플릿](https://gist.github.com/ScottKillen/499246e2f44fc1b59d8ff3795311f21f?permalink_comment_id=4503094)

이것만으로도 많은 경우를 커버할 수 있지만 저것만으론 부족하다 그래서 다른 기능들도 추가로 작성해야한다.

---

### 백그라운드 컬러
```css
  .print .markdown-preview-view {
    background-color: #1E1E2E;
    color: var(--text-normal);
  /* -=-=-=-=-=-=- */
}
```
배경 색상을 바꾼다.

---

### 코드블럭 색상
```css
/*코드블럭 색상 변경*/
  code, code[class*="language-"],
  pre, pre[class*="language-"] {
    font-size: 10pt;
    font-family: var(--code-font-family);
    color: #79C1CF !important;
    background: none !important;
    background-color: #11111B !important;
    margin: 0px !important;
  }


.token.block-comment,
.token.cdata,
.token.comment,
.token.doctype,
.token.prolog {
    color: #B2BADD !important;
}

.token.punctuation,
.token.class-name {
    color: #B2BADD !important;
}

.token.boolean,
.token.constant,
.token.deleted,
.token.function-name,
.token.number,
.token.property,
.token.symbol,
.token.tag {
    color: #79C1CF !important;
}

.token.entity,
.token.operator,
.token.url{
  color: #DF809B !important;
}

.token.keyword {
  color: #EEBCE1 !important;
}

.token.attr-name,
.token.builtin,
.token.char,
.token.function,
.token.inserted,
.token.selector,
.token.string,
.token.variable
 {
    color: #EED8A8 !important;
}

.token.atrule,
.token.attr-value,
.token.class-name {
  /*EED8A8*/
    color: #79C1CF !important;
}

.token.important,
.token.regex {
    color: #e90
}
```
코드블럭 내부에 있는 다양한 글자 색상을 변경한다.

---
### Bold, Italic 체 색상
```css
  strong{
    color :#DF809B !important;
  }

  /*이태릭 색깔 정하기*/
  em{
    color:#A5E1A0 !important;
  }
```

---
### 콜아웃 색상
```css
  .callout {
    background: none;
    border-width: 0px;
  }
  .callout[data-callout=warning]{
    --ctp-background-yellow: rgba(249, 226, 175, 0.15) !important;
    color : rgba(249, 226, 175, 1) !important;
    border-left-color: rgba(249, 226, 175, 1) !important;
    background-color: var(--ctp-background-yellow) !important;
  }
  .callout[data-callout=warning] .callout-title{
    color: rgba(249, 226, 175, 1) !important;
    --callout-color : rgba(249, 226, 175, 1) !important;
  }

  .callout[data-callout=warning] .callout-title .callout-title-inner{
    color: rgba(249, 226, 175, 1) !important;
  }

  .callout[data-callout=info]{
    --ctp-background-blue : rgba(148,226,213, 0.15) !important;
    color : #94E2D5 !important;
    border-left-color: #94E2D5 !important;
    background-color: var(--ctp-background-blue) !important;
  }
  .callout[data-callout=info] .callout-title{
    color: #94E2D5 !important;
    --callout-color : #94E2D5 !important;
  }
  .callout[data-callout=info] .callout-title .callout-title-inner{
    color: #94E2D5 !important;
  }
```
콜아웃의 색을 변경한다.

---
### 임베드
```css
  a.external-link {
    position: relative;
    color: var(--link-color) !important;
  }
  
  a.external-link:after {
    display: none !important;
  }
```
하이퍼링크의 색상변경과 실제 주소를 가려준다.

---

<div class="Reference">
<div class="callout-header"> </div>
<p>
<a href="https://gist.github.com/ScottKillen/499246e2f44fc1b59d8ff3795311f21f?permalink_comment_id=4503094">https://gist.github.com/ScottKillen/499246e2f44fc1b59d8ff3795311f21f?permalink_comment_id=4503094</a>
<a href="https://forum.obsidian.md/t/how-to-style-the-pdf-with-media-print/9673">https://forum.obsidian.md/t/how-to-style-the-pdf-with-media-print/9673</a>
<a href="https://kaminik.tistory.com/entry/CSS-Snippet-%EC%BD%94%EB%93%9C%EB%B8%94%EB%A1%9D-%EC%8A%A4%ED%83%80%EC%9D%BCLight-mode">https://kaminik.tistory.com/entry/CSS-Snippet-%EC%BD%94%EB%93%9C%EB%B8%94%EB%A1%9D-%EC%8A%A4%ED%83%80%EC%9D%BCLight-mode</a>
<a href="https://github.com/AnubisNekhet/AnuPpuccin/issues/48">https://github.com/AnubisNekhet/AnuPpuccin/issues/48</a>
<a href="https://forum.squarespace.com/topic/180631-how-do-you-change-color-of-italic-text-using-css/">https://forum.squarespace.com/topic/180631-how-do-you-change-color-of-italic-text-using-css/</a>
<a href="https://forum.obsidian.md/t/external-link-hover-view-url/2876/4">https://forum.obsidian.md/t/external-link-hover-view-url/2876/4</a>
</p>
</div>