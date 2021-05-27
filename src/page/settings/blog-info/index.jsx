import React, { useEffect, useState} from 'react';
import * as S from './styles';

function SettingsBlogInfo() {

    const [blogName, setBlogName] = useState("");
    const [nickname, setNickname] = useState("");
    const [about, setAbout] = useState("");
    const [topic, setTopic] = useState("");

    useEffect(() => {
        return () => {
        }
    }, [])

    const saveInfo = (e) => {
        e.preventDefault();
        console.log(nickname);
        console.log(topic);
    }

    return (
        <S.BlogInfoContainer>
            <S.BlogInfoTitle>🖍블로그 정보</S.BlogInfoTitle>
            <S.BlogInfoTable>
                <S.BlogInfoTableBody>
                    <S.BlogInfoRow>
                        <S.BlogInfoRowHeader>블로그 주소</S.BlogInfoRowHeader>
                        <S.BlogInfoRowData>
                            <S.BlogUrl>blog url</S.BlogUrl>
                        </S.BlogInfoRowData>
                    </S.BlogInfoRow>
                    <S.BlogInfoRow>
                        <S.BlogInfoRowHeader>블로그명</S.BlogInfoRowHeader>
                        <S.BlogInfoRowData>
                            <S.BlogInfoInput type="text" onChange={e => setBlogName(e.target.value)} />
                            <S.InputDesc>한글, 영문, 숫자 혼용가능(한글 기준 25자 이내)</S.InputDesc>
                        </S.BlogInfoRowData>
                    </S.BlogInfoRow>
                    <S.BlogInfoRow>
                        <S.BlogInfoRowHeader>별명</S.BlogInfoRowHeader>
                        <S.BlogInfoRowData>
                            <S.BlogInfoInput onChange={e => setNickname(e.target.value)} />
                            <S.InputDesc>한글, 영문, 숫자 혼용가능(한글 기준 10자 이내)</S.InputDesc>
                        </S.BlogInfoRowData>
                    </S.BlogInfoRow>
                    <S.BlogInfoRow>
                        <S.BlogInfoRowHeader>소개글</S.BlogInfoRowHeader>
                        <S.BlogInfoRowData>
                            <S.BlogInfoTextarea />
                            <S.InputDesc>
                                블로그 프로필 영역의
                                <br/>
                                프로필 이미지 아래에 반영됩니다.
                            </S.InputDesc>
                        </S.BlogInfoRowData>
                    </S.BlogInfoRow>
                    <S.BlogInfoRow>
                        <S.BlogInfoRowHeader>내 블로그 주제</S.BlogInfoRowHeader>
                        <S.BlogInfoRowData>
                            <S.BlogTopicSelect onChange={e => setTopic(e.target.value)}>
                                <option value="">주제를 선택해주세요.</option>
                                <option value="travel">여행</option>
                                <option value="pet">반려동물</option>
                                <option value="game">게임</option>
                                <option value="movie">영화</option>
                            </S.BlogTopicSelect>
                            <S.InputDesc>
                                내 블로그에서 다루는 주제를 선택하세요.
                                <br/>
                                프로필 영역에 노출됩니다.
                            </S.InputDesc>
                        </S.BlogInfoRowData>
                    </S.BlogInfoRow>
                    <S.BlogInfoRow>
                        <S.BlogInfoRowHeader>블로그 프로필 이미지</S.BlogInfoRowHeader>
                        <S.BlogInfoRowData>
                            <S.ProfileImageUploader>

                            </S.ProfileImageUploader>
                        </S.BlogInfoRowData>
                    </S.BlogInfoRow>
                </S.BlogInfoTableBody>
            </S.BlogInfoTable>
            <S.BlogInfoSaveBtn type = "submit" onClick={saveInfo}>확인</S.BlogInfoSaveBtn>
        </S.BlogInfoContainer>
    )
}

export default SettingsBlogInfo
