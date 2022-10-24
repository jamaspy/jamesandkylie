import React, {useState} from 'react';
import Button from "../Button";
import {
    ClockIcon,
    EnvelopeIcon,
    EnvelopeOpenIcon,
    ExclamationTriangleIcon,
    HandThumbDownIcon,
    HandThumbUpIcon
} from "@heroicons/react/20/solid";
import {useConfetti} from "../Confetti/ConfettiContext";
import Link from "next/link";
import {ConfettiContainer} from "../Confetti/ConfettiContaier";

const Rsvp = () => {
    const {showConfetti} = useConfetti()
    const [name, setName] = useState("")
    const [rsvp, setRsvp] = useState("attending")
    const [dietReqs, setDietReqs] = useState('')
    const [message, setMessage] = useState('')
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [isError, setIsError] = useState(false)
    const rsvpOptions = [
        {
            id: 'attending',
            value: "attending",
            name: 'Attending',
            description: "We'll be there & have NO dietary requirements"
        },
        {
            id: 'attendingWithReqs',
            value: "attendingWithReq",
            name: 'Attending w/ Dietary Requirements',
            description: "We'll be there & have some dietary requirements"
        },
        {
            id: 'notAttending',
            value: "notAttending",
            name: 'Not Attending ',
            description: 'Sorry, we can not make it :( '
        },
    ]

    const handleSubmit = async (e) => {
        e.preventDefault()
        const body = {name, rsvp, dietReqs, message}

        setIsSending(true)
        try {
            const response = await fetch('/api/rsvp', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body)
            })
            if (response.status !== 200) {
                console.log('something went wrong')
            } else {
                setIsSending(false)
                setIsSent(true)
                setIsError(false)
                showConfetti()
                resetForm()
                console.log('form submitted successfully !!!', response.json())
                //set a success banner here
            }
            //check response, if success is false, dont take them to success page
        } catch (error) {
            setIsSending(false)
            setIsSent(false)
            setIsError(true)
            console.log('there was an error submitting', error)
        }
    }

    const resetForm = () => {
        setName('')
        setRsvp("attending")
        setDietReqs('')
        setMessage('')
    }

    const hasNoData = name.length === 0 || rsvp.length === 0
    return (
        <div className='container mx-auto'>
            <ConfettiContainer/>
            <form onSubmit={handleSubmit}>
                <div className={'mb-12'}>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        <h2 className="text-lg font-medium leading-6 text-gray-900">Names</h2>
                    </label>
                    <div className="mt-1">
                        <input
                            type="name"
                            name="name"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="block w-full rounded-md border border-slate-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                            placeholder="Enter all the names in your party"
                            aria-describedby="name-description"
                        />
                    </div>
                    <p className="mt-2 text-sm text-gray-500" id="email-description">
                        Please enter all the full names of the people in your party
                    </p>
                </div>

                <div className="">
                    <h2 className="text-lg font-medium leading-6 text-gray-900">RSVP</h2>
                    <p className="mt-1 text-sm text-gray-500">Let us know if you can make it.</p>
                    <fieldset className="mt-2">
                        <legend className="sr-only">Bank account</legend>
                        <div className="divide-y divide-gray-200">
                            {rsvpOptions.map((option, optionIdx) => (
                                <div key={optionIdx}
                                     className={`relative flex justify-center items-start p-4 ${option.id === rsvp ? "bg-slate-50" : ""} `}>
                                    <div className="min-w-0 flex-1 text-sm">
                                        <label htmlFor={`option-${option.id}`} className="font-medium text-gray-700">
                                            {option.name}
                                        </label>
                                        <p id={`option-${option.id}-description`} className="text-gray-500">
                                            {option.description}
                                        </p>
                                    </div>
                                    <div className="ml-3 flex h-5 items-center">
                                        <input
                                            id={`${option.id}`}
                                            aria-describedby={`${option.id}-description`}
                                            name="rsvp"
                                            value={rsvp}
                                            type="radio"
                                            defaultChecked={option.id === 'attending'}
                                            onChange={(e) => setRsvp(e.target.id)}
                                            className="h-4 w-4 border-gray-300 text-slate-800 focus:ring-slate-500"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </fieldset>
                </div>
                {rsvp === "attendingWithReqs" &&
                    <div className={'mt-8'}>
                        <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
                            Add your dietary requirements here.
                        </label>
                        <div className="mt-1">
                            <textarea
                                rows={4}
                                name="diet_requirements"
                                id="diet_requirements"
                                value={dietReqs}
                                onChange={(e) => setDietReqs(e.target.value)}
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"

                            />
                        </div>
                    </div>
                }
                <div className={'mt-8'}>
                    <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
                        <p>Message <span className='text-xs text-gray-400'>(optional)</span></p>
                    </label>
                    <div className="mt-1">
                            <textarea
                                rows={4}
                                name="message"
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"

                            />
                    </div>
                </div>

                {isSent && (
                    <div
                        className={'flex flex-row items-center justify-center bg-green-100 rounded-xl p-4 my-3 text-slate-700'}>
                        <HandThumbUpIcon className="h-8 w-6 mr-4"/>
                        <p>RSVP Successfully Sent | <Link passHref href={"/accommodation"}><a><span
                            className="text-slate-500 text-sm">View Accommodation </span></a></Link></p>
                    </div>
                )}
                {isError && (
                    <div
                        className={'flex flex-row items-center justify-center bg-red-100 rounded-xl p-4 my-3 text-slate-700'}>
                        <HandThumbDownIcon className="h-8 w-6 mr-4"/>There was an error :(
                    </div>
                )}

                <Button
                    className={`my-4 ${isSending && 'bg-orange-600'} ${isSent && "bg-green-600"} ${isError && "bg-red-600"} ${hasNoData || isSending || isSent && "cursor-not-allowed"}`}
                    type="submit"
                    disabled={hasNoData || isSending || isSent}
                >
                    {isSending && <ClockIcon className="h-6 w-6 text-white mr-2 "/>}
                    {isSent && <EnvelopeIcon className="h-6 w-6 text-white mr-2 "/>}
                    {isError && !isSent && <ExclamationTriangleIcon className="h-6 w-6 text-white mr-2 "/>}
                    {!isSent && !isSending && !isError && <EnvelopeOpenIcon className="h-6 w-6 text-white mr-2 "/>}
                    <p>RSVP</p>
                </Button>

            </form>


        </div>
    );
};

export default Rsvp;