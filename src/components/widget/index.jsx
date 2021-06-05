import React, {useState, useEffect} from 'react';
import * as S from './styles.js';
import firebase from 'firebase';
import db from '../../Firebase.js';

function Widget() {

    let [blogInfo, setBlogInfo] = useState();   // 블로그 정보
    let [categoryList, setCategoryList] = useState();   // 카테고리 리스트
    let [categoryID, setCategoryID] = useState();   // 카테고리 ID

    // 날씨 관련 정보
    const API_KEY = "53da2272c20bab85b6e0a1ba478a531e";
    const [loc, setLoc] = useState({lat: 0, long: 0});
    const [weather, setWeather] = useState({temperature: 0, name: "", icon: ""})

    // 블로그, 카테고리 정보 가져오기
    useEffect(()=>{

        let docRef = db.collection("blogInfo").doc("LHe68t24dP6pFIVZAWZp");

        docRef.onSnapshot((doc)=>{
            setBlogInfo(doc.data());
        })

        db.collection("categories")
        .onSnapshot((querySnapShot)=>{
            let tmpCategoryList = [];
            let tmpCategoryID = [];
            querySnapShot.forEach((doc)=>{
                tmpCategoryList.push(doc.data());
                tmpCategoryID.push(doc.id);
            })
            console.log(tmpCategoryList);
            setCategoryList(tmpCategoryList);
            setCategoryID(tmpCategoryID);
        })

    }, []);


    // 현재 위치 가져오기
    const getPosition = () => {

        if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position)=>{
            setLoc({
            lat: position.coords.latitude,
            long: position.coords.longitude
            });
        })
        }

        getWeather();
    }

    
    // API 연동으로 날씨 가져오기
    const getWeather = () => {

        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${loc.lat}&lon=${loc.long}&APPID=${API_KEY}`)
        .then(response => response.json())
        .then(json => {
        setWeather({
            temperature: Math.floor(json.main.temp - 273.15),
            name: json.weather[0].main,
            icon: json.weather[0].icon
        });
        });
    }

    //useEffect(getPosition, []);

    // 날씨 아이콘 사진
    const img_url = `http://openweathermap.org/img/w/${weather.icon}.png`;

    return (
        <S.Widget>
            {
            blogInfo && categoryList && categoryID
            ?<>
            <S.Profile>
                <S.ProfileImage src={blogInfo.profileImage} />
                <S.ProfileName>{blogInfo.nickName}</S.ProfileName>
                <S.ProfileIntro>{blogInfo.introduction}</S.ProfileIntro>
            </S.Profile>
            <S.Category>
                <p>Category</p>
                {
                    categoryList.map((categoryItem, i)=>{
                        const link = "/" + categoryID[i];

                        return (
                            <S.CategoryList>
                                <S.CategoryItem>
                                    <S.CategoryItemLink href={link}>{categoryItem.name}</S.CategoryItemLink>
                                </S.CategoryItem>
                            </S.CategoryList>    
                            )
                        })
                }
            </S.Category>
            <S.Weather>
                <h4>현재 지역 날씨</h4>
                <img src={img_url} alt="weather_icon" />
                <h5>온도: {weather.temperature}</h5>
                <h5>날씨: {weather.name}</h5>
            </S.Weather>
            </>
            : null
            }
        </S.Widget>
    )
}

export default Widget;