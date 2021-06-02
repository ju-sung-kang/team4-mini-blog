import React, {useState, useEffect} from 'react';
import * as S from './styles.js';
import firebase from 'firebase';
import db from '../../Firebase.js';
import categoryList from './category-list.js';

function Widget() {

    let [userID, setUserID] = useState();
    let [userInfo, setUserInfo] = useState({id:"", name:""});
    let [profileImageSrc, setProfileImageSrc] = useState();

    const API_KEY = "53da2272c20bab85b6e0a1ba478a531e";
    const [loc, setLoc] = useState({lat: 0, long: 0});
    const [weather, setWeather] = useState({temperature: 0, name: "", icon: ""})
    const [today, setToday] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(()=>{

        setUserID('toodury');
    }, []);


    useEffect(()=>{

        if (userID !== undefined) {
            let docRefUserInfo = db.collection("userInfo").doc(userID);
            docRefUserInfo.onSnapshot((doc) => {
                setUserInfo(doc.data());
            });
        }
    }, [userID]);


    useEffect(()=>{

        if (userInfo !== undefined) {
            setProfileImageSrc(userInfo.profile_image + ".jpg");
        }
    }, [userInfo])


    useEffect(()=>{

        setToday(today + 1);
        setTotal(total + 1);
    }, []);

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

    const img_url = `http://openweathermap.org/img/w/${weather.icon}.png`;

    return (
        <S.Widget>
            <S.Profile>
                <S.ProfileImage src={profileImageSrc} />
                <S.ProfileName>{userInfo.name}({userInfo.id})</S.ProfileName>
                <S.ProfileIntro>{userInfo.intro}</S.ProfileIntro>
                <S.ProfileTag>프로필</S.ProfileTag>
                <S.ProfileTag>쪽지</S.ProfileTag>
            </S.Profile>
            <S.Category>
                <p>Category</p>
                {
                    categoryList.map((categoryItem)=>{
                        const link = "/" + categoryItem.id;

                        return (
                            <S.CategoryList>
                                <S.CategoryItem>
                                    <S.CategoryItemLink href={link}>{categoryItem.name}</S.CategoryItemLink>
                                </S.CategoryItem>
                                <S.SubCategoryList>
                                {
                                    categoryItem.subcategory.map((subCategory)=>{
                                        const sublink = "/" + subCategory.id;

                                        return (
                                        <S.CategoryItem>
                                            <S.CategoryItemLink href={sublink}>{subCategory.name}</S.CategoryItemLink>
                                        </S.CategoryItem>
                                        )
                                    })
                                }
                                </S.SubCategoryList>
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
            <S.Visit>
                <S.VisitToday>
                    <S.VisitText>Today</S.VisitText>
                    <S.VisitCnt1>{today}</S.VisitCnt1>
                </S.VisitToday>
                <S.VisitTotal>
                    <S.VisitText>Total</S.VisitText>
                    <S.VisitCnt2>{total}</S.VisitCnt2>
                </S.VisitTotal>
            </S.Visit>
        </S.Widget>
    )
}

export default Widget;