import { Avatar } from '@material-tailwind/react';

const Profile = ({ user }) => {
  return (
    <>
      {user ? (
        <>
          <Avatar src={user.picture} alt={user.name} height={100} width={100} />{' '}
          {/* <h2>{user.name}</h2>
          <p>{user.email}</p> */}
        </>
      ) : null}
    </>
  );
};

export default Profile;
