import React from "react";

const CryptoDetailTableItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-between border-b-[1px] border-slate-600  py-4 px-2">
      {children}
    </div>
  );
};

const CryptoDetailTableInfo = ({ children }: { children: React.ReactNode }) => {
  return <article className="flex flex-col">{children}</article>;
};

export const TableInfo = {
  Root: CryptoDetailTableInfo,
  TableItem: CryptoDetailTableItem,
};
