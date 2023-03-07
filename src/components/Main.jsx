import { useState } from "react";
import { v4 as uuid } from "uuid";
import defaultData from "./defaultData";

function Main(){
    const [data, setData] = useState(defaultData)

    const handleChangeDetails = (event) => {
        const {value, name} = event.target

        setData((prev) => ({
            ...prev, details: {
                ...prev.details, [name]: value
            }
        }))
    }

    const handleChangeExperience = (event) => {
        const {value, name, id} = event.target

        setData((prev) => {
            const newItem = prev.experience.map((item) => {
                if (item.id === id) {
                  return { ...item, [name]: value }
                }
                return item
              })
              return { ...prev, experience: [...newItem] }
            })
    }

    const handleChangeEducation = (event) => {
        const {value, name, id} = event.target

        setData((prev) => {
            const newItem = prev.education.map((item) => {
                if (item.id === id) {
                  return { ...item, [name]: value }
                }
                return item
              })
              return { ...prev, education: [...newItem] }
            })
    }

    const handleNewSection = (event) => {
        event.preventDefault()
        const btnClass = [...event.target.classList]

        if (btnClass.includes('experience')) {
            setData((prev) => ({
                ...prev, experience: [
                    ...prev.experience, 
                    {
                        id: uuid(),
                        comp: "",
                        compPos: "",
                        compDescription: "",
                        compDate: "",
                    }
                ]
            }))
        }

        else {
            setData((prev) => ({
                ...prev, education: [
                    ...prev.education, 
                    {
                        id: uuid(),
                        course: "",
                        university: "",
                        dateOfStudy: "",
                        courseDescription: ""
                    }
                ]
            }))
        }
    }

    const handleDeleteSection = (event) =>  {
        event.preventDefault()
        const btnClass = [...event.target.classList]
        if (btnClass.includes("experience")) {
            const newList = [...data.experience]
            newList.splice(-1)
            setData((prev) => ({
                ...prev, experience: [
                    ...newList
                ]
            }))
        }
        else {
            const newList = [...data.education]
            newList.splice(-1)
            setData((prev) => ({
                ...prev, education: [
                    ...newList
                ]
            }))
        }
    }

    return (
        <main className="flex flex-wrap justify-center">
            <form className="border-2 p-7 m-9 w-[700px] bg-slate-50">
                <section className="py-5">
                    <h2 className="font-bold">Personal Details</h2>
                    <div className="flex flex-col justify-center gap-2">
                        <input 
                        className="border-2 p-1"
                        type="text"
                        placeholder="Name"
                        name='name'
                        onChange={handleChangeDetails}
                        defaultValue={defaultData.details.name}
                        /> 
                        <input 
                        className="border-2 p-1" 
                        type="text" 
                        placeholder="Position"
                        name="position"
                        onChange={handleChangeDetails}
                        defaultValue={defaultData.details.position}
                        />    
                        <input 
                        className="border-2 p-1" 
                        type="email" 
                        placeholder="Email"
                        name="email"
                        onChange={handleChangeDetails}
                        defaultValue={defaultData.details.email}
                        />                            
                        <input 
                        className="border-2 p-1" 
                        type="tel" 
                        placeholder="Phone Number"
                        name="phone"
                        onChange={handleChangeDetails}
                        defaultValue={defaultData.details.phone}
                        />
                    </div>
                </section>
                <section className="flex flex-col py-5">
                    <h2 className="font-bold">Work Experience</h2>
                    {data.experience.map((item) => {
                        return (
                            <div className="flex flex-col justify-center gap-2 mb-8" key={item.id}>
                                <input            
                                id={item.id}                     
                                className="border-2 p-1" 
                                type="text" 
                                placeholder="Company"
                                name="comp"
                                onChange={handleChangeExperience}
                                defaultValue={item.comp}
                                />   
                                <input 
                                id={item.id}  
                                className="border-2 p-1" 
                                type="text" 
                                placeholder="Position"
                                name="compPos"
                                onChange={handleChangeExperience}
                                defaultValue={item.compPos}
                                />
                                <input
                                id={item.id}  
                                className="border-2 p-1" 
                                type="text" 
                                placeholder="Start Date"
                                name="compDate"
                                onChange={handleChangeExperience}
                                defaultValue={item.compDate}
                                />    
                                <input 
                                id={item.id}  
                                className="border-2 p-1 pb-9" 
                                type="text" 
                                placeholder="Description"
                                name="compDescription"
                                onChange={handleChangeExperience}
                                defaultValue={item.compDescription}
                                />   
                            </div>
                        )
                    })}
                    <button className="experience font-bold py-2 px-4 mb-2 bg-slate-400 rounded-[10px]" onClick={handleNewSection}>Add</button>
                    <button className="experience font-bold py-2 px-4 bg-slate-400 rounded-[10px]" onClick={handleDeleteSection}>Delete</button>
                </section>
                <section className="flex flex-col py-5">
                    <h2 className="font-bold">Education</h2>
                    {data.education.map((item) => {
                        return (
                            <div className="flex flex-col justify-center gap-2 mb-8" key={item.id}>
                                <input 
                                id={item.id} 
                                className="border-2 p-1" 
                                type="text" 
                                placeholder="Course"
                                name="course"
                                onChange={handleChangeEducation}
                                defaultValue={item.course}
                                />   
                                <input 
                                id={item.id} 
                                className="border-2 p-1" 
                                type="text" 
                                placeholder="University"
                                name="university"
                                onChange={handleChangeEducation}
                                defaultValue={item.university}
                                />    
                                <input 
                                id={item.id} 
                                className="border-2 p-1" 
                                type="text" 
                                placeholder="Date of Study"
                                name="dateOfStudy"
                                onChange={handleChangeEducation}
                                defaultValue={item.dateOfStudy}
                                />    
                                <input 
                                id={item.id} 
                                className="border-2 p-1 pb-9" 
                                type="text" 
                                placeholder="Description"
                                name="courseDescription"
                                onChange={handleChangeEducation}
                                defaultValue={item.courseDescription}
                                />
                            </div>
                        )
                    })}
                    <button className="education font-bold py-2 px-4 mb-2 bg-slate-400 rounded-[10px]" onClick={handleNewSection}>Add</button>
                    <button className="education font-bold py-2 px-4 bg-slate-400 rounded-[10px]" onClick={handleDeleteSection}>Delete</button>
                </section>
            </form>

            <div className="flex flex-col text-center w-[700px] border-2 m-9 p-8 bg-slate-50">
                <div className="flex flex-col text-center mb-9">
                    <h1 className="text-7xl pb-3">{data.details.name}</h1>
                    <h2 className="font-light text-3xl">{data.details.position}</h2>   
                </div>
                <div>
                <h3 className="text-xl font-bold p-2">Contact</h3>
                    <p>{data.details.email}</p>
                    <p>{data.details.phone}</p>
                </div>
                <div className="pt-10">
                    <h3 className="mb-8 text-3xl font-bold">Experience</h3>
                    {data.experience.map((item) => {
                        return (
                            <div className="grid grid-cols-4 my-10 text-left" key={item.id}>
                                <div className="flex flex-col col-span-2 mb-4">
                                    <h5 className="text-2xl font-bold">{item.compPos}</h5>
                                    <h6 className="text-lg font-bold">{item.comp}</h6>
                                    <p>{item.compDate}</p>
                                </div>
                                <div className="flex flex-col col-span-4">
                                    <p>{item.compDescription}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div>
                    <h4 className="mb-8 text-3xl font-bold text-center">Education</h4>
                    {data.education.map((item) => {
                            return (
                                <div className="grid grid-cols-4 my-10 text-left" key={item.id}>
                                    <div className="flex flex-col col-span-2 mb-4">
                                        <h5 className="text-xl font-bold">{item.course}</h5>
                                        <h6 className="text-lg font-bold">{item.university}</h6>
                                        <p>{item.dateOfStudy}</p>
                                    </div>
                                    <div className="flex flex-col col-span-4">
                                        <p>{item.courseDescription}</p>
                                    </div>
                                </div>
                            )
                        })}
                </div>
            </div>
        </main>
    )
}

export default Main