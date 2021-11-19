import Image from "next/image";
import getRoboImage from "../util/getRoboImage";
import { useRouter } from "next/router";
import { getAddress } from "../util/getAddress";

function UsersList({ users }) {
  const router = useRouter();
  return (
    <div>
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
