import { useState } from 'react'
import { CgMathDivide, CgMathPlus, CgMathMinus, CgMathEqual, CgClose } from "react-icons/cg";
import { IoIosArrowBack } from "react-icons/io";

export default function App() {

  const [result, setResult] = useState(0)
  const [history, setHistory] = useState([])
  const [openHistory, setOpenHistory] = useState(false)

  function handleClickButton(value) {
    try {
      
      if (value == '='){
        const res = eval(String(result))

        setHistory((historys) => [...historys, {
          cont: result,
          result: res
        }])
        
        setResult(res)
        return
      }

      if(value == 'AC') {
        setResult(0)
        return
      }
      
      if(value == 'DEL') {
        setResult(result.slice(0, -1))
        return
      }

      if(result == 0 && result !== '0.' && value !== '/' && value !== '%' && value !== '*' && value !== '-' && value !== '+' && value !== '.'){
        setResult(value)
      }else{
        setResult(result+value)
      }
      
    } catch (error) {
      setResult('Erro')
    }
  }

  return (
    <div className={`flex flex-row items-center justify-center h-screen w-screen bg-my-quintenary overflow-hidden`}>
      <div className={`flex-grow-[1] flex flex-col items-center justify-center h-screen`}>
        <div className="bg-my-quartenary text-my-quintenary flex flex-col min-w-[200px] px-2 py-2 rounded-[6px]">
        
          <div className={`bg-my-quintenary w-full h-[40px] mb-2 rounded-[6px] text-my-quartenary text-[20px] font-bold flex items-center justify-end px-2 transition-all duration-[.4s] cursor-pointer`}>
            <p>{result}</p>
          </div>
        
          <div className={`flex flex-row items-center justify-center gap-2 my-1`}>
            <div
              onClick={() => handleClickButton('AC')}
              className={`bg-my-terciary w-[40px] h-[40px] flex items-center justify-center text-my-quartenary rounded-[6px] text-[20px] hover:opacity-[0.7] transition-all duration-[.4s] cursor-pointer`}
            >AC</div>
            <div
              onClick={() => handleClickButton('/')}
              className={`bg-my-secondary w-[40px] h-[40px] flex items-center justify-center text-my-quartenary rounded-[6px] text-[20px] hover:opacity-[0.7] transition-all duration-[.4s] cursor-pointer`}
            ><CgMathDivide /></div>
            <div
              onClick={() => handleClickButton('DEL')}
              className={`bg-my-terciary flex-grow-[1] h-[40px] flex items-center justify-center text-my-quartenary rounded-[6px] text-[20px] hover:opacity-[0.7] transition-all duration-[.4s] cursor-pointer`}
            >D</div>
          </div>
          <div className={`flex flex-row items-center justify-center gap-2 my-1`}>
            <div
              onClick={() => handleClickButton('7')}
              className={`bg-my-terciary w-[40px] h-[40px] flex items-center justify-center text-my-quartenary rounded-[6px] text-[20px] hover:opacity-[0.7] transition-all duration-[.4s] cursor-pointer`}
            >7</div>
            <div
              onClick={() => handleClickButton('8')}
              className={`bg-my-terciary w-[40px] h-[40px] flex items-center justify-center text-my-quartenary rounded-[6px] text-[20px] hover:opacity-[0.7] transition-all duration-[.4s] cursor-pointer`}
            >8</div>
            <div
              onClick={() => handleClickButton('9')}
              className={`bg-my-terciary w-[40px] h-[40px] flex items-center justify-center text-my-quartenary rounded-[6px] text-[20px] hover:opacity-[0.7] transition-all duration-[.4s] cursor-pointer`}
            >9</div>
            <div
              onClick={() => handleClickButton('*')}
              className={`bg-my-secondary w-[40px] h-[40px] flex items-center justify-center text-my-quartenary rounded-[6px] text-[20px] hover:opacity-[0.7] transition-all duration-[.4s] cursor-pointer`}
            ><CgClose /></div>
          </div>
          <div className={`flex flex-row items-center justify-center gap-2 my-1`}>
            <div
              onClick={() => handleClickButton('4')}
              className={`bg-my-terciary w-[40px] h-[40px] flex items-center justify-center text-my-quartenary rounded-[6px] text-[20px] hover:opacity-[0.7] transition-all duration-[.4s] cursor-pointer`}
            >4</div>
            <div
              onClick={() => handleClickButton('5')}
              className={`bg-my-terciary w-[40px] h-[40px] flex items-center justify-center text-my-quartenary rounded-[6px] text-[20px] hover:opacity-[0.7] transition-all duration-[.4s] cursor-pointer`}
            >5</div>
            <div
              onClick={() => handleClickButton('6')}
              className={`bg-my-terciary w-[40px] h-[40px] flex items-center justify-center text-my-quartenary rounded-[6px] text-[20px] hover:opacity-[0.7] transition-all duration-[.4s] cursor-pointer`}
            >6</div>
            <div
              onClick={() => handleClickButton('-')}
              className={`bg-my-secondary w-[40px] h-[40px] flex items-center justify-center text-my-quartenary rounded-[6px] text-[20px] hover:opacity-[0.7] transition-all duration-[.4s] cursor-pointer`}
            ><CgMathMinus /></div>
          </div>
          <div className={`flex flex-row items-center justify-center gap-2 my-1`}>
            <div
              onClick={() => handleClickButton('1')}
              className={`bg-my-terciary w-[40px] h-[40px] flex items-center justify-center text-my-quartenary rounded-[6px] text-[20px] hover:opacity-[0.7] transition-all duration-[.4s] cursor-pointer`}
            >1</div>
            <div
              onClick={() => handleClickButton('2')}
              className={`bg-my-terciary w-[40px] h-[40px] flex items-center justify-center text-my-quartenary rounded-[6px] text-[20px] hover:opacity-[0.7] transition-all duration-[.4s] cursor-pointer`}
            >2</div>
            <div
              onClick={() => handleClickButton('3')}
              className={`bg-my-terciary w-[40px] h-[40px] flex items-center justify-center text-my-quartenary rounded-[6px] text-[20px] hover:opacity-[0.7] transition-all duration-[.4s] cursor-pointer`}
            >3</div>
            <div
              onClick={() => handleClickButton('+')}
              className={`bg-my-secondary w-[40px] h-[40px] flex items-center justify-center text-my-quartenary rounded-[6px] text-[20px] hover:opacity-[0.7] transition-all duration-[.4s] cursor-pointer`}
            ><CgMathPlus /></div>
          </div>
          <div className={`flex flex-row items-center justify-center gap-2 my-1`}>
            <div
              onClick={() => handleClickButton('0')}
              className={`bg-my-terciary flex-grow-[1] h-[40px] flex items-center justify-center text-my-quartenary rounded-[6px] text-[20px] hover:opacity-[0.7] transition-all duration-[.4s] cursor-pointer`}
            >0</div>
            <div
              onClick={() => handleClickButton('.')}
              className={`bg-my-terciary w-[40px] h-[40px] flex items-center justify-center text-my-quartenary rounded-[6px] text-[20px] hover:opacity-[0.7] transition-all duration-[.4s] cursor-pointer`}
            >.</div>
            <div
              onClick={() => handleClickButton('=')}
              className={`bg-my-secondary w-[40px] h-[40px] flex items-center justify-center text-my-quartenary rounded-[6px] text-[20px] hover:opacity-[0.7] transition-all duration-[.4s] cursor-pointer`}
            ><CgMathEqual /></div>
          </div>
        </div>
      </div>

      <div className={`${openHistory == true ? 'w-[30%]' : 'w-[0px]'} sm:w-[30%] relative flex flex-col items-center justify-start border-[1px] border-transparent border-l-my-quartenary h-screen text-center transition-all duration-[.4s]`}>
        <div
          onClick={() => setOpenHistory(!openHistory)}
          className={`sm:hidden w-[30px] h-[30px] bg-my-secondary absolute top-[20%] left-[-30px] text-my-quartenary flex items-center justify-center`}
        >
          <IoIosArrowBack className={`transition-all duration-[.4s] ${openHistory == true ? 'rotate-[180deg]' : 'rotate-[0deg]'}`} />
        </div>

        <h1 className='font-bold text-my-quartenary'>Histórico</h1>

        <div className="w-full h-[2px] bg-my-quartenary my-1" />
        {history.map((cont) => (
          <div className='w-full flex flex-col justify-start items-start px-2'>
            <p className={`font-bold text-my-quartenary`}>{cont.cont}</p>
            <p className={`font-bold text-my-quartenary opacity-[0.7]`}>{cont.result}</p>
            <div className="w-full h-[2px] bg-my-quartenary my-1" />
          </div>
        ))}
      </div>
    </div>
  )
}