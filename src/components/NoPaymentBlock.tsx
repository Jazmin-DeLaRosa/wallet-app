const NoPaymentBlock = () => (
    <div className="flex flex-col justify-between h-full">
        <div>
            <h2 className="text-sm font-semibold text-black">No Payment Due</h2>
            <p className="text-sm text-gray-500">You've paid your September balance.</p>
        </div>
        <div className="flex justify-end mt-4">
            <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
            </div>
        </div>
    </div>
);
export default NoPaymentBlock;