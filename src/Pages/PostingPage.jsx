import React, { useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import TopBar from '../Components/Common/TopBar';
import cancelButton from '../Assets/Icon/x.svg';
import { Token } from '../Atom/atom';
import { useLocation } from 'react-router-dom';

const PostingPage = () => {
  const URL = 'https://api.mandarin.weniv.co.kr';
  const [type, setType] = useState('');
  const [textareaValue, setTextareaValue] = useState('');
  const textRef = useRef();
  const getMyToken = useRecoilValue(Token);
  const showData = useLocation().state;
  console.log(showData);

  // 업로드 버튼 클릭 시 실행, api에 게시글 등록
  const postSubmit = async () => {
    try {
      const response = await fetch(URL + '/post', {
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + getMyToken,
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          post: {
            // textarea에 타이핑 되는 내용들
            content: `${showData.guname}^${showData.title}^${showData.place}^${showData.date}^${textareaValue}`,
            // 업로드한 사진
            image: showData.main_img,
          },
        }),
      });

      const res = await response.json();
      console.log(res);

      textRef.current.value = '';
      setTextareaValue('');
      document.querySelector('#imagePre').src = '';

      return res;
    } catch (error) {
      console.error(error);
    }
  };

  // textarea에 타이핑 되는 내용들 가져 오는
  const handleInputChange = e => {
    setTextareaValue(e.target.value);
    console.log(textareaValue);
  };

  return (
    <>
      <TopBar leftEl="back" />
      {type === 'edit' ? (
        <form>
          <SPostingContent>
            <button type="button" disabled={!textareaValue} className="uploadBtn">
              수정하기
            </button>
            <UploadTextArea
              className="uploadTextarea"
              onChange={handleInputChange}
              ref={textRef}
              rows="10"
              cols="33"
              defaultValue={'수정할 내용'}
              placeholder="게시글 입력하기.."></UploadTextArea>{' '}
            <ImageUploadDiv>
              <ul>
                <li>
                  <img id="imagePre" src={showData.main_img} alt=""></img>
                </li>
              </ul>
            </ImageUploadDiv>
          </SPostingContent>
        </form>
      ) : (
        <form>
          <SPostingContent>
            <button type="button" disabled={!textareaValue} onClick={postSubmit} className="uploadBtn">
              업로드
            </button>
            <UploadTextArea
              className="uploadTextarea"
              onChange={handleInputChange}
              ref={textRef}
              rows="8"
              cols="33"
              placeholder="게시글 입력하기.."></UploadTextArea>
            <ImageUploadDiv>
              <ul>
                <li>
                  <img id="imagePre" src={showData.main_img} alt=""></img>
                </li>
              </ul>
            </ImageUploadDiv>
            <div style={{ paddingLeft: '5px', paddingRight: '5px', marginTop: '230px' }}>
              <p style={{ color: 'salmon', fontSize: '12px', marginTop: '7px' }}>{showData.guname}</p>
              <p style={{ fontSize: '14px', marginTop: '6px' }}>{showData.title}</p>
              <p style={{ fontSize: '11px', marginTop: '6px' }}>
                {showData.guname} | {showData.place}
              </p>
              <div style={{ marginTop: '4px' }}>
                <span style={{ color: '#767676', fontSize: '11px' }}>공연일자</span>

                <span style={{ fontSize: '11px', marginLeft: '8px' }}>{showData.date}</span>
              </div>
            </div>
          </SPostingContent>
        </form>
      )}
    </>
  );
};

export default PostingPage;

const SPostingContent = styled.div`
  margin: 32px 16px;
  .uploadBtn {
    position: fixed;
    top: 8px;
    margin-left: 268px;
    background-color: var(--main);
    color: white;
    width: 90px;
    height: 32px;
    border-radius: 44px;
    font-size: 14px;
    font-weight: normal;
  }
`;

const ImageUploadDiv = styled.div`
  height: 228px;

  ul {
    li {
      width: 100%;
      position: relative;
      img {
        width: 100%;
        height: 430px;
        object-fit: cover;
        border: none;
        border-radius: 15px;
      }
      button {
        width: 22px;
        height: 22px;
        position: absolute;
        right: 3px;
        top: 3px;
        z-index: 10;
        background: url(${cancelButton}) no-repeat center;
      }
    }
  }
  .uploadLabel {
    .uploadImg {
      position: relative;
      margin-bottom: -70px;
      margin-left: 308px;
      cursor: pointer;
    }
    input {
    }
  }
`;

const UploadTextArea = styled.textarea`
  width: 100%;
  resize: none;
  border: none;
  outline: none;
  margin-bottom: 16px;

  &::-webkit-scrollbar {
    display: none;
  }
  &::placeholder {
    color: #dbdbdb;
  }
`;
