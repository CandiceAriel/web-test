// 'use client'

// import { useState, useEffect } from 'react'
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, getDocs } from "firebase/firestore"; 
import { db } from '../../firebaseConfig';

async function getCafes() {
  const cafesCol = collection(db, 'cafes');
  const cafeSnapshot = await getDocs(cafesCol);
  const cafeList = cafeSnapshot.docs.map(doc => doc.data());
  return cafeList;
}

export default async function CafeList() {
  const cafes = await getCafes();

  return (
    <>
      {cafes.map((cafe) => (
        <div key={cafe.id} className="base__card">
          <span> { cafe.name } { cafe.nameJP }</span>
        </div>
      ))};
   
      
    </>
  )
}