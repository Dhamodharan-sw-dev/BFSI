import { useState, type FormEvent } from "react"
const DEMO_USERNAME = "sampleuser"

const DEMO_PASSWORD = "samplepassword"

function LoginModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [loggedIn, setLoggedIn] = useState(false)

  if (!open) return null

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (username !== DEMO_USERNAME || password !== DEMO_PASSWORD) {
      setError("Invalid username or password.")
      return
    }
    setError(null)
    setLoggedIn(true)
  }

  function handleClose() {
    setUsername("")
    setPassword("")
    setError(null)
    setLoggedIn(false)
    onClose()
  }

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100]"
      onClick={handleClose}
    >
      <div
        className="bg-white rounded-[10px] p-[32px] w-[380px] relative"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close login dialog"
          onClick={handleClose}
          className="absolute right-[16px] top-[16px] text-[#838383] text-[20px] cursor-pointer leading-none"
        >
          ×
        </button>
        <h2 className="font-['Mulish:Bold',sans-serif] font-bold text-[#212121] text-[24px] mb-[24px]">
          Login
        </h2>
        {loggedIn ? (
          <p className="font-['Mulish:Regular',sans-serif] text-[#1e7e34] text-[14px]">
            You're logged in. (This form is UI-only for now — it isn't connected
            to a real account yet.)
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-[16px]"
          >
            <p className="bg-[#edf6ff] rounded-[5px] px-[12px] py-[8px] text-[#005dac] text-[12px] font-['Mulish:Regular',sans-serif]">
              Demo login:{" "}
              <span className="font-['Mulish:Bold',sans-serif] font-bold">
                sampleuser
              </span>{" "}
              /{" "}
              <span className="font-['Mulish:Bold',sans-serif] font-bold">
                samplepassword
              </span>
            </p>
            <label className="flex flex-col gap-[6px]">
              <span className="font-['Mulish:SemiBold',sans-serif] font-semibold text-[#838383] text-[12px]">
                Username
              </span>
              <input
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                className="border border-[#c9c9c9] rounded-[5px] px-[14px] py-[10px] text-[14px] outline-none focus:border-[#ec6625]"
                placeholder="sampleuser"
                autoFocus
              />
            </label>
            <label className="flex flex-col gap-[6px]">
              <span className="font-['Mulish:SemiBold',sans-serif] font-semibold text-[#838383] text-[12px]">
                Password
              </span>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="border border-[#c9c9c9] rounded-[5px] px-[14px] py-[10px] text-[14px] outline-none focus:border-[#ec6625]"
                placeholder="••••••••"
              />
            </label>
            {error && (
              <p className="text-[#c0392b] text-[13px] font-['Mulish:Regular',sans-serif]">
                {error}
              </p>
            )}
            <button
              type="submit"
              className="bg-[#005dac] text-white font-['Arial:Bold',sans-serif] rounded-[5px] py-[11px] cursor-pointer"
            >
              Login
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
export default LoginModal
