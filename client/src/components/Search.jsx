import { Input } from '@material-tailwind/react';
import { useEffect } from 'react';

export default function Search() {
  useEffect(() => {
    fetch();
  });

  return (
    <div
      style={{
        backgroundColor: 'white',
        borderRadius: 3,
        padding: 5,
        margin: 0,
        display: 'flex',
      }}
    >
      <Input
        variant="standard"
        color="blue"
        label="Search"
        placeholder="Search"
        size="small"
        icon={<i className="fas fa-heart" />}
      />
    </div>
  );
}
