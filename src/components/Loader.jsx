import { Html, useProgress } from "@react-three/drei"

const Loader = () => {
    
    const { progress } = useProgress();

  return (
    <Html>
        <div className="w-full h-full flex flex-col items-center justify-center">
            <p className="text-xl font-black tracking-tight">LOADING...</p>
            <p 
                style={{
                    fontSize: 18,
                    color: "black",
                    fontWeight: 300,
                }}
            >{progress.toFixed(2)}%</p>
        </div>
    </Html>
  )
}

export default Loader;
