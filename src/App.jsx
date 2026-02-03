import { useState } from "react";

function App() {
  const [ibc, setIbc] = useState("");
  const [risk, setRisk] = useState(1);
  const minWage = 1750905; // Salario mínimo 2026 COP
  const risks = {
    1: 0.0052,
    2: 0.0104,
    3: 0.02436,
    4: 0.0435,
    5: 0.0696,
  };

  const ibcNum = parseFloat(ibc) || 0;
  const effectiveIbc = Math.max(ibcNum, minWage); // Usa mínimo para cálculos si <

  const calculate = () => {
    const salud = effectiveIbc * 0.04;
    const pension = effectiveIbc * 0.16;
    const arl = effectiveIbc * risks[risk];
    const caja = effectiveIbc * 0.04;
    const total = salud + pension + arl + caja;
    return { salud, pension, arl, caja, total };
  };

  const values = calculate();

  const formatCOP = (value) =>
    new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
    }).format(value);

  const isBelowMin = ibcNum > 0 && ibcNum < minWage;

  return (
    <>
      <div className="w-full h-12 rounded-b-4xl bg-[#009FE3] " />
      <div className=" bg-white flex flex-col items-center justify-center p-4">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-[#009FE3] mb-6">
            Calculadora De Aportes Para Dependientes
          </h1>
          <p className="text-gray-600 text-md leading-relaxed text-justify max-w-6xl mx-auto">
            Nuestra calculadora permite conocer de manera rápida el valor de los
            aportes a salud, pensión, ARL y caja de compensación. Se diseñada
            para trabajadores dependientes. Ingresa los datos solicitados y
            obtén el cálculo exacto de tus aportes, asegurando el cumplimiento
            normativo y la tranquilidad en tus pagos.
          </p>
        </div>

        <div className="w-full max-w-6xl h-5 rounded-b-xl bg-[#FFCD00]" />

        <div className="bg-white p-8 rounded-lg max-w-4xl w-full">
          <p className="text-sm text-gray-600 mb-5">
            Ingresa tu Ingreso Base de Cotización (IBC). Salario mínimo vigente
            2026: {formatCOP(minWage)}.
          </p>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              Ingreso Base de Cotización (IBC)
            </label>
            <input
              type="text"
              value={ibc}
              onChange={(e) => setIbc(e.target.value.replace(/[^0-9]/g, ""))}
              className="w-full p-2 border rounded"
              placeholder="Ingresa valor"
            />
            {isBelowMin && (
              <p className="text-red-500 text-sm mt-1">
                El IBC debe ser al menos {formatCOP(minWage)}. Usando mínimo
                para cálculos.
              </p>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2">
              Nivel de Riesgo ARL
            </label>
            <select
              value={risk}
              onChange={(e) => setRisk(Number(e.target.value))}
              className="w-full p-2 border rounded"
            >
              <option value={1}>1 (0.52%)</option>
              <option value={2}>2 (1.04%)</option>
              <option value={3}>3 (2.44%)</option>
              <option value={4}>4 (4.35%)</option>
              <option value={5}>5 (6.96%)</option>
            </select>
          </div>

          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-100">
                <th className="p-2 text-left">Concepto</th>
                <th className="p-2 text-right">Porcentaje</th>
                <th className="p-2 text-right">Valor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">Salud</td>
                <td className="p-2 text-right">4%</td>
                <td className="p-2 text-right">{formatCOP(values.salud)}</td>
              </tr>
              <tr>
                <td className="p-2">Pensión</td>
                <td className="p-2 text-right">16%</td>
                <td className="p-2 text-right">{formatCOP(values.pension)}</td>
              </tr>
              <tr>
                <td className="p-2">ARL</td>
                <td className="p-2 text-right">
                  {(risks[risk] * 100).toFixed(2)}%
                </td>
                <td className="p-2 text-right">{formatCOP(values.arl)}</td>
              </tr>
              <tr>
                <td className="p-2">Caja</td>
                <td className="p-2 text-right">4%</td>
                <td className="p-2 text-right">{formatCOP(values.caja)}</td>
              </tr>
              <tr className="bg-blue-200 font-bold">
                <td className="p-2">Total Aporte</td>
                <td className="p-2"></td>
                <td className="p-2 text-right">{formatCOP(values.total)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
