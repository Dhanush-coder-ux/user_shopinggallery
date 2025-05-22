import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets';
import { useLocation } from 'react-router-dom';

const Search = () => {
  const { products, search, setSearch, showsearch, setShowSearch } = useContext(ShopContext);
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  // Show search bar only on 'collection' page
  useEffect(() => {
    setVisible(location.pathname.includes('collection'));
  }, [location]);

  // Filter suggestions based on search input
  useEffect(() => {
    if (search === '') {
      setSuggestions([]);
    } else {
      const filteredSuggestions = products.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    }
  }, [search, products]);

  // Handle suggestion selection
  const selectSuggestion = (name) => {
    setSearch(name);
    setSuggestions([]); // Hide suggestions after selection
  };

  return showsearch && visible ? (
    <div className="bg-gray-50 text-center relative">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-0 bg-inherit text-sm"
          type="text"
          placeholder="Search"
        />
        <img src={assets.search} className="w-4" alt="Search Icon" />
      </div>
      <img
        onClick={() => setShowSearch(false)}
        src={assets.closed}
        className="inline w-5 cursor-pointer"
        alt="Close Search"
      />

      {/*suggestions */}
      {suggestions.length > 0 && (
        <ul className="absolute left-1/2 transform -translate-x-1/2 w-3/4
         sm:w-1/2 bg-white z-[100]
         border border-gray-300 mt-1 rounded-md 
         shadow-md max-h-48 overflow-y-auto">
          {suggestions.map((item) => (
            <li
              key={item.id}
              onClick={() => selectSuggestion(item.name)}
              className="p-2 hover:bg-gray-200 cursor-pointer"
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  ) : null;
};

export default Search;
