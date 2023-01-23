import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

import Barcode from "react-barcode";
import { useReactToPrint } from "react-to-print";

const Label = () => {
  const router = useRouter();
  const { grade, battery, issues, model, barcode, imei } = router.query;
  const printRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    removeAfterPrint: true,
  });

  useEffect(() => {
    router.isReady && handlePrint();
  }, [router]);

  return (
    <div
      ref={printRef}
      style={{
        width: "400px",
        height: "230px",
        display: "flex",
        flexDirection: "column",
        padding: "0px",
        justifyContent: "space-between",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "start",
        }}
      >
        <h5 style={{ fontWeight: "bold", fontSize: "24px" }}>{grade}</h5>
        {battery && <span style={{ fontSize: "16px" }}>{battery}%</span>}
      </div>
      <div
        style={{
          height: "100px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <p>{issues}</p>
      </div>
      <b>{model}</b>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "14px",
        }}
      >
        <Barcode
          value={barcode || "123"}
          displayValue={false}
          width={3.8}
          fontSize={16}
          height={24}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <b>{barcode}</b>
          <b>{imei}</b>
        </div>
      </div>
    </div>
  );
};

export default Label;
