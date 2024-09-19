import { localColors } from "@/styles/global";
import React from "react";
import styled from "styled-components";

type TableType = {
  children?: React.ReactNode;
};

const Table = ({ children }: TableType) => {
  return (
    <TableWrapper>
      <Table_>{children}</Table_>
    </TableWrapper>
  );
};

export default Table;

export const TableWrapper = styled.div`
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  overflow-x: auto; // Allows the table to scroll horizontally on mobile
  -webkit-overflow-scrolling: touch; // For smooth scrolling on iOS
  @media screen and (max-width: 550px) {
    /* padding: 0 12px; */
  }
  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
`;

export const Table_ = styled.table`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  border-collapse: collapse;
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
  font-size: 15px;
  background-color: #fff;
  overflow: hidden;
  position: relative;
`;

export const TableHead = styled.thead`
  background-color: ${localColors.gray[200]};
  border-bottom: 2px solid #e0e0e0;
  overflow-x: auto;
  width: 100%;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #fafafa;
  }

  &:hover {
    background-color: #f0f0f0;
  }

  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;

export const TableHeaderCell = styled.th`
  color: #444;
  padding: 18px 24px;
  border: 1px solid ${localColors.neutral[300]};
  text-align: left;
  font-weight: 600;
  font-size: 14px;

  @media screen and (max-width: 550px) {
    padding: 12px 16px;
    font-size: 13px;
  }
`;

export const TableBody = styled.tbody`
  border-bottom: 1px solid #e0e0e0;
  overflow-x: auto;
  width: 100%;
`;

export const TableCell = styled.td`
  padding: 18px 24px;
  border: 1px solid ${localColors.neutral[300]};
  font-size: 15px;
  color: #555;
  line-height: 1.6;

  @media screen and (max-width: 550px) {
    padding: 12px 16px;
    font-size: 13px;
    width: 300px;
  }
`;
