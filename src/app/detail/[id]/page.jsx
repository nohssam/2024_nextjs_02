"use client"
import Item from "@/app/item/page";
import axios from "axios";
import { useEffect, useState } from "react";



export default function Detail(props){
    const[item, setItem] = useState({});
    const id = props.params.id ;
    //  https://makeup-api.herokuapp.com/api/v1/products/488.json
    const API_URL = `/makeup/v1/products/${id}.json`;
    const getData = () =>{
        axios.get(
            API_URL
        ).then(data =>{
            console.log(data);
            setItem(data.data);
        }).catch(
            console.log("에러 발생")
        )

    }
    // 렌더링 될때 마다 실행 
    // useEffect(()=>{getData()});

    // 최초 한번만 실행 
    useEffect(()=>{
        getData();
      },[]);

      return(
           <>
               {/* 아이템을 표현하는 페이지를 별도로 만들었으므로 임포트 하자 */}
               <Item item = {item} />
           </> 
      )
}