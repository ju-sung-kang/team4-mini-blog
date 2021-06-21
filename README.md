# 전산학특강 4팀 프로젝트 - 미니 블로그

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).



## Description

글 작성, 정렬, 댓글, 좋아요 등의 기능이 포함된 블로그 서비스입니다



## Environment

자바스크립트를 기반으로 리액트, 파이어베이스를 사용해 개발

VSCode에서 npx create-react-app 명령어 입력 후 git clone 하여 사용



## Prerequisites

* react

+ react-router-dom

+ styled-components

+ query-string

+ firebase

+ marked



## Components

`footer`

블로그 하단에 프로필, 게시판, 날씨 정보 표시

`header`

블로그 대문. 누르면 메인 페이지로 이동

`post-list`

DB에서 표시할 글 목록을 가져와 메인 페이지에 표시

`reply`

DB에서 특정 글의 좋아요 수, 댓글을 가져와 글 페이지에 표시



## Pages

`main`

메인 페이지. 디폴트로 설정해놓은 카테고리의 글 목록 표시

`settings`

설정 페이지. 프로필 정보, 카테고리 정보 수정 가능

`view-posting`

특정 글을 보는 페이지. 글 제목, 내용, 좋아요, 댓글 표시

`write-posting`

글 작성 페이지. MARKDOWN을 이용한 글 작성 가능



## Usage

### 기능 정리

* 글 작성 (마크 다운 형식, 글 대표 이미지 설정 가능)

+ 글 삭제 (글 제목을 입력해야 삭제 가능)

+ 좋아요

+ 댓글 작성 (닉네임, 비밀번호 입력 필수)

+ 댓글 수정, 삭제 (비밀번호를 알아야 가능)

+ 카테고리별 글 정리

+ 카테고리 이름 수정, 삭제 (카테고리 제목을 입력해야 삭제 가능)

+ 메인에 노출시킬 기본 카테고리 설정

+ 블로그명, 소개글, 닉네임 설정

+ 프로필 이미지, 배너 이미지 설정 (설정 안 할 시 기본 이미지 제공)

+ 사용자 접속 지역 날씨 정보 제공
