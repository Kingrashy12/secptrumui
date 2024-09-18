import { localColors } from "@/styles/global";
import React from "react";
import styled from "styled-components";

type TableType = {
  children?: React.ReactNode;
};

const Table = ({ children }: TableType) => {
  return <Table_>{children}</Table_>;
};

export default Table;

export const Table_ = styled.table`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  border-collapse: collapse;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
  font-size: 15px;
  background-color: #fff;
`;

export const TableHead = styled.thead`
  background-color: ${localColors.gray[200]};
  border-bottom: 2px solid #e0e0e0;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #fafafa;
  }

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const TableHeaderCell = styled.th`
  color: #444;
  padding: 18px 24px;
  border: 1px solid ${localColors.neutral[300]};
  text-align: left;
  font-weight: 600;
  font-size: 14px;
  /* background-color: ${localColors.gray[200]}; */
`;

export const TableBody = styled.tbody`
  border-bottom: 1px solid #e0e0e0;
`;

export const TableCell = styled.td`
  padding: 18px 24px;
  border: 1px solid ${localColors.neutral[300]};
  font-size: 15px;
  color: #555;
  line-height: 1.6;
`;
