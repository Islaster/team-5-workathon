import NeedButton from "./buttons/NeedButton";
import GiveButton from "./buttons/GiveButton";

const Banner = (props) => {
    return (
        <>
        <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.econlib.org%2Fwp-content%2Fuploads%2F2018%2F02%2FCharity-scaled.jpeg&imgrefurl=https%3A%2F%2Fwww.econlib.org%2Flibrary%2FEnc%2FCharity.html&tbnid=zHTsWMRRuwVeeM&vet=12ahUKEwjQ7-HnzuP7AhVEMlMKHSFbDosQMygCegUIARDkAQ..i&docid=BS1GKFoS0hDKBM&w=2560&h=1699&q=charity&ved=2ahUKEwjQ7-HnzuP7AhVEMlMKHSFbDosQMygCegUIARDkAQ" /> 
        <NeedButton />
        <GiveButton />
        </>
    )
}

export default Banner