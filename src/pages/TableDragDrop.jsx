import React, { useRef, useState } from "react";

const NUM_COLS = 50;
const NUM_ROWS = 20;
const CELL_SIZE_VW = 1.6;

const initialSeats = [
  { id: 1, x: 0, y: 0, col: 0, row: 0 },
  { id: 2, x: CELL_SIZE_VW * 3, y: 0, col: 3, row: 0 },
];

const TableDragDrop = () => {
  const containerRef = useRef(null);
  const [seats, setSeats] = useState(initialSeats);
  const [draggingId, setDraggingId] = useState(null);
  const offsetRef = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e, id) => {
    setDraggingId(id);
    const seat = seats.find((s) => s.id === id);
    const rect = containerRef.current.getBoundingClientRect();
    const vwUnit = rect.width / 100;

    offsetRef.current = {
      x: (e.clientX - rect.left) / vwUnit - seat.x,
      y: (e.clientY - rect.top) / vwUnit - seat.y,
    };
  };

  const handleMouseMove = (e) => {
    if (draggingId === null) return;

    const rect = containerRef.current.getBoundingClientRect();
    const vwUnit = rect.width / 100;

    const x = (e.clientX - rect.left) / vwUnit - offsetRef.current.x;
    const y = (e.clientY - rect.top) / vwUnit - offsetRef.current.y;
    console.log({ rect, vwUnit, draggingId, offsetRef: offsetRef.current });
    console.log(
      seats.map((s) =>
        s.id === draggingId
          ? {
              ...s,
              x: Math.max(0, Math.min(x, 100 - CELL_SIZE_VW)),
              y: Math.max(0, y),
            }
          : s
      ),
      "<< hasil drag"
    );
    setSeats((prev) =>
      prev.map((s) =>
        s.id === draggingId
          ? {
              ...s,
              x: Math.max(0, Math.min(x, 100 - CELL_SIZE_VW)),
              y: Math.max(0, y),
            }
          : s
      )
    );
  };

  const handleMouseUp = () => {
    if (draggingId !== null) {
      setSeats((prev) =>
        prev.map((s) => {
          if (s.id === draggingId) {
            const snappedX = Math.round(s.x / CELL_SIZE_VW) * CELL_SIZE_VW;
            const snappedY = Math.round(s.y / CELL_SIZE_VW) * CELL_SIZE_VW;

            const col = Math.round(snappedX / CELL_SIZE_VW);
            const row = Math.round(snappedY / CELL_SIZE_VW);

            return {
              ...s,
              x: snappedX,
              y: snappedY,
              col,
              row,
            };
          }
          return s;
        })
      );
    }
    setDraggingId(null);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      className="relative bg-gray-100 border w-[86vw] h-[30vw]"
    >
      {/* Grid */}
      {Array.from({ length: NUM_ROWS }).map((_, row) =>
        Array.from({ length: NUM_COLS }).map((_, col) => (
          <div
            key={`${row}-${col}`}
            style={{
              position: "absolute",
              left: `${col * CELL_SIZE_VW}vw`,
              top: `${row * CELL_SIZE_VW}vw`,
              width: `${CELL_SIZE_VW}vw`,
              height: `${CELL_SIZE_VW}vw`,
              border: "1px solid #e0e0e0",
              boxSizing: "border-box",
            }}
          />
        ))
      )}

      {/* Kursi */}
      {seats.map((seat) => (
        <div
          key={seat.id}
          onMouseDown={(e) => handleMouseDown(e, seat.id)}
          style={{
            position: "absolute",
            left: `${seat.x}vw`,
            top: `${seat.y}vw`,
            width: `${CELL_SIZE_VW - 0.2}vw`,
            height: `${CELL_SIZE_VW - 0.2}vw`,
            backgroundColor: "blue",
            color: "white",
            fontSize: "0.8vw",
            textAlign: "center",
            lineHeight: `${CELL_SIZE_VW - 0.2}vw`,
            borderRadius: "0.3vw",
            cursor: "grab",
            userSelect: "none",
            zIndex: 10,
          }}
        >
          {seat.id}
        </div>
      ))}
    </div>
  );
};

export default TableDragDrop;
