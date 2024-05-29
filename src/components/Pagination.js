import React from "react";
import Pagination from "@mui/material/Pagination";
import { PaginationItem, Stack } from "@mui/material";

const PreviousButton = () => {
  return (
    <div >
  
      <p>Previous</p>
    </div>
  );
};
const NextButton = () => {
  return (
    <div >
      <p >Next</p>
    </div>
  );
};


export default function Paginations(props) {
  const { setPagination, count, length, pagination } = props;

  const handlePageChange = async (
    event,
    value
  ) => {
    setPagination({ ...pagination, page: value });
  };

  return (
    <React.Fragment>
      {length && count > pagination.per_page  ? ( // Check if count is greater than per_page
        <div >
          <Stack spacing={2}>
            <Pagination
              count={Math.ceil(count / pagination.per_page)}
              page={pagination.page}
              onChange={handlePageChange}
              variant="outlined"
              shape="rounded"
              sx={{
                "& .MuiPaginationItem-rounded": {
                  border: "0",
                },
                "& .Mui-selected": {
                  background: "linear-gradient(to right, #FF6600, #FF6600)",
                  color: "white",
                  border: "1px solid #FF6600",
                  borderRadius: "0",
                },
              }}
              renderItem={(item) => (
                <PaginationItem
                  slots={{ previous: PreviousButton, next: NextButton }}
                  {...item}
                />
              )}
            />
          </Stack>
        </div>
      ) : (
        <></>
      )}
    </React.Fragment>
  );
}
