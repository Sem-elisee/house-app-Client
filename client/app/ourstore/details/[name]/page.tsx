'use client'

import React from 'react'
import { useRouter } from 'next/router';


export default function details() {
  const router = useRouter();
  const { name } = router.query;

  console.log(name);
  
  return (
    <div>page{name}</div>
  )
}
