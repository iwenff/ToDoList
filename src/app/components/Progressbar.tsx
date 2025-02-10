import React from "react"

const ProgressBar = ({
  completedPercentage,
}: {
  completedPercentage: number
}) => (
  <div className="mb-6">
    <h2 className="text-xl font-semibold mb-2">Прогресс выполнения</h2>
    <div className="w-full bg-gray-200 rounded h-4">
      <div
        className="bg-green-500 h-4 rounded"
        style={{ width: `${completedPercentage}%` }}
      ></div>
    </div>
    <p className="text-sm text-gray-600 mt-2">
      Выполнено: {completedPercentage}%
    </p>
  </div>
)

export default ProgressBar
