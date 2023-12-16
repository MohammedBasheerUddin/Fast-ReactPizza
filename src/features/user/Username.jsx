import { useSelector } from "react-redux"

function Username() {
  const username =  useSelector((state) => state.user.username)

  if(!username) return null;
  return (
    <div className="text-l font-bold hidden md:block capitalize">
      Welcome, {username}
    </div>
  );
}

export default Username