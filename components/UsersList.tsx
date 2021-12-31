import Image from "next/image";
import getRoboImage from "../util/getRoboImage";
import { useRouter } from "next/router";
import { getAddress } from "../util/getAddress";
import { useState } from "react";

function UsersList({ users }) {
  const [filter, setFilter] = useState("");
  const router = useRouter();
  return (
    <div>
      <div className='flex gap-4 m-10'>
        <input
          type='text'
          name='filter'
          className='border'
          placeholder='Something..'
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
        />
        <button className="border px-2 rounded-md" onClick={() => router.push(`/users-filter/?filter=${filter}`)}>
          Filter
        </button>
      </div>
      {users.map((user) => (
        <div key={user.id} className='card lg:card-side bordered'>
          <figure>
            <Image
              //   layout='fill'
              width={200}
              height={200}
              src={getRoboImage(user.username)}
              alt={user.username}
            />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>{user.name}</h2>
            <p>{getAddress(user.address)}</p>
            <div className='card-actions'>
              <button
                className='btn btn-primary'
                onClick={() => router.push(`/users/${user.id}`)}>
                View robo
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UsersList;
