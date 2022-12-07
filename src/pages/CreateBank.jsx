import {useState, useEffect } from "react"


const NewBank = (props) => {
    const [bank, setBank] = useState()
    const [bankForm, setBankForm] = useState({
        title: "",
        review: "",
        eligibility: "",
        intake: "",
        phone: "",
        email: "",

    })

    const BASE_URL = "http://localhost/3001"
    const getBank = async () => {
        try {
            const response = await fetch(BASE_URL);
            const allBanks = await response.json();
            setBank(allBanks);
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getBank()
    }, []);

    const handleChange = (e) => {
        setBankForm({ ...bankForm, [e.target.name]: e.target.value})
        console.log(e.target)
    };

    // const createBank = async(bankData) => {
    //     try{
    //         const newBank = await fetch(BASE_URL, {
    //             method: "post",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(bankData)
    //         });
    //         getBank();   
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newBank = { ...bankForm };
        const options = {
            mthod: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newBank)
        }
        const response = await fetch(BASE_URL, options)
        const responseData = await response.json();
        getBank(setBank)
        setBankForm({ 
            title: "", 
            review: "",
            eligibility: "",
            intake: "",
            phone: "",
            email: "",
        })
    }

    const loaded = () => {
        return bank?.map((bank, idx) => {
            return (
                <div key={bank.id} className="bank-card">
                    <h1>{bank.name}</h1>
                </div>
            )
        })
    }
    
    return (
       <section>
        {bank ? loaded() : null}
        <section>
            <h3>Register New Bank</h3>
            <form onSubmit={handleSubmit}>
            <input 
                type="text"
                required
                value={bankForm.title}
                name="title"
                placeholder="title"
                onChange={handleChange}
                />
                <input 
                type="text"
                required
                value={bankForm.intake}
                name="intake"
                placeholder="Intake"
                onChange={handleChange}
                />
                <input 
                type="tel"
                required
                value={bankForm.phone}
                name="phone"
                placeholder="(XXX)XXX-XXXX"
                onChange={handleChange}
                />
               <input 
                type="email"
                required
                value={bankForm.email}
                name="email"
                placeholder="email"
                onChange={handleChange}
                />
                <input type="submit" value="Create New Food Bank"/>
            </form>
        </section>
       </section>
    )
}

export default NewBank