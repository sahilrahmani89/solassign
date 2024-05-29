import React, { useEffect, useState } from 'react'
import axios from 'axios';

const apiKey = process.env.X_RapidAPI_Key;
const useTables = () => {
  const [pagination, setPagination] = useState({
    page: 1,
    per_page: 3,
  });

  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState()
  const [loading, setloading] = useState(true)
  const [tableData, settableData] = useState([])
  const options = {
    method: 'GET',
    url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions',
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    },
    params: { ...pagination } // assume that it handle pagination while going from one page to another as its happens in real scenario.
  };

  const fetchCity = async () => {
    try {
      setloading(true)
      const response = await axios.request(options);
      setData(response?.data)
      setloading(false)
    } catch (error) {
      console.error(error);
      setloading(true)
    }
  }
  useEffect(() => {
    fetchCity()
  }, [pagination])
  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchText(value);
    filterData(value)
  }
  const filterData = (search) => {
    if (!search) {
      setData(data);
    } else {
      const lowercasedQuery = search.toLowerCase();
      const filtered = tableData?.filter(item =>
        item.name.toLowerCase().includes(lowercasedQuery) ||
        item.country.toLowerCase().includes(lowercasedQuery) ||
        item.region.toLowerCase().includes(lowercasedQuery)
      );
      settableData(filtered);
    }
  };
  return {
    data,
    pagination,
    setPagination,
    loading,
    searchText,
    setSearchText,
    handleSearch,
    settableData,
    tableData
  }
}

export default useTables