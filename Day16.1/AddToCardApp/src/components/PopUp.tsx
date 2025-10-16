import useCartStore from "../store/useCartStore"

const PopUp = () => {

  const{cartDetails: details} = useCartStore();

  return (
    <div className="bg-gray-100 border-2 border-gray-200 relative top-60 p-2 rounded-lg">
      <table className="min-w-full border-collapse">
        <caption className="font-semibold text-lg mb-2">Cart Details</caption>
        <thead>
          <tr className="bg-gray-300 text-center text-gray-700 text-sm">
            <th className="border px-4 py-2">Item</th>
            <th className="border px-4 py-2">Quantity</th>
          </tr>
        </thead>
        <tbody>

          {
            details.map((obj,index)=>(
              <tr
              className="bg-white even:bg-gray-300 hover:bg-gray-100 transition-colors duration-200 text-center"
              key={index}>
                <td className="border px-4 py-2">
                  {String.fromCharCode(65 + obj.index)}
                </td>
                <td className="border px-4 py-2">{obj.quantity}</td>
              </tr>
            ))
          }
         
        </tbody>
      </table>
    </div>
  )
}

export default PopUp
