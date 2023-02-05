import { Link } from 'react-router-dom';

export const NotFound = () => {
    return (
    <>
      <h2>Nothing found</h2>
      <Link to="/">Back to home</Link>
    </>
    )
}