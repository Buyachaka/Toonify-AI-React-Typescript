import React from "react";

interface ActionButtonProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>
    children: React.ReactNode,
    disabled?: boolean,
    loading?: boolean
}

export const ActionButton = ({onClick, children, disabled, loading}: ActionButtonProps) => {

    return (
        <div className="w-full flex content-center justify-center mt-10 ">

            <button type="button"
                    onClick={onClick}
                    disabled={disabled}
                    className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                {
                    loading ? 'Loading...' : children
                }
            </button>
        </div>
    )
}