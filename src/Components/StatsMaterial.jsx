

const StatsMaterial = ({title, num, time, unit}) => {
    return (
        <div className="max-w-sm mx-auto my-10">
            <div className="bg-white shadow-lg rounded-lg p-6 space-y-4">
                <div className="flex items-center space-x-4">
                    <div className="p-2 bg-purple-200 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a2 2 0 00-2-2h-3v4z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 15V7a2 2 0 012-2h10a2 2 0 012 2v8" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 15v4a2 2 0 002 2h3v-4" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 15h16" />
                        </svg>
                    </div>
                    <div>
                        <div className="text-gray-600 text-sm">{title}</div>
                        <div className="text-gray-900 text-2xl font-semibold">
                            {num?num:time} {unit}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatsMaterial
