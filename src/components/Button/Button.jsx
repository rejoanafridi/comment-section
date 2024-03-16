/* eslint-disable react/prop-types */

const Button = ({ text, children, className, ...props }) => {
    return (
        <div>
            <button {...props} className={`bg-indigo-700 cursor-pointer hover:bg-indigo-700/80  text-white  rounded-md ${className}`}>
                {text}
                {children}
            </button>
        </div>
    )
}

export default Button