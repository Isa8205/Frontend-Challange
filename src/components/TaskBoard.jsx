import { ChevronDownSquare, ChevronDownSquareIcon, PlusIcon } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { div, span } from "framer-motion/client";

function TaskBoard() {

    const [arrowiconstate, seticonstate] = useState(0)

    let data = [
        { id: 1, nature: 'done', coverImage: "https://picsum.photos/650/200", priority: "MEDIUM", heading: 'Update Website features', description: 'Revise the content and layout of the homepage to highlight new features and improve user engagement' },
        { id: 2, nature: 'in-progress', coverImage: "https://picsum.photos/650/450", priority: "HIGH", heading: 'Update Website features', description: 'Revise the content and layout of the homepage to highlight new features and improve user engagement' },
        { id: 3, nature: 'in-progress', coverImage: "https://picsum.photos/650/350", priority: "LOW", heading: 'Update Website features', description: 'Revise the content and layout of the homepage to highlight new features and improve user engagement' },
        { id: 4, nature: 'in-progress', coverImage: "https://picsum.photos/650/400", priority: "HIGH", heading: 'Update Website features', description: 'Revise the content and layout of the homepage to highlight new features and improve user engagement' },
        { id: 5, nature: 'done', coverImage: "https://picsum.photos/650/350", priority: "MEDIUM", heading: 'Update Website features', description: 'Revise the content and layout of the homepage to highlight new features and improve user engagement' },
        { id: 6, nature: 'review', coverImage: "https://picsum.photos/650/400", priority: "LOW", heading: 'Update Website features', description: 'Revise the content and layout of the homepage to highlight new features and improve user engagement' },
        { id: 7, nature: 'review', coverImage: "https://picsum.photos/800/200", priority: "HIGH", heading: 'Update Website features', description: 'Revise the content and layout of the homepage to highlight new features and improve user engagement' },
        { id: 8, nature: 'review', coverImage: "https://picsum.photos/650/350", priority: "MEDIUM", heading: 'Update Website features', description: 'Revise the content and layout of the homepage to highlight new features and improve user engagement' },
        { id: 9, nature: 'pending', coverImage: "https://picsum.photos/650/250", priority: "HIGH", heading: 'Update Website features', description: 'Revise the content and layout of the homepage to highlight new features and improve user engagement' },
        { id: 10, nature: 'pending', coverImage: "https://picsum.photos/650/200", priority: "LOW", heading: 'Update Website features', description: 'Revise the content and layout of the homepage to highlight new features and improve user engagement' },
        { id: 11, nature: 'pending', coverImage: "https://picsum.photos/650/300", priority: "MEDIUM", heading: 'Update Website features', description: 'Revise the content and layout of the homepage to highlight new features and improve user engagement' },
    ]

    const [tasks, setTask] = useState(data)

    const setBtnPriority = (priority) => {
        switch (priority) {
            case 'HIGH':
                return 'red';
            case 'MEDIUM':
                return 'orange';
            case 'LOW':
                return 'green';
            case 'NOT SET':
                return 'gray'
            default:
                return 'gray'
        }
    }

    const changepriority = (id, newPriority) => {
        setTask((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, priority: newPriority } : task
            )
        );
    }

    const togglePriorityChange = (currentPriority, id) => {
        const priorities = ['HIGH', 'LOW', 'MEDIUM']
        const rect = document.getElementById(`priority-btn-${id}`)

        const { top, left, bottom, width, height } = rect.getBoundingClientRect();

        return (
            <div className="priority-changer flex flex-col" style={{ position: 'absolute', top: `${bottom}px`, left: `${left}px` }}>
                {priorities.map((priority) => {
                    if (priority !== currentPriority) {
                        return (
                            <span className={`item bg-${setBtnPriority(priority)}-600`} style={{ height: `${height}`, width: `${width}` }}>{priority}</span>
                        )
                    }
                })}
            </div>
        )
    }

    return (
        <>
            <div className=" grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 bg-slate-300 gap-2 p-2">
                {/* The to-do section */}
                <section className="to-do">

                    <h3 className="text-2xl m-2 flex items-center">To do  <PlusIcon className="h-5 text-gray-400" /></h3>

                    {tasks.map((task) => {
                        if (task.nature === 'pending') {
                            return (
                                <div className="card rounded-lg bg-white flex flex-col py-2 px-2 shadow-lg mb-2" id={task.id} key={task.id}>
                                    <div className="priority flex justify-between">
                                        <div className="fixed button-group flex" id={`priority-btn-${task.id}`}>
                                            <button
                                                className={`flex bg-${setBtnPriority(task.priority)}-600 py-0 px-2 text-white rounded-l-sm`}
                                            >
                                                {task.priority ? task.priority : 'NOT SET'}
                                            </button>
                                            <button
                                                className={`bg-${setBtnPriority(task.priority)}-700 rounded-r-sm`}
                                                onClick={() => togglePriorityChange(task.priority, task.id)}
                                            >
                                                <motion.span
                                                    animate={{ rotate: arrowiconstate }}
                                                    transition={{ duration: .4, ease: 'linear' }}
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
                                                </motion.span>
                                            </button>
                                        </div>
                                        <span className="text-center text-gray-400">2/4/25</span>
                                    </div>

                                    <div className="cover-image py-3 ">
                                        <img src={task.coverImage} alt="Cover image" className="rounded-xl w-full h-50 object-cover" />
                                    </div>

                                    <div className="description">
                                        <h2 className="text-start text-2xl font-bold">{task.heading}</h2>

                                        <p className="text-sm text-start">{task.description}</p>
                                    </div>

                                    <div className="contributors">
                                        <span className="rounded"></span>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </section>

                <section className="in-progress">

                    <h3 className="text-2xl m-2 flex items-center">In Progress  <PlusIcon className="h-5 text-gray-400" /></h3>

                    {tasks.map((task) => {
                        if (task.nature === 'in-progress') {
                            return (
                                <div className="card rounded-lg bg-white flex flex-col py-2 px-2 shadow-lg mb-2" id={task.id}>
                                    <div className="priority flex justify-between">
                                        <div className="button-group flex" id={`priority-btn-${task.id}`}>
                                            <button className={`flex bg-${setBtnPriority(task.priority)}-600 py-0 px-2 text-white rounded-l-sm`}>
                                                {task.priority ? task.priority : 'NOT SET'}
                                            </button>
                                            <button className={`bg-${setBtnPriority(task.priority)}-700 rounded-r-sm`}>
                                                <motion.span
                                                    animate={{ rotate: arrowiconstate }}
                                                    transition={{ duration: .4, ease: 'linear' }}
                                                    onClick={() => seticonstate(prev => (prev === 0 ? 180 : 0))}
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
                                                </motion.span>
                                            </button>
                                        </div>
                                        <span className="text-center text-gray-400">2/4/25</span>
                                    </div>

                                    <div className="cover-image py-3 ">
                                        <img src={task.coverImage} alt="Cover image" className="rounded-xl w-full h-50 object-cover" />
                                    </div>

                                    <div className="description">
                                        <h2 className="text-start text-2xl font-bold">{task.heading}</h2>

                                        <p className="text-sm text-start">{task.description}</p>
                                    </div>

                                    <div className="contributors">
                                        <span className="rounded"></span>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </section>

                <section className="under-review">

                    <h3 className="text-2xl m-2 flex items-center">Under Review  <PlusIcon className="h-5 text-gray-400" /></h3>

                    {tasks.map((task) => {
                        if (task.nature === 'review') {
                            return (
                                <div className="card rounded-lg bg-white flex flex-col py-2 px-2 shadow-lg mb-2" id={task.id}>
                                    <div className="priority flex justify-between">
                                        <div className="button-group flex">
                                            <button className={`flex bg-${setBtnPriority(task.priority)}-600 py-0 px-2 text-white rounded-l-sm`}>
                                                {task.priority ? task.priority : 'NOT SET'}
                                            </button>
                                            <button className={`bg-${setBtnPriority(task.priority)}-700 rounded-r-sm`}>
                                                <motion.span
                                                    animate={{ rotate: arrowiconstate }}
                                                    transition={{ duration: .4, ease: 'linear' }}
                                                    onClick={() => seticonstate(prev => (prev === 0 ? 180 : 0))}
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
                                                </motion.span>
                                            </button>
                                        </div>
                                        <span className="text-center text-gray-400">2/4/25</span>
                                    </div>

                                    <div className="cover-image py-3 ">
                                        <img src={task.coverImage} alt="Cover image" className="rounded-xl w-full h-50 object-cover" />
                                    </div>

                                    <div className="description">
                                        <h2 className="text-start text-2xl font-bold">{task.heading}</h2>

                                        <p className="text-sm text-start">{task.description}</p>
                                    </div>

                                    <div className="contributors">
                                        <span className="rounded"></span>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </section>

                <section className="done">

                    <h3 className="flex items-center text-2xl m-2">Done  <PlusIcon className="h-5 text-gray-400" /></h3>

                    {tasks.map((task) => {
                        if (task.nature === 'done') {
                            return (
                                <div className="card rounded-lg bg-white flex flex-col py-2 px-2 shadow-lg mb-2" id={task.id}>
                                    <div className="priority flex justify-between">
                                        <div className="button-group flex">
                                            <button className={`flex bg-${setBtnPriority(task.priority)}-600 py-0 px-2 text-white rounded-l-sm`}>
                                                {task.priority ? task.priority : 'NOT SET'}
                                            </button>
                                            <button className={`bg-${setBtnPriority(task.priority)}-700 rounded-r-sm`}>
                                                <motion.span
                                                    animate={{ rotate: arrowiconstate }}
                                                    transition={{ duration: .4, ease: 'linear' }}
                                                    onClick={() => seticonstate(prev => (prev === 0 ? 180 : 0))}
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
                                                </motion.span>
                                            </button>
                                        </div>
                                        <span className="text-center text-gray-400">2/4/25</span>
                                    </div>

                                    <div className="cover-image py-3 ">
                                        <img src={task.coverImage} alt="Cover image" className="rounded-xl w-full h-50 object-cover" />
                                    </div>

                                    <div className="description">
                                        <h2 className="text-start text-2xl font-bold">{task.heading}</h2>

                                        <p className="text-sm text-start">{task.description}</p>
                                    </div>

                                    <div className="contributors">
                                        <span className="rounded"></span>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </section>

            </div>
        </>
    )
}

export default TaskBoard;