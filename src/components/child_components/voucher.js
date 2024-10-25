import React from "react";

function voucher({ infor }) {
  return (
    <>
      {infor.map((row, index) => {
        <div className="bg-green-100 p-4 rounded-lg mb-4">
          <span className="bg-red-500 text-white py-1 px-2 rounded-full text-sm">
            {row.obj}
          </span>
          <h3 className="text-red-500 font-bold text-lg">GIẢM {infor.sale}%</h3>
          <p>Đơn hàng từ {infor.minOrder}vnd</p>
          <p className="text-gray-500">Hết hạn: {infor.end}</p>
        </div>;
      })}
    </>
  );
}

export default voucher;
