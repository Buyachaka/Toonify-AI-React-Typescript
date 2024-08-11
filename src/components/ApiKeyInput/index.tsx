import {forwardRef} from "react";

export const ApiKeyInput = forwardRef ((_props: object, ref: React.ForwardedRef<any>) => {
    return (
       <>
           <div className="w-full flex content-center justify-center mt-10 ">
               <input type="password" ref={ref} placeholder="API Key" className="rounded-lg pl-2 h-8"/>
           </div>
       </>
    )
})