import React from 'react';
import styled from 'styled-components';
import TopBar from '../Components/Common/TopBar';
import Post from '../Components/Common/Post/Post';
import Comments from '../Components/Post/Comments';
import LogoGraySmall from '../Assets/Icon/logo-gray-small.svg';

import { useLocation } from 'react-router-dom';

const PostDetailPage = () => {
  const getPostsData = useLocation().state;
  console.log(getPostsData);
  // 댓글 가져오기

  // 댓글 작성하기

  // 댓글 수정하기

  return (
    <>
      <TopBar leftEl="back" rightEl="more" />
      <Post postsData={getPostsData} />
      <SContainer>
        <SCommentsWrapper>
          <Comments />
          <Comments />
          <Comments />
          <Comments />
        </SCommentsWrapper>
        <SCommentDiv name="" action="" method="">
          <img src={LogoGraySmall} alt="" />
          <form>
            <textarea placeholder="댓글 입력하기..."></textarea>
            <button type="submit">게시</button>
          </form>
        </SCommentDiv>
      </SContainer>
    </>
  );
};

export default PostDetailPage;

const SContainer = styled.div`
  position: absolute;
  bottom: 0;
`;

const SCommentsWrapper = styled.div`
  border-top: 2px solid #dbdbdb;
  padding: 16px;
  width: 390px;
  height: calc(100vh - 510px);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const SCommentDiv = styled.div`
  height: 61px;
  border-top: 1px solid #dbdbdb;
  display: flex;
  align-items: center;
  img {
    width: 36px;
    height: 36px;
    margin-left: 16px;
  }
  form {
    margin-left: 18px;
    display: flex;
    align-items: center;
    width: 100%;
    textarea {
      width: 260px;
      height: 40px;
      border-radius: 7px;
      padding: 12px 0px 0px 7px;
      box-sizing: border-box;
      border: 1px solid #dbdbdb;
      resize: none;
      &::-webkit-scrollbar {
        display: none;
      }
      &:focus {
        outline: none;
      }
    }
    button {
      width: 26px;
      height: 26px;
      margin-left: 16px;
      font-size: 14px;
    }
  }
`;
