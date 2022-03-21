import { CircularProgress } from '@mui/material';
const Loader = () => {
  return (
    <span className="loader">
      <CircularProgress size={60} />
    </span>
  );
};

export default Loader;
