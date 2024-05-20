import { useContext } from "react"
import { BridgeGuardContext } from "../../context/BridgeGuard"

function Home() {

  const context = useContext(BridgeGuardContext)

  return (
    <>
      <h1 className='flex justify-center mb-8'>
        Hello this is the App to schedule appointments
      </h1>

      {context.isToShow && (
        <h1 className='flex justify-center'>
          To schedule an appointment, please go to the <span className="font-bold ml-1 mr-1">CADASTRAR</span> page
        </h1>
      )}
    </>

  )
}

export default Home