import {
  classnames,
  backgroundColor,
  height,
  display,
  alignItems,
  justifyContent,
  flexDirection,
  gap,
  padding,
  borderRadius,
  fontWeight,
  fontSize,
  width,
  borders,
  transitionProperty,
  transitionsAndAnimations,
} from 'tailwindcss-classnames'

const formContainer = classnames(
  backgroundColor("bg-sky-300"),
  height("h-screen"),
  display("flex"),
  alignItems("items-center"),
  justifyContent("justify-center")
);

const formWrapper = classnames(
  display("flex"),
  padding("p-20"),
  backgroundColor("bg-slate-200"),
  flexDirection("flex-col"),
  gap("gap-6"),
  borderRadius("rounded-md"),
)

const logo = classnames(
  display("flex"),
  alignItems("items-center"),
  justifyContent("justify-center"),
  fontWeight("font-bold"),
  fontSize("text-3xl")
)

const formMain = classnames(
  display("flex"),
  flexDirection("flex-col"),
  gap("gap-4"),
  transitionsAndAnimations("transition", "ease-in-out")
);

const formField = classnames(
  padding("p-2"),
  display("block"),
  width("w-full"),
  borderRadius("rounded"),
  fontWeight("font-normal"),
)

const Register = () => {
  return (
    <>
      <div className={formContainer}>
        <div className={formWrapper}>
          <span className={logo}>kitaChat</span>
          <form className={formMain}>
            <input className={formField} type="text" placeholder="username" />
            <input className={formField} type="email" placeholder="email" />
            <input className={formField} type="password" placeholder="password" />
            <button>Sign Up</button>
          </form>
          <p>Already have an account? Login</p>
        </div>
      </div>
    </>
  )
}

export default Register
