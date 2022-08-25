import { useRouter } from "next/router";
import React from "react";
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
interface steps {
  StepsProps:Array<{id:number, name:string, status:string}>
}
const ProgressBar:React.FC<steps> = ({StepsProps})  => {
  const router = useRouter()
//   const moveToStep = (e:any ,step: any)=>{
//     e.preventDefault()
//     console.log(step)
//     switch (step){
//       case (1):
//        return router.push('/register')
//       case (2):
//        return router.push('/register/password')
//        case (3):
//         return router.push('/register/pricing')
//         case (4):
//           return router.push('/register/billing')
//           case (5):
//             return router.push('/register/summary')
//         default:
//        return router.push('/register')
//     }
//   }
  return (
    <nav aria-label="Progress">
      <ol role="list" className="flex items-center">
        {StepsProps.map((step, stepIdx) => (
          <li
            key={step.name}
            className={classNames(
              stepIdx !== StepsProps.length - 1 ? "pr-6 sm:pr-12" : "",
              "relative"
            )}
          >
            {step.status === "complete" ? (
              <>
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="h-[0.5px] w-96 bg-[#97ED01] " />
                </div>
                <button
                type="button"
                //   onClick={(ev) => moveToStep(ev,step.id)}
                  className="relative w-10 h-10 flex items-center justify-center bg-[#97ED01]  rounded-full text-white font-sans font-normal text-sm"
                >
                  {step.id}
                </button>
              </>
            ) : (
              <>
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="h-[0.5px] w-full bg-gray-200" />
                </div>
                <button
                  type="button"
                //   onClick={(ev) => moveToStep(ev, step.id)}
                  className="group relative w-10 h-10 flex items-center justify-center bg-white border-2 border-gray-100 rounded-full font-sans font-normal text-sm"
                >
                  {step.id}
                </button>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
export default ProgressBar;