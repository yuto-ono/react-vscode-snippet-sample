import reactLogo from "./assets/react.svg"

const Logo = () => {
  return (
    <div>
      <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
        <img src="/vite.svg" className="logo" alt="Vite logo" />
      </a>
      <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
  )
}

export default Logo
