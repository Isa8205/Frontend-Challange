
function TaskBoard() {

    return (
        <>
            <div className=" grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 bg-slate-300 h-screen gap-2">
                {/* The to-do section */}
                <section className="to-do">

                    <h3 className="text-2xl m-2">To do</h3>

                    <div className="card rounded-lg bg-white flex flex-col py-2 px-2 shadow-lg">
                        <div className="priority flex justify-between">
                            <button className="bg-red-500 rounded-md py-0 px-2 text-white">HIGH</button>
                            <span className="text-center text-gray-400">2/4/25</span>
                        </div>

                        <div className="cover-image py-3 ">
                            <img src="https://picsum.photos/800/400" alt="Cover image" className="rounded-xl w-full h-50 object-cover" />
                        </div>

                        <div className="description">
                            <h2 className="text-start text-2xl font-bold">Update Website Homepage</h2>

                            <p className="text-sm text-start">
                                Revise the content and layout of the homepage to highlight new features and improve user engagement
                            </p>
                        </div>

                        <div className="contributors">
                            <span className="rounded"></span>
                        </div>
                    </div>
                </section>

                <section className="to-do">

                    <h3 className="text-2xl m-2">To do</h3>

                    <div className="card rounded-lg bg-white flex flex-col py-2 px-2 shadow-lg">
                        <div className="priority flex justify-between">
                            <button className="bg-red-500 rounded-md py-0 px-2 text-white">HIGH</button>
                            <span className="text-center text-gray-400">2/4/25</span>
                        </div>

                        <div className="cover-image py-3 ">
                            <img src="https://picsum.photos/650/200" alt="Cover image" className="rounded-xl w-full h-50 object-cover" />
                        </div>

                        <div className="description">
                            <h2 className="text-start text-2xl font-bold">Update Website Homepage</h2>

                            <p className="text-sm text-start">
                                Revise the content and layout of the homepage to highlight new features and improve user engagement
                            </p>
                        </div>

                        <div className="contributors">
                            <span className="rounded"></span>
                        </div>
                    </div>
                </section>

                <section className="to-do">

                    <h3 className="text-2xl m-2">To do</h3>

                    <div className="card rounded-lg bg-white flex flex-col py-2 px-2 shadow-lg">
                        <div className="priority flex justify-between">
                            <button className="bg-red-500 rounded-md py-0 px-2 text-white">HIGH</button>
                            <span className="text-center text-gray-400">2/4/25</span>
                        </div>

                        <div className="cover-image py-3 ">
                            <img src="https://picsum.photos/700/400" alt="Cover image" className="rounded-xl w-full h-50 object-cover" />
                        </div>

                        <div className="description">
                            <h2 className="text-start text-2xl font-bold">Update Website Homepage</h2>

                            <p className="text-sm text-start">
                                Revise the content and layout of the homepage to highlight new features and improve user engagement
                            </p>
                        </div>

                        <div className="contributors">
                            <span className="rounded"></span>
                        </div>
                    </div>
                </section>

                <section className="to-do">

                    <h3 className="text-2xl m-2">To do</h3>

                    <div className="card rounded-lg bg-white flex flex-col py-2 px-2 shadow-lg">
                        <div className="priority flex justify-between">
                            <button className="bg-red-500 rounded-md py-0 px-2 text-white">HIGH</button>
                            <span className="text-center text-gray-400">2/4/25</span>
                        </div>

                        <div className="cover-image py-3 ">
                            <img src="https://picsum.photos/900/400" alt="Cover image" className="rounded-xl w-full h-50 object-cover" />
                        </div>

                        <div className="description">
                            <h2 className="text-start text-2xl font-bold">Update Website Homepage</h2>

                            <p className="text-sm text-start">
                                Revise the content and layout of the homepage to highlight new features and improve user engagement
                            </p>
                        </div>

                        <div className="contributors">
                            <span className="rounded"></span>
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default TaskBoard;