import React, {useState, useEffect} from 'react';

const Guestlist = () => {
    const [password, setPassword] = useState('')
    const [ list, setList] = useState([])
    const getGuestList = async() => {
        const guests = await fetch('/api/guestList')
        return await guests.json()
    }
    useEffect(()=> {
        getGuestList().then(r => setList(r))
    },[])

    const GuestBox = ({guest}) => {
        return (
            <div className={`flex-1 p-4 border rounded-xl ${guest.rsvp === 'notAttending' ? "border-red-500" : "border-green-500"}`}>
                <p className={'font-semibold'}>Guests</p>
                <p key={guest.key}>{guest.name}</p>
                <p className={'font-semibold'}>RSVP Status</p>
                <p className="capitalize" key={guest.key}>{guest.rsvp}</p>
                {guest?.dietReqs &&(
                    <>
                        <p className={'font-semibold'}>Dietary Requirements</p>
                        <p key={guest.key}>{guest.dietReqs}</p>
                    </>
                    )
                }
                <p className={'font-semibold'}>Message</p>
                <p key={guest.key}>{guest.message}</p>
            </div>
        )
    }

   const numberNotComing = list.filter(i => i.rsvp === "notAttending").length


    return (
        <div className={'container mx-auto'}>
            <input onChange={(e)=>setPassword(e.target.value)} value={password} name={'password'} type={'password'} className='border-none mb-12'/>

            <div className={`${password==='1234' ? 'block px-2': "hidden"}`}>
            <p className={'text-xl font-bold'}>Number of Guests Coming: {list && list.length - numberNotComing}</p>
            <p className={'text-xl font-bold'}>Number of Guests Not Coming: {numberNotComing}</p>
            <p className={'text-xl font-bold'}>Total Number of Guests: {list && list.length}</p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mt-4">
                {list.map((guest) => <GuestBox key={guest.id} guest={guest}/> )}
</div>

            </div>
        </div>
    );
};

export default Guestlist;