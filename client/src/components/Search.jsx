import { Input } from '@material-tailwind/react';

export default function Search() {
  return (
    <div
      style={{
        backgroundColor: 'white',
        borderRadius: 3,
        padding: 5,
        margin: 18,
        display: 'flex',
      }}
    >
      <Input
        variant="standard"
        color="blue"
        label="Search"
        placeholder="Search"
      />
    </div>
  );
}
