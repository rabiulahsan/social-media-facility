import { useEffect, useState } from "react";
import SingleChat from "./SingleChat";
import UseSingleUser from "../../Hooks/UseSingleUser";
import { IoSearch, IoArrowBack } from "react-icons/io5";
import SearchSingleChat from "./SearchSingleChat";

const Sidebar = () => {
  const [loggedUser] = UseSingleUser();
  // console.log(loggedUser?._id);
  const [myChat, setMyChat] = useState([]);
  const [searchValue, setSearchValue] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/chats/${loggedUser?._id}`)
      .then((response) => response.json())
      .then((data) => {
        setMyChat(data);
      })
      .catch((error) => console.error(error));
  }, [loggedUser]);

  // console.log(myChat);

  //handle search back button
  const handleSearchBack = () => {
    setSearching(false);
    setSearchValue("");
  };
  // handle Search
  const handleSearch = (e) => {
    e.preventDefault();
    setSearching(true);
    // console.log(searchValue);

    // fetching data for search value and set them on search data
    fetch(`http://localhost:5000/chatusers?value=${searchValue}`)
      .then((res) => res.json())
      .then((data) => {
        setSearchData(data);
      });
  };
  // console.log(searchData);

  // filter search data for user
  const filteredSearchData = searchData?.filter(
    (user) => user?._id !== loggedUser?._id
  );

  // console.log(filteredSearchData);
  return (
    <div className="bg-white rounded  h-full ">
      {/* form for searching user  */}
      <div className=" px-12 pt-5 pb-4 ">
        <form
          onSubmit={handleSearch}
          className="flex justify-center items-center relative"
        >
          {searching && (
            <span
              onClick={handleSearchBack}
              className="bg-slate-100 hover:bg-slate-200 p-3 mr-4 text-slate-600 text-lg cursor-pointer rounded-full"
            >
              <IoArrowBack></IoArrowBack>
            </span>
          )}

          <input
            className="rounded-3xl py-2 px-5 w-[100%] text-gray-600 focus:outline-none bg-slate-200"
            type="text"
            placeholder="Search new chat"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <IoSearch className="absolute top-1/2 right-8 text-slate-400 text-lg transform -translate-y-1/2 " />
        </form>
      </div>

      {searching ? (
        <div>
          {/* for searching results value  */}
          <p className="font-bold text-slate-600 text-xl text-center p-4 border-b border-b-slate-200">
            Search results
          </p>
          {filteredSearchData?.length > 0 ? (
            <div className="flex flex-col gap-y-2 overflow-y-auto h-[520px] py-4 px-5 mt-2">
              {filteredSearchData?.map((user, idx) => (
                // <SingleChat key={idx} user={user}></SingleChat>
                <SearchSingleChat
                  key={idx}
                  user={user}
                  setSearching={setSearching}
                  setSearchValue={setSearchValue}
                  setMyChat={setMyChat}
                ></SearchSingleChat>
              ))}
            </div>
          ) : (
            <p className="font-bold text-slate-600 text-xl text-center p-4 ">
              No user found
            </p>
          )}
        </div>
      ) : (
        <div>
          {/* for displaying all chat  */}
          <p className="font-bold text-slate-600 text-xl text-center p-4 border-b border-b-slate-200">
            All Chats
          </p>
          <div className="flex flex-col gap-y-2 overflow-y-auto h-[520px] py-4 px-5 mt-2">
            {myChat?.map((user, idx) => (
              <SingleChat key={idx} user={user}></SingleChat>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
