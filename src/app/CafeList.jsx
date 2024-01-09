'use client'

import { useState, useEffect } from 'react'
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, getDocs } from "firebase/firestore"; 
import { db } from '../../firebaseConfig';

async function getCafes() {
  const cafesCol = collection(db, 'cafes');
  const cafeSnapshot = await getDocs(cafesCol);
  const cafeList = cafeSnapshot.docs.map(doc => doc.data());
  return cafeList;
}

export default function CafeList() {
  const [cafes, setCafes] = useState([])

  useEffect(() => {
    getCafes().then(setCafes);
    console.log("useEffect ran...");
  }, []);

  return (
    <>
    <ul className="list__no-bullets">
      {cafes.map((cafe, i) => (
        <li key={i} >
          <div className="base__card">
            <span className='text--base-color'> <span className='text__place-name'>{ cafe.name }</span> { cafe.nameJP }</span>
            <p>{ cafe.address }</p>
          </div>
        </li>
      ))}
    </ul>
    </>
  )
}