import React from "react";
import { getAddress } from "../util/getAddress";
import getRoboImage from "../util/getRoboImage";

export default function UserDetail({ user }) {
  return (
    <div className='hero bg-base-200'>
      <div className='flex-col hero-content lg:flex-row-reverse'>
        <img
          src={getRoboImage(user.username)}
          className='max-w-sm rounded-lg shadow-2xl'
        />
        <div>
          <h1 className='mb-5 text-5xl font-bold'>{user.name}</h1>
          <p className='mb-5'>{getAddress(user.address)}</p>
          {/* <button className='btn btn-primary'>Get Started</button> */}
        </div>
      </div>
    </div>
  );
}
