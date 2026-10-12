import React, { useState } from "react";
// Make sure Bootstrap's CSS is loaded once in your app, e.g. in index.js:
// import "bootstrap/dist/css/bootstrap.min.css";

function Triangle() {
  const [base, setBase] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handleCalculate = () => {
    const b = parseFloat(base);
    const h = parseFloat(height);

    if (Number.isNaN(b) || Number.isNaN(h)) {
      setResult("");
      setError("Enter a number for both the base and the height.");
      return;
    }
    if (b <= 0 || h <= 0) {
      setResult("");
      setError("Base and height must be greater than zero.");
      return;
    }

    setError("");
    // Area of a triangle = (base × height) / 2
    const area = (b * h) / 2;
    setResult({ base: b, height: h, area: Number(area.toFixed(4)) });
  };

  return (
    <div className="container-fluid px-4 my-5">
      <h1 className="h3 fw-bold text-center mb-4">Triangle Area Solver</h1>

      <div className="mb-3">
        <label htmlFor="triangle-base" className="form-label fw-bold">
          Base:
        </label>
        <input
          id="triangle-base"
          type="number"
          min="0"
          step="any"
          className="form-control w-100"
          value={base}
          onChange={(e) => setBase(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="triangle-height" className="form-label fw-bold">
          Height:
        </label>
        <input
          id="triangle-height"
          type="number"
          min="0"
          step="any"
          className="form-control w-100"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>

      <button
        type="button"
        className="btn btn-primary w-100 fw-bold mb-3"
        onClick={handleCalculate}
      >
        Calculate Area
      </button>

      <div aria-live="polite">
        <div className="fw-bold">Results:</div>
        {error && <div className="text-danger">{error}</div>}
        {result && (
          <>
            <div>Base: {result.base}</div>
            <div>Height: {result.height}</div>
            <div>Area: {result.area}</div>
          </>
        )}
      </div>
    </div>
  );
}

export default Triangle;