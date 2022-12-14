import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../Styles/Table.css";
const CryptoTable = () => {
  const [apiData, setApiData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(50);
  useEffect(() => {
    const apiCall = async () => {
      try {
        let res = await fetch("https://api.coincap.io/v2/assets");
        let data = await res.json();
        setApiData(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    apiCall();
  }, []);

  const paginate = (curr) => {
    if (curr == "-" && currentPage == 1) {
      return;
    }
    if (curr == "+") {
      setCurrentPage(currentPage + 1);
    } else if (curr == "-") {
      setCurrentPage(currentPage - 1);
    }
  };

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = apiData.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="table-div">
      <TableContainer component={Paper} sx={{ width: 1100 }}>
        <Table sx={{ minWidth: 200 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Rank</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Market CAP</TableCell>
              <TableCell align="right">VWAP (24Hrs)</TableCell>
              <TableCell align="right">Supply</TableCell>
              <TableCell align="right">Volume (24Hrs)</TableCell>
              <TableCell align="right">Change (24Hrs)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentPosts.map((e, i) => (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {e.rank}
                </TableCell>
                <TableCell align="right">
                  <img
                    style={{ width: "20px" }}
                    src={`https://assets.coincap.io/assets/icons/${e.symbol.toLowerCase()}@2x.png`}
                    alt=""
                  />
                  {e.name}
                </TableCell>
                <TableCell align="right">
                  ${parseInt(e.priceUsd).toFixed(2)}
                </TableCell>
                <TableCell align="right">
                  ${parseInt(e.marketCapUsd).toFixed(2)}
                </TableCell>
                <TableCell align="right">
                  {parseInt(e.vwap24Hr).toFixed(2)}
                </TableCell>
                <TableCell align="right">
                  ${parseInt(e.supply).toFixed(2)}
                </TableCell>
                <TableCell align="right">
                  {parseInt(e.volumeUsd24Hr).toFixed(2)}
                </TableCell>
                <TableCell align="right">
                  {parseInt(e.changePercent24Hr).toFixed(2)}%
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {currentPage == 1 ? (
        <button
          onClick={() => paginate("+")}
          style={{ margin: "auto", marginTop: "20px" }}
        >
          View More
        </button>
      ) : (
        <button
          onClick={() => paginate("-")}
          style={{ margin: "auto", marginTop: "20px" }}
        >
          Go Back
        </button>
      )}
    </div>
  );
};

export default CryptoTable;
