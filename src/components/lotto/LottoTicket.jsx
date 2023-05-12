import React, { useState } from "react";

const LottoTicket = ({ LottoTicketList, showNumber, handleToggleNumber }) => {
  const lottoTicketNumbersArray = Array.from(
    { length: LottoTicketList.length },
    (_, i) => i + 1
  );

  return (
    <section className="mt-9">
      <div className="d-flex">
        <label className="flex-auto my-0">
          총 {LottoTicketList.length}개를 구매하였습니다.
        </label>
        <div className="flex-auto d-flex justify-end pr-1">
          <label className="switch">
            <input
              type="checkbox"
              className="lotto-numbers-toggle-button"
              onChange={handleToggleNumber}
              checked={showNumber}
            />
            <span className="text-base font-normal">번호보기</span>
          </label>
        </div>
      </div>
      <div className="d-flex flex-wrap">
        {showNumber
          ? LottoTicketList.map((lottoNumbers, index) => (
              <div key={index} className="w-100 mx-1 text-4xl">
                <span key={index} className="mx-1 text-4xl">
                  🎟️
                </span>
                {lottoNumbers.map((number, index) => (
                  <span key={index}>
                    {number}
                    {index !== lottoNumbers.length - 1 && " "}
                  </span>
                ))}
              </div>
            ))
          : lottoTicketNumbersArray.map((number) => (
              <span key={number} className="mx-1 text-4xl">
                🎟️
              </span>
            ))}
      </div>
    </section>
  );
};

export default LottoTicket;
