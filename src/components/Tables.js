import React from 'react'
import useTables from './hooks/useTables'
import Pagination from './Pagination'
import CustomTable from './CustomTable'
import SearchBoxs from './SearchBoxs'

const Tables = () => {
  const { data,
    pagination,
    setPagination,
    loading,
    searchText,
    handleSearch,
    tableData,
  } = useTables()  // custom hook to make component stateless and all logic to be handled on custom hook

  return (
    <div className='parent'>
      <div className='flex-pro'>
        <SearchBoxs
          value={searchText}
          onChange={(e) => handleSearch(e)}
          onFocus={() => console.log('Search box focused')}
          onBlur={() => console.log('Search box blurred')}
          disabled={false}
        />
      </div>
      {

        !data?.length ? <p>Nothing to Show Table API integration needed</p> :
          <CustomTable data={tableData} />
      }
      {!loading ? <p>Pagination will work after api integration</p> :
        <Pagination count={data?.metadata?.totalCount}
          length={data?.data.length} pagination={pagination} setPagination={setPagination}
        />}
    </div>
  )
}

export default Tables